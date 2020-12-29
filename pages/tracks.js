import React, { useState } from 'react';
import Router from 'next/router';
import { Container } from '@material-ui/core';
import Header from '../components/header/Header';
import Track from '../components/tracks/Track';
import DataSelectionLayout from '../components/general/DataSelectionLayout';
import { getFeaturesFromTrackList, getTopTracks } from '../lib/fetching';

const TracksPage = (props) => {
    const { access_code, authenticated, track_data, track_features } = props;
    console.log(track_features);
    if (!authenticated) {
        Router.push('/login');
        return <span>Taking you to log in...</span>;
    }

    const [feature_data, setFeatureData] = useState(track_features.avg_features);

    //Populate list items, pass through data set function and add the
    let list_items = track_data.items.map((elt, index) => {
        return (
            <Track
                data={elt}
                key={index}
                listNumber={index}
                features={track_features.all_features.find((feature) => feature.id == elt.id)}
                select={setFeatureData}
            />
        );
    });
    return (
        <Container maxWidth={false} disableGutters>
            <Header access_code={access_code} />
            <Container maxWidth="lg" disableGutters>
                <DataSelectionLayout item_data={list_items} feature_data={feature_data} />
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

    let tracks = await getTopTracks(context.query.access_code).then((r) => {
        console.log('Recieved Track Data: ', r);
        return r;
    });
    let ids = tracks.items.reduce((acc, curr) => acc + curr.id + ',', '');

    let features = await getFeaturesFromTrackList(context.query.access_code, ids).then((r) => {
        console.log('Recieved Track Features: ', r);
        let avg_features = r.audio_features.reduce(
            (acc, curr, index, arr) => {
                acc.danceability += curr.danceability / arr.length;
                acc.key += curr.key / arr.length;
                acc.energy += curr.energy / arr.length;
                acc.loudness += curr.loudness / arr.length;
                acc.mode += curr.mode / arr.length;
                acc.speechiness += curr.speechiness / arr.length;
                acc.acousticness += curr.acousticness / arr.length;
                acc.instrumentalness += curr.instrumentalness / arr.length;
                acc.liveness += curr.liveness / arr.length;
                acc.valence += curr.valence / arr.length;
                acc.tempo += curr.tempo / arr.length;
                return acc;
            },
            {
                danceability: 0,
                energy: 0,
                key: 0,
                loudness: 0,
                mode: 0,
                speechiness: 0,
                acousticness: 0,
                instrumentalness: 0,
                liveness: 0,
                valence: 0,
                tempo: 0
            }
        );

        // Object.keys(avg_features).forEach(
        //     (elt) => (avg_features[elt] = avg_features[elt] / r.audio_features.length)
        // );
        console.log(avg_features);
        return {
            all_features: r.audio_features,
            avg_features: avg_features
        };
    });

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
