import React from 'react';
import { Container, Typography } from '@material-ui/core';
import Header from '../components/header/Header';
import { trackDataPropBuilder } from '../lib/fetching/tracks';
import TopTracksDisplay from '../components/tracks/TopTracksDisplay';
import Oops from '../components/auth/Oops';
const TracksPage = (props) => {
    const { access_code, authenticated, data, error } = props;

    if (!authenticated) {
        return (
            <Container maxWidth={false} disableGutters>
                <Header access_code={null} hideNav={true} />
                <Oops message={'Your access code was missing or expired.'} />
            </Container>
        );
    }

    if (error) {
        return <div>{error.toString()}</div>;
    }

    return (
        <Container maxWidth="xl" disableGutters>
            <Header access_code={access_code} showNav={true} />
            <TopTracksDisplay data={data} access_code={access_code} />
        </Container>
    );
};

export async function getServerSideProps(context) {
    if (!context.query.access_code) {
        return {
            props: {
                authenticated: false
            }
        };
    }

    let data = await trackDataPropBuilder(context.query.access_code).catch((error) => {
        if (error.response) {
            console.log(error.response);
            return error.response;
        }
    });

    return {
        props: {
            authenticated: true,
            access_code: context.query.access_code,
            data: {
                ...data
            }
        }
    };
}

export default TracksPage;
