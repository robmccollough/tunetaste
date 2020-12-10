import React, { useState, useEffect } from 'react';
import ReactCountryFlag from 'react-country-flag';
import { Box, Typography, Avatar } from '@material-ui/core';
import { getMyProfile } from '../../lib/data';

const ProfileView = (props) => {
    const { access_code } = props;

    let [profile, setProfile] = useState({
        image: null,
        name: null,
        country: null
    });

    useEffect(() => {
        let fecther = async () => {
            let result = await getMyProfile(access_code).then((r) => {
                console.log('Recieved Profile Data: ', r);
                return r;
            });
            if (result.error) {
                setProfile({
                    ...profile,
                    error: result.error
                });
            } else {
                setProfile({
                    image: result.images[0],
                    name: result.display_name,
                    country: result.country,
                    error: null
                });
            }
        };
        fecther();
    }, []);

    return profile.error ? (
        <Box maxWidth="200px" height="75%">
            <Typography>Profile Unavailable : {profile.error.toString()}</Typography>
        </Box>
    ) : (
        <Box
            display="flex"
            maxWidth="200px"
            h="75%"
            flexDirection="row"
            alignItems="center"
            justifyContent="space-evenly">
            <Typography>{profile.name}</Typography>
            <Avatar variant="circle" src={profile.image && profile.image.url} />
            <ReactCountryFlag countryCode={profile.country} />
        </Box>
    );
};

export default ProfileView;
