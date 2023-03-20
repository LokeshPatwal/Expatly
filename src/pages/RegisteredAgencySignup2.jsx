import React from 'react'
import Box from '@mui/material/Box'
import RegisteredSignupForm from '../components/SignUp/RegisteredAgencySignup/RegisteredSignupForm2'
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

const RegisteredAgencySignup = () => {
    return (
        <ThemeProvider theme={theme}>
            <Box height='100%'>
                <RegisteredSignupForm />
            </Box>
        </ThemeProvider>
    )
}

export default RegisteredAgencySignup
