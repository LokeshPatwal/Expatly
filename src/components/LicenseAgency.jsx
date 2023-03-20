import React from 'react';
import { Stack, Typography, Button, TextField } from '@mui/material';

const LicenseAgency = () => {
    return (
        <Stack direction='column' rowGap='16px'>
            <Stack width='100%' direction='column' gap='8px'>
                <Typography sx={{ textTransform: 'capitalize', fontWeight: '500', fontSize: '16px', color: '#000000' }}>your name or contact person’s name</Typography>
                <TextField fullWidth autoComplete='off' id="outlined-basic" placeholder='Name' variant="outlined"
                    sx={{ bgcolor: '#F3F3F3', borderRadius: '8px' }} />
            </Stack>
            <Stack width='100%' direction='column' gap='8px'>
                <Typography sx={{ textTransform: 'capitalize', fontWeight: '500', fontSize: '16px', color: '#000000' }}>designation</Typography>
                <TextField fullWidth autoComplete='off' id="outlined-basic" placeholder='designation' variant="outlined"
                    sx={{ bgcolor: '#F3F3F3', borderRadius: '8px' }} />
            </Stack>
            <Stack width='100%' direction='column' gap='8px'>
                <Typography sx={{ textTransform: 'capitalize', fontWeight: '500', fontSize: '16px', color: '#000000' }}>License No. Or Agency Name</Typography>
                <TextField fullWidth autoComplete='off' id="outlined-basic" placeholder='Name' variant="outlined"
                    sx={{ bgcolor: '#F3F3F3', borderRadius: '8px' }} />
            </Stack>
            <Stack direction='row' columnGap='1rem'>
                <Stack width='100%' direction='column' gap='8px'>
                    <Typography sx={{ textTransform: 'capitalize', fontWeight: '500', fontSize: '16px', color: '#000000' }}>City</Typography>
                    <TextField fullWidth autoComplete='off' id="outlined-basic" placeholder='Jaipur' variant="outlined"
                        sx={{ bgcolor: '#F3F3F3', borderRadius: '8px' }} />
                </Stack>
                <Stack width='100%' direction='column' gap='8px'>
                    <Typography sx={{ textTransform: 'capitalize', fontWeight: '500', fontSize: '16px', color: '#000000' }}>pincode</Typography>
                    <TextField fullWidth autoComplete='off' id="outlined-basic" placeholder='Pincode' variant="outlined"
                        sx={{ bgcolor: '#F3F3F3', borderRadius: '8px' }} />
                </Stack>
            </Stack>
            <Button sx={{ textTransform: 'capitalize', background: 'linear-gradient(94.18deg, #FE1D26 0%, #E8222A 107.81%)', color: 'white', fontWeight: '600', fontSize: '22px', width: '100%', height: { xs: '50px', xl: '64px' }, borderRadius: '8px', mx: 'auto', mt: '20px' }}>Verify</Button>
        </Stack>
    )
}

export default LicenseAgency
