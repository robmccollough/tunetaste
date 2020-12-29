import React from 'react';
import { Grid } from '@material-ui/core';
import styles from './VerticalListDisplay.module.scss';

const VerticalGridList = ({ children }) => {
    return (
        <Grid container className={styles.container} spacing={2}>
            {children}
        </Grid>
    );
};

export default VerticalGridList;
