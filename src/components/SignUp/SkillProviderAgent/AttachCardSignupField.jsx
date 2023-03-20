import React from 'react'
import { Box, Stack, TextField, ButtonBase, Button } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import CompanyCard from '../../../assets/CompanyCard.png'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import BorderColorIcon from '@mui/icons-material/BorderColor';



const AttachCardSignupField = () => {
    return (
        <Stack width='100%' height={{ xs: '100%', lg: '100vh' }} alignItems='center' justifyContent='center' py={{ xs: '2rem', lg: 0 }}>
            <Stack width={{ xs: '95%', lg: '55%' }} height='fit-content' gap={{ xs: '2rem', lg: '16px' }} direction='column' >
                <Stack direction='column' gap='16px'>
                    <Stack direction={{ xs: 'column', lg: 'row' }} gap='1rem' width='100%'>
                        <TextField fullWidth autoComplete='off' id="outlined-basic" placeholder='Pearl Recruitment Pvt Ltd' variant="outlined"
                            sx={{ bgcolor: '#F3F3F3', borderRadius: '8px' }} />
                        <TextField fullWidth autoComplete='off' id="outlined-basic" placeholder='Mayank Parthav' variant="outlined"
                            sx={{ bgcolor: '#F3F3F3', borderRadius: '8px' }} />
                    </Stack>
                    <Stack direction={{ xs: 'column', lg: 'row' }} gap='1rem' width='100%'>
                        <TextField fullWidth autoComplete='off' id="outlined-basic" placeholder='manayank@pearl.com' variant="outlined"
                            sx={{ bgcolor: '#F3F3F3', borderRadius: '8px' }} />
                        <TextField fullWidth autoComplete='off' id="outlined-basic" placeholder='Managing Director' variant="outlined"
                            sx={{ bgcolor: '#F3F3F3', borderRadius: '8px' }} />
                    </Stack>
                    <Stack direction={{ xs: 'column', lg: 'row' }} gap='1rem' width='100%'>
                        <TextField fullWidth autoComplete='off' id="outlined-basic" placeholder='H23, Balad Building,  Malaz' variant="outlined"
                            sx={{ bgcolor: '#F3F3F3', borderRadius: '8px' }} />
                        <TextField fullWidth autoComplete='off' id="outlined-basic" placeholder='Human Resources' variant="outlined"
                            sx={{ bgcolor: '#F3F3F3', borderRadius: '8px' }} />
                    </Stack>
                    <Stack direction={{ xs: 'column', lg: 'row' }} gap='1rem' width='100%'>
                        <Box display='flex' width='100%'>
                            
                            <TextField fullWidth autoComplete='off' id="outlined-basic" placeholder='Name' variant="outlined"
                                sx={{ bgcolor: '#F3F3F3', borderRadius: '8px' }}
                            />
                        </Box>
                        <Stack direction={{ xs: 'column', lg: 'row' }} gap='1rem' width='100%'>
                            <TextField fullWidth autoComplete='off' id="outlined-basic" placeholder='Riyadh' variant="outlined"
                                sx={{ bgcolor: '#F3F3F3', borderRadius: '8px' }} />
                            <TextField fullWidth autoComplete='off' id="outlined-basic" placeholder='112211' variant="outlined"
                                sx={{ bgcolor: '#F3F3F3', borderRadius: '8px' }} />
                        </Stack>
                    </Stack>
                </Stack>
                <Stack gap={{ xs: '1rem', lg: '10px' }}>
                    <Stack direction='row' gap='5%' alignItems='center' >
                        <Box component='img' src={CompanyCard} width='8rem' />
                        <ButtonBase sx={{ fontWeight: '600', fontSize: '16px' }}>Attach Another Card</ButtonBase>
                    </Stack>
                    <FormGroup display='flex' gap='16px' mt='16px'>
                        <FormControlLabel control={<Checkbox />} label="I agree to Receieve Expatly Offers and Services" />
                        <FormControlLabel control={<Checkbox />} label="I agree to Terms & Condition and Privacy Policies" />
                    </FormGroup>
                    <Button sx={{ textTransform: 'capitalize', background: 'linear-gradient(94.18deg, #FE1D26 0%, #E8222A 107.81%)', color: 'white', fontWeight: '600', fontSize: '22px', width: '280px', height: { xs: '55px', lg: '64px' }, borderRadius: '8px', mx: 'auto', mt: '16px' }}>Sign Up</Button>
                    <ButtonBase sx={{ fontWeight: '500', fontSize: '20px', width: 'fit-content', mx: 'auto' }}>
                        Edit Company Detail   <BorderColorIcon /></ButtonBase>
                </Stack>
            </Stack >
        </Stack>
    )
}

export default AttachCardSignupField
