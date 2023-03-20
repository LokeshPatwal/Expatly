import React, { useState } from 'react';
import { Box, Stack, Typography, Button, TextField } from '@mui/material';
import WhatsappLink from '../components/WhatsappLink';
import CompanytypeTabs from '../components/CompanytypeTabs'
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
    components: {
        MuiOutlinedInput: {
            styleOverrides: {
                notchedOutline: {
                    borderRadius: '8px', // custom border-radius value
                },
            },
        },
    },
});


const EmployerSignup2 = () => {
    return (
        <ThemeProvider theme={theme}>
            <Box height='100%'>
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' } }}>
                    <Box display='flex' justifyContent='center' alignItems='center' flexGrow={1}>
                        <CompanytypeTabs />
                    </Box>
                    <Box display='flex' justifyContent='end' >
                        <WhatsappLink />
                    </Box>
                </Box>
            </Box>
        </ThemeProvider>
    )
}

export default EmployerSignup2

