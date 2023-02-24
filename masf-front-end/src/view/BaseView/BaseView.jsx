import { Box, Container } from '@mui/material';
import React from 'react';
import AppbarContorller from '../../components/Appbar/AppbarContorller';
import LogInView from '../../components/LogIn/LogInView';
import DataFormViewContorller from '../../components/DataForm/DataFormContorller';
import SingUpContorller from '../../components/SingUp/SingUpContorller';

// import CustomerPage from '../CustomerPage';

const BaseView = () => {
    return (
        <div>
            <Box sx={{backgroundColor: '#FF2D2D'}}>
                <AppbarContorller/>
             
                <LogInView/>

            </Box>
                

           
             
        </div>
    );
};

export default BaseView;