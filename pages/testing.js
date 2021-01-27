import React from 'react';

import { Grid, Typography, Container, Box } from '@material-ui/core';
import data from '../testing/test_data';
import GenrePieChart from '../components/general/charting/GenrePieChart';
import FeatureRadar from '../components/general/charting/FeatureRadar';
import PitchChart from '../components/general/charting/PitchChart';
import ModeSlider from '../components/general/charting/ModeSlider';
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
const classes = {
    cell: {
        height: '50vh',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }
};

const Testing = (props) => {
    console.log(data);
    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Grid container spacing={3}>
                    <Grid item xs={4} style={classes.cell}>
                        <Typography variant="overline" align="center">
                            Genres Distribution
                        </Typography>
                        <GenrePieChart data={data.genres} />
                    </Grid>
                    <Grid item xs={4} style={classes.cell}>
                        <Typography variant="overline" align="center">
                            Genres List
                        </Typography>
                        {/* <GenreList/> */}
                    </Grid>
                    <Grid item xs={4} style={classes.cell}>
                        <Typography variant="overline" align="center">
                            Feature Distribution
                        </Typography>
                        <FeatureRadar data={data.features} />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid container>
                    <Grid item xs={4} style={classes.cell}>
                        <Typography variant="overline" align="center">
                            Average Pitch
                        </Typography>
                        <PitchChart data={data.features.key} />
                    </Grid>
                    <Grid item xs={4} style={classes.cell}>
                        <Typography variant="overline" align="center">
                            Mode
                        </Typography>
                        <ModeSlider data={0.3} />
                    </Grid>
                    <Grid item xs={4} style={classes.cell}>
                        <Typography variant="overline" align="center">
                            Loudness
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Testing;
