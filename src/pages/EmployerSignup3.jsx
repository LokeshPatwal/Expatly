import React from 'react'
import { Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material';
import CardSignupField from '../components/SignUp/SkillProviderAgent/AttachCardSignupField';

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

const EmployerSignup3 = () => {
    return (
        <ThemeProvider theme={theme}>
            <Box>
                <CardSignupField />
            </Box>
        </ThemeProvider>
    )
}

export default EmployerSignup3
