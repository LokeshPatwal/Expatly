import React from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button, styled } from '@mui/material';
import ManageNetwork from './ManageNetwork';
import EarnExtra from './EarnExtra';
import WhatWeDo from './WhatWeDo';

const StyledButton = styled(Button)`
  border-radius: 0px 12px;
  text-transform: capitalize;
  font-weight: 500;
  box-shadow: 0px 0px 15px #C6D2FA;
  border: none;
  &:hover {
    border: none;
  }
`
const JoinRecruitment = () => {
    return (
        <Box sx={{ px: { xs: '5%', md: '8%', xl: '160px' }, pt: { xs: '3rem', md: '5rem' }, display: 'flex', flexDirection: 'column', rowGap: { xs: '5rem', xl: '10rem' }, height: 'fit-content' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                <Typography variant='h2' sx={{ fontWeight: '600', fontSize: { xs: '28px', xl: '40px' }, textAlign: 'center' }}>Join the Asia <Typography variant='span' sx={{ color: '#FD493E' }}>#Trending</Typography> Recruitment and jobs <Typography variant='span' sx={{ color: '#FD493E' }}>Community</Typography></Typography>
                <Box display='flex' justifyContent='center' flexWrap='wrap' gap={{ xs: '10px', md: '1rem', xl: '1.5rem' }} mt='1rem'>
                    <StyledButton variant="outlined" sx={{ color: '#000F26', fontSize: { xs: '12px', md: '13px', lg: '16px', xl: '18px' } }}># Registered MEA Agency</StyledButton>
                    <StyledButton variant="outlined" sx={{ color: '#000F26', fontSize: { xs: '12px', md: '13px', lg: '16px', xl: '18px' } }}> Mediator for company Visa</StyledButton>
                    <StyledButton variant="outlined" sx={{ color: '#000F26', fontSize: { xs: '12px', md: '13px', lg: '16px', xl: '18px' } }}>Experts</StyledButton>
                    <StyledButton variant="outlined" sx={{ color: '#000F26', fontSize: { xs: '12px', md: '13px', lg: '16px', xl: '18px' } }}>Looking Visa</StyledButton>
                    <StyledButton variant="outlined" sx={{ color: '#000F26', fontSize: { xs: '12px', md: '13px', lg: '16px', xl: '18px' } }}> Mediator for company Visa</StyledButton>
                    <StyledButton variant="outlined" sx={{ color: '#000F26', fontSize: { xs: '12px', md: '13px', lg: '16px', xl: '18px' } }}>Looking Visa</StyledButton>
                    <StyledButton variant="outlined" sx={{ color: '#000F26', fontSize: { xs: '12px', md: '13px', lg: '16px', xl: '18px' } }}>Looking Visa</StyledButton>
                    <StyledButton variant="outlined" sx={{ color: '#000F26', fontSize: { xs: '12px', md: '13px', lg: '16px', xl: '18px' } }}> Mediator for company Visa</StyledButton>
                    <StyledButton variant="outlined" sx={{ color: '#000F26', fontSize: { xs: '12px', md: '13px', lg: '16px', xl: '18px' } }}> Looking Visa</StyledButton>
                    <StyledButton variant="outlined" sx={{ color: '#000F26', fontSize: { xs: '12px', md: '13px', lg: '16px', xl: '18px' } }}> # Registered MEA Agency</StyledButton>
                    <StyledButton variant="outlined" sx={{ color: '#000F26', fontSize: { xs: '12px', md: '13px', lg: '16px', xl: '18px' } }}> Experts</StyledButton>
                    <StyledButton variant="outlined" sx={{ color: '#000F26', fontSize: { xs: '12px', md: '13px', lg: '16px', xl: '18px' } }}> Experts</StyledButton>
                    <StyledButton variant="outlined" sx={{ color: '#000F26', fontSize: { xs: '12px', md: '13px', lg: '16px', xl: '18px' } }}> Looking Visa</StyledButton>
                    <StyledButton variant="outlined" sx={{ color: '#000F26', fontSize: { xs: '12px', md: '13px', lg: '16px', xl: '18px' } }}> Mediator for company Visa</StyledButton>
                    <StyledButton variant="outlined" sx={{ color: '#000F26', fontSize: { xs: '12px', md: '13px', lg: '16px', xl: '18px' } }}> # Registered MEA Agency</StyledButton>
                    <StyledButton variant="outlined" sx={{ color: '#000F26', fontSize: { xs: '12px', md: '13px', lg: '16px', xl: '18px' } }}> Looking Visa</StyledButton>
                    <StyledButton variant="outlined" sx={{ color: '#000F26', fontSize: { xs: '12px', md: '13px', lg: '16px', xl: '18px' } }}> # Registered MEA Agency</StyledButton>
                </Box>
            </Box>
            <ManageNetwork />
            <EarnExtra />
            <WhatWeDo />
        </Box>
    )
}

export default JoinRecruitment
