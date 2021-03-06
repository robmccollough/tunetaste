import React from 'react';
import Header from '../components/header/Header';
import { Container } from '@material-ui/core';
import { getTopArtists } from '../lib/fetching';
import Oops from '../components/auth/Oops';

const ArtistsPage = (props) => {
    const { access_code, authenticated, data } = props;

    console.log(data);

    if (!authenticated) {
        return (
            <Container maxWidth={false} disableGutters>
                <Header access_code={null} />
                <Oops message={'Your access code was missing or expired.'} />
            </Container>
        );
    }
    return (
        <Container maxWidth={false} disableGutters>
            <Header access_code={access_code} />
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

    let result = await getTopArtists(context.query.access_code).then((r) => {
        console.log('Recieved Artist Data: ', r);
        return r;
    });

    return {
        props: {
            authenticated: true,
            access_code: context.query.access_code,
            data: result
        }
    };
}

export default ArtistsPage;
