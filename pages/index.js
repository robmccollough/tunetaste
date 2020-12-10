import React, { useState, useEffect } from 'react';
import qs from 'qs';
import Router from 'next/Router';
import TopLayout from '../components/top/';
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
        } else {
            Router.push('/login');
            return;
        }
    }, []);

    //return loader if no access code present
    return !auth.access_token ? (
        <span>Taking you to log in...</span>
    ) : (
        <TopLayout access_code={auth.access_token} />
    );
};

export default Home;
