import React from 'react';
import { Box } from '@material-ui/core';
import ProfileView from './profile';
import Navigator from './navigator';

const TopLayout = (props) => {
    const { access_code } = props;

    return (
        <Box
            display="flex"
            width="100%"
            height="175px"
            flexDirection="column"
            alignItems="center"
            justifyContent="space-evenly">
            <Box
                display="flex"
                width="100%"
                height="100px"
                flexDirection="row"
                alignItems="center"
                justifyContent="space-between">
                <Box width="20%">Tunetaste</Box>

                <ProfileView access_code={access_code} />
            </Box>
            <Navigator access_code={access_code} />
        </Box>
    );
};

export default TopLayout;
