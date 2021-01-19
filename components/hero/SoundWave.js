import React from 'react';
import { Box } from '@material-ui/core';
import styles from './SoundWave.module.scss';

const SoundWave = (props) => {
    const bars = new Array(parseInt(styles.numBars))
        .fill(0)
        .map((elt, index) => <div key={index} className={styles.bar} />);

    return (
        <Box borderBottom="4px solid white" className={styles.container}>
            {bars}
        </Box>
    );
};

export default SoundWave;
