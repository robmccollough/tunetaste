import React, { useState, useEffect } from 'react';
import { Container, Typography } from '@material-ui/core';
import TopLayout from '../components/top';
import { getTopArtists } from '../lib/data';

const ArtistsPage = (props) => {
    const { access_code, authenticated } = props;

    return !authenticated ? (
        <span>Taking you to log in...</span>
    ) : (
        <Container>
            <TopLayout access_code={access_code} />
            My top artists
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
