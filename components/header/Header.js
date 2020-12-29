import React from 'react';
import { Box, Container, Typography } from '@material-ui/core';
import ProfileView from './ProfileView';
import Navigator from './Navigator';
import styles from './Header.module.scss';

const Header = (props) => {
    const { access_code } = props;

    return (
        <Box className={styles.container}>
            <Box className={styles.outer}>
                <Container className={styles.inner} maxWidth="lg">
                    <Typography align="center" variant="overline" className={styles.logo}>
                        Tunetaste
                    </Typography>

                    <ProfileView access_code={access_code} />
                </Container>
            </Box>

            <Navigator access_code={access_code} />
        </Box>
    );
};

export default Header;
