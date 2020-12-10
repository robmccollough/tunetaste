import React from 'react';
import { Grid } from '@material-ui/core';
import Link from 'next/link';

const Navigator = (props) => {
    const { access_code } = props;

    return (
        <Grid alignItems="center" justifyContent="space-evenly">
            <Link href={`/playlists?access_code=${access_code}`}>
                <a>My Playlists</a>
            </Link>
            <Link href={`/artists?access_code=${access_code}`}>
                <a>My Top Artists</a>
            </Link>
            <Link href={`/tracks?access_code=${access_code}`}>
                <a>My Top Tracks</a>
            </Link>
        </Grid>
    );
};

export default Navigator;
