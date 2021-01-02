import React from 'react';
import { Container } from '@material-ui/core';
import Header from '../components/header/Header';
import { getAllPlaylists } from '../lib/fetching';

const PlaylistsPage = (props) => {
    const { access_code, authenticated, data } = props;

    console.log(data);

    if (!authenticated) {
        return <div>Oops! You goofed. Try logging in again</div>;
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
