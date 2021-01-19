import React, { useState, useEffect } from 'react';
import { Container } from '@material-ui/core';
import qs from 'qs';
// import Router from 'next/Router';
import Header from '../components/header/Header';
import Head from 'next/head';
import Hero from '../components/hero/Hero';
import { getStateCode } from '../lib/auth';

//Functional Component

const Home = () => {
    //States
    const [auth, setAuth] = useState({
        access_token: null,
        stateMatch: null
    });

    //onMount, check for access token and redirect to login if none
    useEffect(() => {
        const qp = qs.parse(window.location.hash);
        const storedStateCode = getStateCode(window.localStorage);

        let access_token = qp['#access_token'];

        if (access_token) {
            setAuth({
                access_token: access_token,
                stateMatch: qp.state == storedStateCode
            });
            // Router.replace('/');
        }
    }, []);

    //return loader if no access code present
    return (
        <Container maxWidth={'xl'} disableGutters>
            <Head>
                <title>Tunetaste</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {auth.access_token ? (
                <div>
                    <Header access_code={auth.access_token} hideNav={true} />
                    <Hero access_code={auth.access_token} />
                </div>
            ) : (
                <div>
                    <Header access_code={null} hideNav={true} />
                    <Hero access_code={null} />
                </div>
            )}
        </Container>
    );
};

export default Home;
