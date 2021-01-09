import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { Container } from '@material-ui/core';
import Header from '../components/header/Header';
import { setStateCode } from '../lib/auth';
import AuthLinkExp from '../components/auth/AuthLinkExp';

const Login = () => {
    const [url, setURL] = useState('');

    useEffect(() => {
        const fetchURL = async () => {
            let code = setStateCode(window.localStorage);
            await fetch('/api/auth', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ stateCode: code })
            })
                .then((r) => r.json())
                .then((r) => setURL(r.url));
        };

        fetchURL();
    }, []);

    return (
        <div className="container">
            <Head>
                <title>Tunetaste</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Container maxWidth={false} disableGutters>
                <Header access_code={null} />
                <Container maxWidth="md">
                    <AuthLinkExp url={url}></AuthLinkExp>
                </Container>
            </Container>
        </div>
    );
};

export default Login;
