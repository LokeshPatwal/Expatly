import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material';
import WhatsappLink from '../components/WhatsappLink';
import AttachCardSignupField from '../components/SignUp/SkillProviderAgent/AttachCardSignupField';

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

const SkillProviderAgent = () => {
    return (
        <ThemeProvider theme={theme}>
            <Box>
                <Box sx={{ height: { xs: '2rem', xl: '50px' }, bgcolor: '#5463FF', boxShadow: '0px 4px 4px rgba(0,0,0,0.05)', display: 'flex', justifyContent: 'end', alignItems: 'center' }}>
                    <Link href="#" sx={{ fontWeight: '500', fontSize: { xs: '15px', xl: '22px' }, color: 'white', mr: '5%' }}>Employer? Login here</Link>
                </Box>
                <Box display='flex' flexDirection={{ xs: 'column', lg: 'row' }}>
                    <Box display='flex' flex='9' justifyContent='center'>
                        <AttachCardSignupField />
                    </Box>
                    <Box display='flex' flex='3' justifyContent='end'>
                        <WhatsappLink />
                    </Box>
                </Box>
                <FooterBottom />
            </Box >
        </ThemeProvider>
    )
}

export default SkillProviderAgent
