import React from 'react';
import { Grid, Box, Typography } from '@material-ui/core';
import styles from './TrackFeaturesDisplay.module.scss';
import FeatureRadar from './charting/FeatureRadar';
import GenrePieChart from './charting/GenrePieChart';
import PitchChart from './charting/PitchChart';
import ModeSlider from './charting/ModeSlider';

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
    console.log(feature_data);
    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Grid container spacing={3}>
                    <Grid item xs={4} className={styles.cell}>
                        <Typography variant="overline" align="center">
                            Genres Distribution
                        </Typography>
                        <GenrePieChart data={feature_data.genre_counts} />
                    </Grid>
                    <Grid item xs={4} className={styles.cell}>
                        <Typography variant="overline" align="center">
                            Genres List
                        </Typography>
                        {/* <GenreList/> */}
                    </Grid>
                    <Grid item xs={4} className={styles.cell}>
                        <Typography variant="overline" align="center">
                            Feature Distribution
                        </Typography>
                        <FeatureRadar data={feature_data} />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid container>
                    <Grid item xs={4} className={styles.cell}>
                        <Typography variant="overline" align="center">
                            Average Pitch
                        </Typography>
                        <PitchChart data={feature_data.key} />
                    </Grid>
                    <Grid item xs={4} className={styles.cell}>
                        <Typography variant="overline" align="center">
                            Mode
                        </Typography>
                        <ModeSlider data={feature_data.mode} />
                    </Grid>
                    <Grid item xs={4} className={styles.cell}>
                        <Typography variant="overline" align="center">
                            Loudness
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default TrackFeaturesDisplay;
