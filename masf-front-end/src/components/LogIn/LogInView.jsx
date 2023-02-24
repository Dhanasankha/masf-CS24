import { Typography, Box, InputBase, Button } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';

const LogInView = () => {
    return (
        
            <Box
                sx={{
                    height: '100vh',
                    width: 600,
                    margin: 'auto',
                    justifyContent: 'center',
                    alignItems: 'center',
                    display:'flex',
                    borderRadius: 5,
                    p: 1,
                    backgroundColor:'#FF2D2D'                           
                }}
                >
                <Box sx={{
                    backgroundColor:'white',
                    height: 400,
                    width: 600,
                    p: 6,
                    borderRadius:5,
                   
                  
                }}>
                    <Stack spacing={1}>
                        <Typography variant='h3' 
                        sx={{
                             pb: 2, 
                             alignSelf: 'center',
                             display:  'flex'
                             }}>
                            LOGIN</Typography>
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
                        }}>LOGIN</Button> 
                </Box>                  
        </Box>
 
    );
};

export default LogInView;