import React, { useState } from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import Track from './Track';
import styles from './TopTracksDisplay.module.scss';
import TrackFeaturesDisplay from '../general/TrackFeaturesDisplay';

const TopTracksDisplay = ({ track_data, track_features }) => {
    console.log(track_data, track_features);
    const [singleTrackFeatures, setSingleTrackFeatures] = useState(track_data[0]);
    const [showAggregate, setShowAggregate] = useState(true);

    function switchToSingleData(track_id) {
        setShowAggregate(false);
        setSingleTrackFeatures(
            track_features.individual_features.find((features) => features.id == track_id)
        );
    }

    return (
        <Grid container spacing={3}>
            <Grid item xs={12} md={4} className={styles.scrollableColumn}>
                {track_data.items.map((elt, index) => {
                    return (
                        <Track
                            data={elt}
                            key={index}
                            listNumber={index}
                            select={() => switchToSingleData(elt.id)}
                        />
                    );
                })}
            </Grid>
            <Grid item xs={12} md={8} className={`${styles.scrollableColumn} ${styles.whitetext}`}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant="overline">{'Your Data'}</Typography>
                        <Button onClick={() => setShowAggregate(true)} className={styles.button}>
                            Show Averaged Data
                        </Button>
                    </Grid>
                    <Grid item xs={12}>
                        <TrackFeaturesDisplay
                            single={!showAggregate}
                            feature_data={
                                showAggregate
                                    ? track_features.aggregate_features
                                    : singleTrackFeatures
                            }
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default TopTracksDisplay;
