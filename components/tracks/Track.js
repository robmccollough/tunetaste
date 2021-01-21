import React from 'react';
import { Grid, Box, Typography, Link, Button } from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Image from 'next/image';
import styles from './Track.module.scss';
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
        <Grid container className={styles.container}>
            <Grid item xs={1}>
                <Typography className={styles.listnum} variant="body2" color="textPrimary">
                    {listNumber + 1}
                </Typography>
            </Grid>

            <Grid item xs={2} className={styles.cover}>
                <Image
                    src={album && album.images[1].url}
                    width={album && album.images[1].width}
                    height={album && album.images[1].height}
                />
            </Grid>

            <Grid item xs={3} className={styles.name}>
                <Link
                    href={external_urls.spotify}
                    variant="body1"
                    color="textPrimary"
                    target="_blank"
                    rel="noopener">
                    {name}
                </Link>
            </Grid>

            <Grid item xs={2}>
                <Box className={styles.artists}>
                    {artists.map((elt, index) => (
                        <Link
                            key={index}
                            variant="body2"
                            noWrap={true}
                            href={elt.external_urls.spotify}
                            target="_blank"
                            rel="noopener">
                            {elt.name}
                        </Link>
                    ))}
                </Box>
            </Grid>
            <Grid item xs={1} className={styles.spacer}></Grid>
            <Grid item xs={2} className={styles.links}>
                <PreviewPlayer url={preview_url} />
            </Grid>

            <Grid item xs={1} className={styles.button}>
                <Button onClick={() => select(features)}>
                    <ChevronRightIcon />
                </Button>
            </Grid>
        </Grid>
    );
};

export default Track;
