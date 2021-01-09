import React from 'react';
import { Grid, Box, Typography } from '@material-ui/core';
import GenrePieChart from '../../components/';
import styles from './TrackFeaturesDisplay.module.scss';

// Features to display (for aggregate):
// -Genre Pie Chart (Top 7 genres, the rest under other)
// -Full scrollable list of genres, as well as single number display of total number
// -Radial chart showing distribution of [danceability, valence, energy, speechiness, acousticness, instrumentalness, liveness]
// -Single value display for key
// -Sliding scale display for Mode (minor --------|---- major)
// -'Volume' display for loudness
// -tooltip with descriptions of what these actually mean
// -small single value graphics for average duration
// -small graphic for tempo

// For a single track:
// -Replace the Genre pie chart with bigger

const TrackFeaturesDisplay = ({ single, feature_data }) => {
    console.log('TFD', feature_data);
    return (
        <Box flexDirection="column">
            <Typography variant="overline" gutterBottom>
                Mode : {single ? 'Single' : 'Aggregate'}
            </Typography>
            {Object.keys(feature_data).map((feature, index) => {
                if (feature == 'genre_counts') {
                    return (
                        <Typography key={index} variant="body2" gutterBottom>
                            {feature} : {JSON.stringify(feature_data[feature])}
                        </Typography>
                    );
                }
                return (
                    <Typography key={index} variant="subtitle2" gutterBottom>
                        {feature} : {feature_data[feature]}
                    </Typography>
                );
            })}
        </Box>
    );
};

export default TrackFeaturesDisplay;
