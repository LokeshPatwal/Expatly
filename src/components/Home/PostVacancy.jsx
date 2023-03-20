import React from 'react';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { Button, styled } from '@mui/material';

const StyledButton = styled(Button)`
  border-radius: 50px;
  text-transform: capitalize;
  font-weight: 600;
  width: fit-content;
  height: fit-content;
`
const PostVacancy = () => {
    return (
        <Stack direction={{ xs: 'column', md: 'row' }} justifyContent='center' alignItems='center' gap={5} sx={{ border: '1px solid #C4C4C4', background: 'linear-gradient(90.09deg, rgba(212, 227, 255, 0.45) 0.06%, rgba(186, 186, 250, 0.45) 98.85%)', paddingY: '4rem', mt: '2rem' }}>
            <Stack textAlign='center' gap={2}>
                <Typography variant='h4' sx={{ color: '#FD493E', fontWeight: '600', fontSize: { xs: '28px', xl: '40px' } }}>
                    Post Your Vacancy
                </Typography>
                <Typography component='p' sx={{ textTransform: 'capitalize', color: '#200E32', fontWeight: '600', fontSize: { xs: '15px', xl: '22px' } }}>
                    Get Sortlisted Cv’s in your mail
                </Typography>
            </Stack>
            <Stack direction='row' gap={2}>
                <StyledButton variant="contained" sx={{ background: 'linear-gradient(93.67deg, #5463FF 0%, #474AF1 94.37%)', fontSize: { xs: '12px', md: '16px', xl: '18px' } }}>post job</StyledButton>
                <StyledButton variant="contained" sx={{ background: 'linear-gradient(94.18deg, #FE1D26 0%, #E8222A 107.81%)', fontSize: { xs: '12px', md: '16px', xl: '18px' } }}>w.a/Whatsapp link</StyledButton>
            </Stack>
        </Stack>
    )
}

export default PostVacancy
