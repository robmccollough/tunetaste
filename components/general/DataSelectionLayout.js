import React from 'react';
import DataDisplay from './DataDisplay';
import VerticalGridList from './VerticalGridList';
import { Grid } from '@material-ui/core';

const DataSelectionLayout = ({ item_data, feature_data, label }) => {
    console.log('Feature Data: ', feature_data);
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Grid container spacing={4}>
                    <Grid item xs={6}>
                        <VerticalGridList>{item_data}</VerticalGridList>
                    </Grid>
                    <Grid item xs={6}>
                        <DataDisplay label={label || 'Your data'} data={feature_data} />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default DataSelectionLayout;
