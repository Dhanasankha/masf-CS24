import React from 'react';
import { AppBar, Toolbar, Stack, Typography } from '@mui/material';

const AppbarView = () => {
    return (
        <AppBar 
        sx={{
            bgcolor: "red",
            borderRadius: 6
        }}
        >
            <Toolbar>
            <Stack direction={"row"} flexGrow={1}>
                <Typography>LOGO-NAME</Typography>
            </Stack>
            <Stack direction={"row"} justifyContent={"end"} flexDirection="row">
                <Typography 
                sx={{
                    m:3, 
                    color:"secondary"
                }}>ABOUT
                </Typography>

                <Typography 
                sx={{
                    m:3
                }}> SERVICES
                </Typography>

                <Typography 
                sx={{
                    m:3
                    }}>LOGIN
                </Typography>
            </Stack>

            </Toolbar>
        </AppBar>
    );
};

export default AppbarView;