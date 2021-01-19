import React, { useState, useEffect } from 'react';
import ReactCountryFlag from 'react-country-flag';
import { Box, Typography, Avatar } from '@material-ui/core';
import { getMyProfile } from '../../lib/fetching';
import styles from './ProfileView.module.scss';

const ProfileView = (props) => {
    const { access_code } = props;

    let [profile, setProfile] = useState({
        image: null,
        name: null,
        country: null,
        signedIn: false
    });

    useEffect(() => {
        if (access_code) {
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
                        name: result.display_name.split(' ')[0],
                        country: result.country,
                        error: null,
                        signedIn: true
                    });
                }
            };
            fecther();
        }
    }, [access_code]);

    return !profile.signedIn || profile.error ? (
        <Box
            maxWidth="200px"
            height="75%"
            display="flex"
            alignItems="center"
            justifyContent="center"
            className={styles.container}>
            <Typography
                className={`${styles.text} ${styles.hide}`}
                align="center"
                noWrap={true}
                variant="overline">
                Not signed in
            </Typography>
            <Avatar variant="circular" className={styles.small} />
        </Box>
    ) : (
        <Box className={styles.container}>
            {profile.name && (
                <Typography
                    className={`${styles.text} ${styles.hide}`}
                    align="center"
                    noWrap={true}
                    variant="overline">
                    {profile.name}
                </Typography>
            )}
            {profile.image && (
                <Avatar variant="circular" className={styles.small} src={profile.image.url} />
            )}
            {profile.country && (
                <ReactCountryFlag
                    style={{
                        fontSize: '1.3em'
                    }}
                    countryCode={profile.country}
                />
            )}
        </Box>
    );
};

export default ProfileView;
