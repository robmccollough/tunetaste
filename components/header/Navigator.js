import React from 'react';
import { Container, Box } from '@material-ui/core';
import Link from 'next/link';
import styles from './Navigator.module.scss';

const Navigator = (props) => {
    const { access_code } = props;

    return (
        <Container maxWidth="lg">
            <Box className={styles.container}>
                <Link href={`/playlists?access_code=${access_code}`}>
                    <a className={styles.link}>Playlists</a>
                </Link>
                <Link href={`/artists?access_code=${access_code}`}>
                    <a className={styles.link}>Top Artists</a>
                </Link>
                <Link href={`/tracks?access_code=${access_code}`}>
                    <a className={styles.link}>Top Tracks</a>
                </Link>
            </Box>
        </Container>
    );
};

export default Navigator;
