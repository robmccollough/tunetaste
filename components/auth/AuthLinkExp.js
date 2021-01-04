import React from 'react';
import { Box, Typography, Button, Link } from '@material-ui/core';
import styles from './AuthLinkExp.module.scss';

const AuthLinkExp = ({ url }) => {
    return (
        <Box className={styles.container} maxWidth="md">
            <Typography variant="h2" align="center" gutterBottom>
                In order to work, Tunetaste needs access to your Spotify data.
            </Typography>
            <Typography variant="h5" align="center" gutterBottom>
                Clicking the button below will take you to the Spotify accounts service, where you
                can review and authorize access. Afterwards, you will redirected back to Tunetaste.
            </Typography>

            <Button href={url} className={styles.button}>
                Authorize
            </Button>
            <Typography variant="subtitle1" align="center" gutterBottom>
                You can learn more about the type of authorization used on the{' '}
                <Link
                    href={
                        'https://developer.spotify.com/documentation/general/guides/authorization-guide/#implicit-grant-flow'
                    }>
                    Spotify Web API Reference Guide
                </Link>
            </Typography>
            <Typography variant="h6" align="center">
                {' '}
                Disclaimers:{' '}
            </Typography>
            <ul>
                <li>
                    <Typography variant="subtitle1" align="left" gutterBottom>
                        This access is temporary (1 hour). If using the site for more than 1 hour,
                        or returning at a later date, you will be returned to this page in order to
                        refresh the access code.
                    </Typography>
                </li>
                <li>
                    <Typography align="left" gutterBottom>
                        This website is a personal project of{' '}
                        <Link href={'https://robmccollouhgh.dev'}>Rob McCollough</Link> (thats me!).
                        None of your Spotify data is stored anywhere, because honestly it&apos;s a
                        lot of work and I&apos;m only one guy. You can check out the full source
                        code on{' '}
                        <Link href={'https://github.com/robmccollough/tunetaste'}>GitHub</Link>
                    </Typography>
                </li>
            </ul>
        </Box>
    );
};

export default AuthLinkExp;
