export function averageTrackFeatures(track_features) {
    let avg_features = track_features.reduce(
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

    return avg_features;
}

//returns object in form
export function parseGenresFromArtists(artists) {
    let genre_data = {
        artist_id_to_genres: {},
        total_genre_counts: {}
    };

    artists.forEach((artist) => {
        //Associate artist id with genre list
        genre_data.artist_id_to_genres[artist.id] = artist.genres;
        artist.genres.forEach((genre) => {
            //add to total counts
            if (genre in genre_data.total_genre_counts) {
                genre_data.total_genre_counts[genre] += 1;
            } else {
                genre_data.total_genre_counts[genre] = 1;
            }
        });
    });

    return genre_data;
}
