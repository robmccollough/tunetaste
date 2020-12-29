import React from 'react';
import { Grid, Box, Typography, Avatar, Link, SvgIcon, Button } from '@material-ui/core';
import styles from './Track.module.scss';
import Logo from '../../public/spotify.svg';
import PreviewPlayer from './PreviewPlayer';

const Track = (props) => {
    /*
    Props object has data : {
    list - index of parent array
    img - album cover art link
    artists - array of artist objects
    name - title of track
    }
    */

    const { listNumber, data, select, features } = props;
    const { id, name, album, artists, external_urls, preview_url } = data;

    return (
        <Grid item xs={12}>
            <Grid container>
                <Grid item xs={2}>
                    <Typography className={styles.listnum} variant="body2" color="textSecondary">
                        {listNumber}
                    </Typography>
                </Grid>

                <Grid item xs={2}>
                    <Avatar
                        src={album && album.images[0].url}
                        variant="square"
                        className={styles.cover}
                    />
                </Grid>

                <Grid item xs={3}>
                    <Typography className={styles.name} variant="body1" color="textPrimary">
                        {name}
                    </Typography>
                </Grid>

                <Grid item xs={2}>
                    <Box className={styles.artists}>
                        {artists.map((elt, index) => (
                            <Typography key={index} variant="body2" noWrap={true}>
                                {elt.name}
                            </Typography>
                        ))}
                    </Box>
                </Grid>

                <Grid item xs={2}>
                    <Box className={styles.links}>
                        <PreviewPlayer url={preview_url} />
                        <Link href={external_urls.spotify} target="_blank" rel="noopener">
                            <SvgIcon component={Logo} className={styles.logo} />
                        </Link>
                    </Box>
                </Grid>
                <Grid item xs={1}>
                    <Button onClick={() => select(features)}>Show Data</Button>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Track;
