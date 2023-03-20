import React from 'react'
import Typography from '@mui/material/Typography';
import { Box, Button, styled } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const StyledButton = styled(Button)`
  border-radius: 50px;
  text-transform: capitalize;
  font-weight: 600;
  width: fit-content;
`
const Whatsapp = () => {
    return (
        <Box sx={{ px: { xs: '5%', md: '8%', xl: '160px' }, py: { xs: '3rem', md: '5rem' } }}>
            <Box height="fit-content" border='1px solid #C4C4C4' boxShadow='0px -1px 15px 5px rgba(128, 128, 128, 0.31)' px={{ xs: '5%', xl: '120px' }} py={{ xs: '5%', xl: '60px' }} borderRadius='20px' display='flex' alignItems='center' flexDirection='column' rowGap='2rem'>
                <Typography component='p' sx={{ fontSize: { xs: '1rem', md: '32px', xl: '40px' }, fontWeight: '600' }}>From
                    <Typography component='span' sx={{ fontSize: { xs: '1rem', md: '32px', xl: '40px' }, fontWeight: '600', color: '#FD493E' }}> Apply Job </Typography>
                    to Arrive Designation, Every Thing on Whatsapp</Typography>
                <StyledButton startIcon={<WhatsAppIcon sx={{ fontSize: '10rem' }} />} variant="contained" sx={{ background: 'linear-gradient(94.18deg, #FE1D26 0%, #E8222A 107.81%)', fontSize: { xs: '12px', md: '16px', xl: '18px' } }}>w.a/Whatsapp link</StyledButton>
                <Typography component="p" sx={{ color: '#200E32', fontWeight: '500', fontSize: { xs: '10px', md: '15px', xl: '20px' } }}>Click on below link from your mobile, Apply for the job and start get update on whatsup</Typography>
            </Box>
        </Box >
    )
}

export default Whatsapp
