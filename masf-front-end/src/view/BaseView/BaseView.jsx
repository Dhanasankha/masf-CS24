import { Box } from '@mui/material';
import React from 'react';
// import SingUpContorller from '../../components/SingUp/SingUpContorller';
// import LogInController from '../../components/LogIn/LogInController';
import SingUpContorller from '../../components/SingUp/SingUpContorller';



// import CustomerPage from '../CustomerPage';

const BaseView = () => {
    return (
        <div>
            <Box sx={{backgroundColor: '#FF2D2D'}}>
                <SingUpContorller/>
            </Box>  
        </div>
    );
};
// sx={{backgroundColor: '#FF2D2D'}}
export default BaseView;