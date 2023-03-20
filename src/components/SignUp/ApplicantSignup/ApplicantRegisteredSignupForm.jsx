import React from 'react'
import { Stack, Button, ButtonBase, Box, Link } from '@mui/material'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import BorderColorIcon from '@mui/icons-material/BorderColor';

const ApplicantRegisteredSignupForm = () => {

    return (
        <Stack direction='row' justifyContent='center' height='100%' width="100%">
            <Stack width={{ xs: '95%', lg: '65%' }} height='100%' direction='column' alignItems='center' justifyContent='center' py={{ xs: '2rem', lg: 0 }}>
                <Stack rowGap='3rem' my='3rem' justifyContent='center'>
                    <Typography component='p' sx={{ fontWeight: '700', fontSize: '20px', color: '#828282', textAlign: 'center' }}>
                        Congrats your Account has been Registered, our Representative will call you soon! meanwhile have sent E - mail to your id  and <Typography variant='span' sx={{ fontWeight: '600', fontSize: '22px' }}>whatsApp</Typography> please <Typography variant='span' sx={{ fontWeight: '700', fontSize: '22px' }}>Verify</Typography>
                    </Typography>
                    <Stack direction='column' rowGap='16px'>
                        <Stack direction={{ xs: 'column', md: 'row' }} rowGap='16px' columnGap='60px'>
                            <Stack width='100%' direction='column' gap='8px'>
                                <Typography sx={{ textTransform: 'capitalize', fontWeight: '500', fontSize: '16px', color: '#000000' }}>name</Typography>
                                <TextField fullWidth autoComplete='off' id="outlined-basic" placeholder='nitesh' variant="outlined"
                                    sx={{ bgcolor: '#F3F3F3' }} />
                            </Stack>
                            <Stack width='100%' direction='column' gap='8px'>
                                <Typography sx={{ textTransform: 'capitalize', fontWeight: '500', fontSize: '16px', color: '#000000' }}>Located in</Typography>
                                <TextField fullWidth autoComplete='off' id="outlined-basic" placeholder='noida' variant="outlined"
                                    sx={{ bgcolor: '#F3F3F3' }} />
                            </Stack>
                        </Stack>
                        <Stack direction={{ xs: 'column', md: 'row' }} rowGap='16px' columnGap='60px'>
                            <Stack width='100%' direction='column' gap='8px'>
                                <Typography sx={{ textTransform: 'capitalize', fontWeight: '500', fontSize: '16px', color: '#000000' }}>Email Address</Typography>
                                <TextField fullWidth autoComplete='off' id="outlined-basic" placeholder='web.nitesh@gmail.com' variant="outlined"
                                    sx={{ bgcolor: '#F3F3F3' }} />
                            </Stack>
                            <Stack width='100%' direction='column' gap='8px'>
                                <Typography sx={{ textTransform: 'capitalize', fontWeight: '500', fontSize: '16px', color: '#000000' }}>Willing to Work </Typography>
                                <TextField fullWidth autoComplete='off' id="outlined-basic" placeholder='design' variant="outlined"
                                    sx={{ bgcolor: '#F3F3F3', textTransform: 'capitalize' }} />
                            </Stack>
                        </Stack>
                        <Stack direction={{ xs: 'column', md: 'row' }} rowGap='16px' columnGap='60px'>
                            <Stack width='100%' direction='column' gap='8px'>
                                <Typography sx={{ textTransform: 'capitalize', fontWeight: '500', fontSize: '16px', color: '#000000' }}>Position</Typography>
                                <TextField fullWidth autoComplete='off' id="outlined-basic" placeholder='ui/designer' variant="outlined"
                                    sx={{ bgcolor: '#F3F3F3' }} />
                            </Stack>
                            <Stack width='100%' direction='column' gap='8px'>
                                <Typography sx={{ textTransform: 'capitalize', fontWeight: '500', fontSize: '16px', color: '#000000' }}>mobile Number</Typography>
                                <TextField fullWidth autoComplete='off' id="outlined-basic" placeholder='9720940484' variant="outlined"
                                    sx={{ bgcolor: '#F3F3F3' }} />
                            </Stack>
                        </Stack>
                        <Button sx={{ textTransform: 'capitalize', background: 'linear-gradient(94.18deg, #FE1D26 0%, #E8222A 107.81%)', color: 'white', fontWeight: '600', fontSize: '22px', width: '280px', height: { xs: '55px', xl: '64px' }, borderRadius: '8px', mx: 'auto', mt: '20px' }}>sign up</Button>
                        <ButtonBase sx={{ fontWeight: '500', fontSize: '20px', width: 'fit-content', mx: 'auto' }}>
                            Edit RA Number   <BorderColorIcon /></ButtonBase>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default ApplicantRegisteredSignupForm
