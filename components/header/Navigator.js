import React from 'react';
import { Container, Box, Button } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Link from 'next/link';
import styles from './Navigator.module.scss';

const Navigator = (props) => {
    const { access_code, heroMode } = props;

    return (
        <Box className={heroMode ? styles.hero : styles.nav}>
            <Link href={access_code ? `/tracks?access_code=${access_code}` : '/oops'}>
                <Button className={styles.darker}>
                    Top Tracks
                    <ArrowForwardIcon />
                </Button>
            </Link>
            <Link href={access_code ? `/artists?access_code=${access_code}` : '/oops'}>
                <Button className={styles.lighter}>
                    Top Artists
                    <ArrowForwardIcon />
                </Button>
            </Link>
            <Link href={access_code ? `/playlists?access_code=${access_code}` : '/oops'}>
                <Button className={styles.lightest}>
                    Playlists
                    <ArrowForwardIcon />
                </Button>
            </Link>
        </Box>
    );
};

export default Navigator;
