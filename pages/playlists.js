import React, { useState, useEffect } from 'react';
import { Container } from '@material-ui/core';
import TopLayout from '../components/top';
import { getAllPlaylists } from '../lib/data';

const PlaylistsPage = (props) => {
    const { access_code, authenticated } = props;

    return !authenticated ? (
        <span>Taking you to log in...</span>
    ) : (
        <Container>
            <TopLayout access_code={access_code} />
            My Playlists
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

    let result = await getAllPlaylists(context.query.access_code).then((r) => {
        console.log('Recieved Playlist Data: ', r);
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

export default PlaylistsPage;
