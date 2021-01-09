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
                genre_data.total_genre_counts[genre.toString()] += 1;
            } else {
                genre_data.total_genre_counts[genre.toString()] = 1;
            }
        });
    });

    return genre_data;
}

export function convertGenresToPieChartSchema(genre_counts, max_count) {
    let datums = [];
    Object.keys(genre_counts).forEach((genre) => {
        datums.push({
            id: genre,
            label: capitalize(genre),
            value: genre_counts[genre]
        });
    });
    //show only the first 6, shove the rest into 'other'

    datums.sort((a, b) => b.value - a.value);
    let other = {
        id: 'other',
        label: 'Other',
        value: datums
            .slice(max_count, datums.length)
            .map((a) => a.value)
            .reduce((acc, curr) => acc + curr)
    };

    let curated_datums = datums.slice(0, max_count);

    curated_datums.push(other);

    return curated_datums;
}

const charted_metrics = [
    'danceability',
    'energy',
    'speechiness',
    'acousticness',
    'instrumentalness',
    'liveness'
];
export function convertFeaturesToRadarSchema(features) {
    let datums = [];

    Object.keys(features).forEach((feature) => {
        if (charted_metrics.includes(feature)) {
            datums.push({
                feature: capitalize(feature),
                value: Math.floor(features[feature] * 100)
            });
        }
    });
    return datums;
}

function capitalize(s) {
    return s
        .split(' ')
        .map((e) => e.charAt(0).toUpperCase() + e.slice(1))
        .join(' ');
}
const pitchMap = ['C', 'C♯', 'D', 'D♯', 'E', 'F', 'F♯', 'G', 'G♯', 'A', 'A♯', 'B'];
export function mapNumberToPitch(key) {
    return key < 0
        ? pitchMap[0]
        : key < pitchMap.length
        ? pitchMap[Math.round(key)]
        : pitchMap[pitchMap.length];
}
