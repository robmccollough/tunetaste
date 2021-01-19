import React from 'react';
import { Container } from '@material-ui/core';
import Header from '../components/header/Header';
import Head from 'next/head';
import Hero from '../components/hero/Hero';

const Welcome = (props) => {
    return (
        <Container maxWidth={'xl'} disableGutters>
            <Head>
                <title>Tunetaste</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header access_code={null} />
            <Hero />
        </Container>
    );
};

export default Welcome;
