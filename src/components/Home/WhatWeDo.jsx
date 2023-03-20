import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const WhatWeDo = () => {
    return (
        <Box>
            <Box sx={{ height: { xs: 'fit-content', xl: '523px' }, background: 'linear-gradient(90.09deg, rgba(212, 227, 255, 0.4) 0.06%, rgba(186, 186, 250, 0.4) 98.85%)', px: { xs: '5%', md: '8%', xl: '160px' }, py: { xs: '1rem', sm: '2rem', lg: '3rem', xl: '114px' }, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', borderRadius: '20px 20px 0px 0px' }}>
                <Typography variant='h4' sx={{ color: '#200E32', fontWeight: '600', fontSize: { xs: '18px', xl: '22px' }, mb: { xs: '1rem', xl: '0px'} }}>What We Do</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <Typography component='p' sx={{ color: '#200E32', fontWeight: '400', fontSize: { xs: '12px', sm: '15px', xl: '22px' }, textAlign: 'center' }}>Expatly.co is  platform for  grey and blue-collar Professionals  Focus to motive. standard living, enhancing skills, finding and providing solutions of their respective experienced area, and building a network.
                    </Typography>
                    <Typography component='p' sx={{ color: '#200E32', fontWeight: '400', fontSize: { xs: '12px', sm: '15px', xl: '22px' }, textAlign: 'center' }}>For Recruiter we aim to swift the recruiting till Deploying Solution. We connect large talent pool of network with the relevant Industries.
                    </Typography>
                    <Typography component='p' sx={{ color: '#200E32', fontWeight: '400', fontSize: { xs: '12px', sm: '15px', xl: '22px' }, textAlign: 'center' }}>Expatly.co is a product of Umid Group of Company Base in Mumbai and Registered under State Govt Body
                    </Typography>
                </Box>
            </Box>
        </Box >
    )
}

export default WhatWeDo
