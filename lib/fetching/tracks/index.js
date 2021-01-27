import { getTopTracks, getFeaturesFromTrackList, getGenresFromArtistIds } from '..';
import { averageTrackFeatures } from '../../parsing';

const default_params = {
    limit: 20,
    offset: 0,
    time_range: 'medium_term'
};

//Takes access code and track params and returns the whole shebang
export async function trackDataPropBuilder(access_code, track_params) {
    //Fetch top tracks from api
    let tracks = await getTopTracks(access_code, track_params);

    //Grab track ids in order to request audio features
    let track_ids = tracks.items.map((elt) => elt.id).join(',');

    //Grab artist ids in order to request track genres
    //SOME SONGS HAVE MULTIPLE ARTISTS,THIS ONLY TAKES THE FIRST ONE
    let artist_ids = tracks.items.map((elt) => elt.artists[0].id).join(',');

    //Fetch all genres for those artists
    let genres = await getGenresFromArtistIds(access_code, artist_ids);

    let features = await getFeaturesFromTrackList(access_code, track_ids).then((r) => {
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
    });

    return {
        tracks: tracks,
        features: features
    };
}
