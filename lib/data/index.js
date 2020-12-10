import axios from 'axios';

const base = 'https://api.spotify.com/v1';
const default_params = {
    limit: 20,
    offset: 0,
    time_range: 'medium_term'
};
//All of these functions take an access code and return that piece of data

//Always fails
export async function getTopTracks(code) {
    let result = await axios({
        method: 'get',
        url: base + '/me/top/tracks',
        params: default_params,
        headers: {
            authorization: 'Bearer ' + code
        }
    })
        .then((res) => {
            console.log('Tracks fetched successfully');
            return res.data;
        })
        .catch((err) => {
            console.log('Tracks fetch error: ' + err);
            return {
                error: err
            };
        });

    return result;
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

//Always succeeds
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
