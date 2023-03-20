import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material';
import Box from '@mui/material/Box';
import WhatsappLink from '../components/WhatsappLink';
import CompanytypeTabs from '../components/CompanytypeTabs';

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

const RegisteredAgencySignup = () => {
    return (
        <ThemeProvider theme={theme}>
            <Box>
                <Box display='flex' flexDirection={{ xs: 'column', lg: 'row' }}>
                    <Box display='flex' flex='9' justifyContent='center'>
                        <CompanytypeTabs />
                    </Box>
                    <Box display='flex' flex='3' justifyContent='end'>
                        <WhatsappLink />
                    </Box>
                </Box>
            </Box >
        </ThemeProvider>
    )
}

export default RegisteredAgencySignup
