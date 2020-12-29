import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import styles from './DataDisplay.module.scss';

const DataDisplay = ({ label, data }) => {
    console.log('Todisaply:', data);
    let rows = Object.keys(data).map((elt, index) => {
        return <div key={index}>{`${elt} : ${data[elt]}`}</div>;
    });

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography variant="overline">{label || 'Your Data'}</Typography>
            </Grid>
            <Grid item xs={12} className={styles.container}>
                {rows}
            </Grid>
        </Grid>
    );
};

export default DataDisplay;
