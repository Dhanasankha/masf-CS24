import { InputBase,Box, Typography ,Button } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';
import './SingUpStyle.css'

const SingUpView = () => {
    return (
        <form>
            <Box className = "box">
                <Box className = "box2">
                    <Stack spacing={1}>
                        <Typography className = "h3" variant='h3'>SING UP</Typography>
                        <Typography variant='h6'>Username</Typography>
                        <InputBase
                        sx={{
                            backgroundColor:'#D1D1D1',
                            width: 500,
                            height: 40,
                            borderRadius: 3,
                        }}
                        />  
                        <Typography variant='h6'>Password</Typography>
                        <InputBase 
                        sx={{
                            backgroundColor:'#D1D1D1',
                            width: 500,
                            height: 40,
                            borderRadius: 3,
                        
                        }}
                        />                                       
                    </Stack>  
                    <Button variant='contained'
                        sx={{
                            p: 1.5,
                            pl: 12,
                            pr:12,
                            ml: 21,
                            mt: 10,                          
                            backgroundColor: 'red',
                            borderRadius: 8,
                            width: 100,
                        }}>SINGUP</Button> 
                </Box>            
        </Box>
        </form>
    );
};

export default SingUpView;