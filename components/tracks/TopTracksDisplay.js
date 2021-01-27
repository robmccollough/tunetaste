import React, { useEffect, useState, useRef } from 'react';
import { Grid, Typography, Button, CircularProgress } from '@material-ui/core';
import Track from './Track';
import styles from './TopTracksDisplay.module.scss';
import TrackFeaturesDisplay from '../general/TrackFeaturesDisplay';
import { trackDataPropBuilder } from '../../lib/fetching/tracks';
import TrackParamBar from './TrackParamBar';

function useDidUpdateEffect(fn, inputs) {
    const didMountRef = useRef(false);

    useEffect(() => {
        if (didMountRef.current) {
            fn();
        } else {
            didMountRef.current = true;
        }
    }, inputs);
}

const TopTracksDisplay = (props) => {
    const [params, setParams] = useState('medium_term');
    const [data, setData] = useState(props.data);
    const [loading, setLoading] = useState(false);

    const { tracks, features } = data;

    const [singleTrackFeatures, setSingleTrackFeatures] = useState(tracks.items[0]);
    const [showAggregate, setShowAggregate] = useState(true);

    useDidUpdateEffect(() => {
        async function fetchNewTracks() {
            setLoading(true);
            const newData = await trackDataPropBuilder(props.access_code, {
                time_range: params,
                limit: 20,
                offset: 0
            });
            setData(newData);
            setLoading(false);
        }
        fetchNewTracks();
    }, [params]);

    return (
        <Grid container>
            <Grid item xs={12}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={5}>
                        <Grid container className={styles.paramBar}>
                            <TrackParamBar
                                value={params}
                                handleChange={(e) => setParams(e.target.value)}
                            />
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={7}>
                        <Typography variant="overline">{'Your Data'}</Typography>
                        <Button onClick={() => setShowAggregate(true)} className={styles.button}>
                            Show Averaged Data
                        </Button>
                    </Grid>
                </Grid>
                <Grid container spacing={3} className={styles.container}>
                    <Grid item xs={12} md={5} className={styles.scrollableColumn}>
                        {loading ? (
                            <div className={styles.loader}>
                                <CircularProgress size={40} />
                            </div>
                        ) : (
                            tracks.items.map((elt, index) => {
                                return (
                                    <Track
                                        data={elt}
                                        key={index}
                                        listNumber={index}
                                        select={() => {
                                            setShowAggregate(false);
                                            setSingleTrackFeatures(
                                                features.individual_features.find(
                                                    (f) => f.id == elt.id
                                                )
                                            );
                                        }}
                                    />
                                );
                            })
                        )}
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={7}
                        className={`${styles.scrollableColumn} ${styles.whitetext}`}>
                        <TrackFeaturesDisplay
                            single={!showAggregate}
                            feature_data={
                                showAggregate ? features.aggregate_features : singleTrackFeatures
                            }
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default TopTracksDisplay;
