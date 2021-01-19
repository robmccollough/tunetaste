import React from 'react';
import Head from 'next/head';
import { Container } from '@material-ui/core';
import Header from '../components/header/Header';
import Oops from '../components/auth/Oops';

const OopsPage = (props) => {
    return (
        <Container maxWidth="xl" disableGutters>
            <Head>
                <title>Uh oh!</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header access_code={null} hideNav={true} />
            <Oops />
        </Container>
    );
};

export default OopsPage;
