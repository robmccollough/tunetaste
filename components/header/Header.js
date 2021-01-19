import React from 'react';
import { Box, Container, Typography } from '@material-ui/core';
import Link from 'next/link';
import ProfileView from './ProfileView';
import Navigator from './Navigator';
import styles from './Header.module.scss';

const Header = (props) => {
    const { access_code, hideNav } = props;

    return (
        <Box className={`${styles.container} ${hideNav ? styles.heroMode : ''}`}>
            <Box className={styles.outer}>
                <Container className={styles.inner} maxWidth="xl">
                    <Typography align="center" variant="overline" className={styles.logo}>
                        <Link href={access_code ? `/#access_token=${access_code}` : '/'}>
                            Tunetaste
                        </Link>
                    </Typography>

                    {/* Handles null access code internally */}
                    <ProfileView access_code={access_code} />
                </Container>
            </Box>

            {!hideNav && <Navigator access_code={access_code} heroMode={hideNav} />}
        </Box>
    );
};

export default Header;
