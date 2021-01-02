import React from 'react';
import DataDisplay from './DataDisplay';
// import VerticalGridList from './VerticalGridList';
import { Grid } from '@material-ui/core';
import styles from './DataSelectionLayout.module.scss';

const DataSelectionLayout = ({ item_data, feature_data, label }) => {
    console.log('Feature Data: ', feature_data);

    return (
        <Grid container spacing={3}>
            <Grid item xs={12} md={6} className={styles.scrollableColumn}>
                {item_data}
            </Grid>
            <Grid item xs={12} md={6}>
                <DataDisplay label={label || 'Your data'} data={feature_data} />
            </Grid>
        </Grid>
    );
};

export default DataSelectionLayout;
