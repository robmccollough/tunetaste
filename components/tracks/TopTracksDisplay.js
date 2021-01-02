import React, { useState } from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import Track from './Track';
import styles from './TopTracksDisplay.module.scss';

const TopTracksDisplay = ({ track_data, track_features }) => {
    console.log(track_data, track_features);
    const [showingData, setShowingData] = useState(track_features.aggregate_features);

    return (
        <Grid container spacing={3}>
            <Grid item xs={12} md={6} className={styles.scrollableColumn}>
                {track_data.items.map((elt, index) => {
                    return (
                        <Track
                            data={elt}
                            key={index}
                            listNumber={index}
                            features={track_features.individual_features.find(
                                (feature) => feature.id == elt.id
                            )}
                            select={setShowingData}
                        />
                    );
                })}
            </Grid>
            <Grid item xs={12} md={6}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant="overline">{'Your Data'}</Typography>
                    </Grid>
                    <Grid item xs={12} className={styles.container}>
                        {Object.keys(showingData).map((elt, index) => {
                            return <div key={index}>{`${elt} : ${showingData[elt]}`}</div>;
                        })}
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default TopTracksDisplay;
