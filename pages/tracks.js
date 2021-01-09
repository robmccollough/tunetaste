import React from 'react';
import { Container, Typography } from '@material-ui/core';
import Header from '../components/header/Header';
import { getFeaturesFromTrackList, getGenresFromArtistIds, getTopTracks } from '../lib/fetching';
import { averageTrackFeatures } from '../lib/parsing';
import TopTracksDisplay from '../components/tracks/TopTracksDisplay';
import Oops from '../components/auth/Oops';
const TracksPage = (props) => {
    const { access_code, authenticated, track_data, track_features } = props;

    console.log(track_features);
    console.log(track_data);

    if (!authenticated) {
        return (
            <Container maxWidth={false} disableGutters>
                <Header access_code={null} />
                <Oops message={'Your access code was missing or expired.'} />
            </Container>
        );
    }

    return (
        <Container maxWidth={false} disableGutters>
            <Header access_code={access_code} />
            <Container maxWidth="xl" disableGutters>
                <Typography align="center" gutterBottom variant="h4">
                    Your most jammin jams
                </Typography>
                <TopTracksDisplay track_data={track_data} track_features={track_features} />
            </Container>
        </Container>
    );
};

export async function getServerSideProps(context) {
    if (!context.query.access_code) {
        return {
            props: {
                authenticated: false
            }
        };
    }

    //Fetch top tracks from api
    let tracks = await getTopTracks(context.query.access_code).then((r) => {
        console.log('Recieved Track Data: ', r);
        return r;
    });

    //Grab track ids in order to request audio features
    let track_ids = tracks.items.map((elt) => elt.id).join(',');

    //Grab artist ids in order to request track genres
    //SOME SONGS HAVE MULTIPLE ARTISTS,THIS ONLY TAKES THE FIRST ONE
    let artist_ids = tracks.items.map((elt) => elt.artists[0].id).join(',');

    let genres = await getGenresFromArtistIds(context.query.access_code, artist_ids).then((r) => {
        console.log('Recieved Track Genres: ', r);
        return r;
    });

    let features = await getFeaturesFromTrackList(context.query.access_code, track_ids).then(
        (r) => {
            console.log('Recieved Track Features: ', r);

            //For each individual track feature object, add in the genres associated with its primary artist
            r.audio_features.forEach((track) => {
                //Find artist id from full track list
                let first_artist_id = tracks.items.find((elt) => elt.id == track.id).artists[0].id;

                track['genres'] = genres.artist_id_to_genres[first_artist_id];
            });

            let aggregate_features = {
                ...averageTrackFeatures(r.audio_features),
                genre_counts: genres.total_genre_counts
            };

            return {
                individual_features: r.audio_features,
                aggregate_features: aggregate_features
            };
        }
    );

    return {
        props: {
            authenticated: true,
            access_code: context.query.access_code,
            track_data: tracks,
            track_features: features
        }
    };
}

export default TracksPage;
