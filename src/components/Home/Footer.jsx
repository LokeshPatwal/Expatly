import React from 'react'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import ExpatlyLogo from '../../assets/LogoFooter.png'
import TwitterLogo from '../../assets/Twitter.png';
import LinkedinLogo from '../../assets/Linkedin.png';
import InstaLogo from '../../assets/Instagram.png';
import ScanFooter from '../../assets/ScanFooter.png';
import Typography from '@mui/material/Typography';

const Footer = () => {
    return (
        <Box >
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, columnGap: '5rem', rowGap: '2rem', bgcolor: 'rgba(79, 82, 255, 0.9)', height: { xs: 'fit-content', xl: '484px' }, px: { xs: '1rem', md: '3%', xl: '195px' }, py: { xs: '2rem', xl: '70px' } }}>
                <Box display='flex' flexDirection='column' justifyContent='space-between' rowGap={{ xs: '1.5rem', xl: '2rem' }}>
                    <Box component='img' src={ExpatlyLogo} alt='Logo' sx={{ width: { xs: '12rem', md: '15rem' } }} />
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: '8px', xl: '1rem' } }}>
                        <Typography variant='h5' sx={{ color: '#F8F4F4', fontWeight: '700', fontSize: '16px' }}>Follow Us</Typography>
                        <Box sx={{ display: 'flex', gap: '1rem' }}>
                            <Box component='img' src={TwitterLogo} alt='Twitter' sx={{ width: { xs: '2rem', md: '3rem', xl: '20%' } }} />
                            <Box component='img' src={LinkedinLogo} alt='Linkedin' sx={{ width: { xs: '2rem', md: '3rem', xl: '20%' } }} />
                            <Box component='img' src={InstaLogo} alt='Instagram' sx={{ width: { xs: '2rem', md: '3rem', xl: '20%' } }} />
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: '8px', xl: '1rem' } }}>
                        <Box component='img' src={ScanFooter} alt='Scan' sx={{ width: { xs: '5rem', md: '6rem', xl: '55%' } }} />
                        <Typography variant='h5' sx={{ color: '#FFFFFF', fontWeight: '700', fontSize: '16px' }}>Scan Whatsup</Typography>
                    </Box>
                </Box>
                <Stack direction={{ xs: 'column', md: 'row' }} color='#FFFFFF' columnGap='5rem' rowGap='2rem'>
                    <Stack direction='column' justifyContent='space-between' rowGap={{ xs: '10px', md: '1rem' }}>
                        <Typography href='#' cursor='pointer' sx={{ fontWeight: '700', fontSize: '14px' }}>Products</Typography>
                        <Typography href='#'>Customer service</Typography>
                        <Typography href='#'>Client service</Typography>
                        <Typography href='#'>Inhouse productivity</Typography>
                        <Typography href='#'>Project delivering</Typography>
                        <Typography href='#'>Sales tracking.</Typography>
                        <Typography href='#'>Costing reduction</Typography>
                    </Stack>
                    <Stack direction='column' justifyContent='space-between' rowGap={{ xs: '10px', md: '1rem' }}>
                        <Typography href='#' cursor='pointer' sx={{ fontWeight: '700', fontSize: '14px' }}>Quick Links</Typography>
                        <Typography href='#' cursor='pointer' >Tutotrial</Typography>
                        <Typography href='#' cursor='pointer' >Recruiter</Typography>
                        <Typography href='#' cursor='pointer' >Jobs</Typography>
                        <Typography href='#' cursor='pointer' >Problem and Solution</Typography>
                        <Typography href='#' cursor='pointer' >Interview Campaign</Typography>
                        <Typography href='#' cursor='pointer' >WhatsApp Service</Typography>
                    </Stack>
                    <Stack direction='column' justifyContent='space-between' rowGap={{ xs: '10px', md: '1rem' }}>
                        <Typography sx={{ fontWeight: '700', fontSize: '14px' }}>Foreign Service</Typography>
                        <Typography>Mega Recruitment Co</Typography>
                        <Typography>Project Holding Company</Typography>
                        <Typography>Shutdown Project</Typography>
                        <Typography>Project Consultant</Typography>
                        <Typography>Independent Community</Typography>
                        <Typography>Survey</Typography>
                    </Stack>
                    <Stack direction='column' justifyContent='space-between' rowGap={{ xs: '10px', md: '1rem' }}>
                        <Typography sx={{ fontWeight: '700', fontSize: '14px' }}>Features</Typography>
                        <Typography>Tutotial</Typography>
                        <Typography>Independent Database</Typography>
                        <Typography>Cvs Database</Typography>
                        <Typography>Rating and Feedback</Typography>
                        <Typography>Community</Typography>
                        <Typography>Lead Generation</Typography>
                    </Stack>
                    <Stack direction='column' justifyContent='space-between' rowGap={{ xs: '10px', md: '1rem' }}>
                        <Typography sx={{ fontWeight: '700', fontSize: '14px' }}>Services</Typography>
                        <Typography>Job Posting</Typography>
                        <Typography>Skill Training</Typography>
                        <Typography>Instructor</Typography>
                        <Typography>Prize and Value</Typography>
                        <Typography>Advertisment</Typography>
                        <Typography>Associates/Agents</Typography>
                    </Stack>
                </Stack>
            </Box>
        </Box>
    )
}

export default Footer
