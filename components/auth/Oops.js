import React from 'react';
import Link from 'next/link';
import { Box, Typography, Button, Container } from '@material-ui/core';
import styles from './Oops.module.scss';

const Oops = ({ message }) => {
    return (
        <Container maxWidth="md">
            <Box className={styles.container}>
                <Typography variant="h2" align="center" gutterBottom>
                    Oops!
                </Typography>
                <Typography variant="h5" align="center" gutterBottom>
                    It looks like something went wrong:
                </Typography>
                <Typography variant="subtitle2">
                    {message ? message : 'Your access code may be expired'}
                </Typography>
                <Typography variant="subtitle1" align="center" gutterBottom>
                    Please try logging in again.
                </Typography>
                <Link passHref href="/login">
                    <Button className={styles.button}>Go To Login</Button>
                </Link>
            </Box>
        </Container>
    );
};

export default Oops;
