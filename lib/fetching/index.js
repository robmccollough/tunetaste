import axios from 'axios';
import { parseGenresFromArtists } from '../parsing';

const base = 'https://api.spotify.com/v1';
const default_params = {
    limit: 20,
    offset: 0,
    time_range: 'medium_term'
};
//All of these functions take an access code and return that piece of data
//Errors bubble up to the prop builder functions
export async function getTopTracks(code, params) {
    return await axios({
        method: 'get',
        url: base + '/me/top/tracks',
        params: params ? params : default_params,
        headers: {
            authorization: 'Bearer ' + code
        }
    }).then((res) => res.data);
}

export async function getTopArtists(code) {
    let result = await axios({
        method: 'get',
        url: base + '/me/top/artists',
        params: default_params,
        headers: {
            authorization: 'Bearer ' + code
        }
    })
        .then((res) => {
            console.log('Artists fetched successfully');
            return res.data;
        })
        .catch((err) => {
            console.log('Artists fetch error: ' + err);
            return {
                error: err
            };
        });

    return result;
}

export async function getAllPlaylists(code) {
    let result = await axios({
        method: 'get',
        url: base + '/me/playlists',
        params: default_params,
        headers: {
            authorization: 'Bearer ' + code
        }
    })
        .then((res) => {
            console.log('Playlists fetched successfully');
            return res.data;
        })
        .catch((err) => {
            console.log('Playlist fetch error: ' + err);
            return {
                error: err
            };
        });

    return result;
}

export async function getMyProfile(code) {
    let result = await axios({
        method: 'get',
        url: base + '/me',
        params: default_params,
        headers: {
            authorization: 'Bearer ' + code
        }
    })
        .then((res) => {
            console.log('Profile fetched successfully');
            return res.data;
        })
        .catch((err) => {
            console.log('Profile fetch error ' + err);
            return {
                error: err
            };
        });

    return result;
}

export async function getFeaturesFromTrackList(code, ids) {
    let result = await axios({
        method: 'get',
        url: base + '/audio-features',
        params: {
            ids: ids
        },
        headers: {
            authorization: 'Bearer ' + code
        }
    })
        .then((res) => res.data)
        .catch((error) => {
            console.log('Features fetch error ' + error);
            return error.response;
        });

    return result;
}

export async function getFeaturesFromArtistID(code, id) {
    //Fetch artist top tracks, then pass those along to above function to get the features
    let result = await axios({
        method: 'get',
        url: base + `v1/artists/${id}/top-tracks`,
        headers: {
            authorization: 'Bearer ' + code
        }
    })
        .then((res) => res.data.tracks.map((track) => track.id))
        .then(async (res) => {
            return await getFeaturesFromTrackList(res, code);
        })
        .catch((err) => {
            console.log('Artist Top tracks fetch error ' + err);
            return {
                error: err
            };
        });

    return result;
}

export async function getGenresFromArtistIds(code, ids) {
    return await axios({
        method: 'get',
        url: base + `/artists`,
        params: {
            ids: ids
        },
        headers: {
            authorization: 'Bearer ' + code
        }
    }).then((res) => {
        return parseGenresFromArtists(res.data.artists);
    });
}
