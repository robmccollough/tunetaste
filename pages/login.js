import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import qs from 'qs';
import { setStateCode } from '../lib/auth';

const Login = () => {
    const [url, setURL] = useState('');

    useEffect(() => {
        const fetchURL = async () => {
            let code = setStateCode(window.localStorage);
            let url = await fetch('/api/auth', {
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

            <main>
                <a href={url}>Authorize</a>
            </main>
        </div>
    );
};

export default Login;
