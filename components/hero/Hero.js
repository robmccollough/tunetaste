import React from 'react';
import { Box, Typography, Button } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Link from 'next/link';
import Navigator from '../header/Navigator';
import SoundWave from './SoundWave';
import styles from './Hero.module.scss';
const Hero = (props) => {
    const { access_code } = props;

    return (
        <Box className={styles.container}>
            <Box className={styles.centered}>
                <Typography variant="h2" align="center">
                    Discover your sound.
                </Typography>
                <Box className={styles.buttons}>
                    {access_code ? (
                        <Navigator access_code={access_code} />
                    ) : (
                        <Link href="/login">
                            <Button className={styles.darker}>
                                Try it out
                                <ArrowForwardIcon />
                            </Button>
                        </Link>
                    )}

                    {/* <Button className={styles.lighter}>
                        Examples
                        <ArrowForwardIcon />
                    </Button> */}
                </Box>
            </Box>
            <SoundWave />
        </Box>
    );
};

export default Hero;
