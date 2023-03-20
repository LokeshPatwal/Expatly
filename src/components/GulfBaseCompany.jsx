import React, { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import { Stack, Typography, Button, TextField } from '@mui/material';
import UploadBtnImg from '../assets/UploadImg.png'

const industry = [
    {
        value: 'Automobiles',
    },
    {
        value: 'IT',
    },
    {
        value: 'Banking',
    },
    {
        value: 'Transport',
    },
];

const GulfBaseCompany = () => {
    const [age, setAge] = React.useState('');
    const [tab, setTab] = useState('')
    
    return (
        <Stack direction='column' rowGap='16px'>
            <Stack width='100%' direction='column' gap='8px'>
                <Typography sx={{ textTransform: 'capitalize', fontWeight: '500', fontSize: '16px', color: '#000000' }}>your name or contact preson’s name</Typography>
                <TextField fullWidth autoComplete='off' id="outlined-basic" placeholder='Name' variant="outlined"
                    sx={{ bgcolor: '#F3F3F3', borderRadius: '8px' }} />
            </Stack>
            <Stack width='100%' direction='column' gap='8px'>
                <Typography sx={{ textTransform: 'capitalize', fontWeight: '500', fontSize: '16px', color: '#000000' }}>designation</Typography>
                <TextField fullWidth autoComplete='off' id="outlined-basic" placeholder='designation' variant="outlined"
                    sx={{ bgcolor: '#F3F3F3', borderRadius: '8px' }} />
            </Stack>
            <Stack width='100%' direction='column' gap='8px'>
                <Typography sx={{ textTransform: 'capitalize', fontWeight: '500', fontSize: '16px', color: '#000000' }}>Industry</Typography>
                <TextField id="outlined-select-currency" defaultValue='Banking' select sx={{ bgcolor: '#F3F3F3', borderRadius: '8px' }} >
                    {industry.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.value}
                        </MenuItem>
                    ))}
                </TextField>
            </Stack>
            <Stack direction='row' columnGap='1rem'>
                <Stack width='100%' direction='column' gap='8px'>
                    <Typography sx={{ textTransform: 'capitalize', fontWeight: '500', fontSize: '16px', color: '#000000' }}>City</Typography>
                    <TextField fullWidth autoComplete='off' id="outlined-basic" placeholder='Name' variant="outlined"
                        sx={{ bgcolor: '#F3F3F3', borderRadius: '8px' }} />
                </Stack>
                <Stack width='100%' direction='column' gap='8px'>
                    <Typography sx={{ textTransform: 'capitalize', fontWeight: '500', fontSize: '16px', color: '#000000' }}>pincode</Typography>
                    <TextField fullWidth autoComplete='off' id="outlined-basic" placeholder='Pincode' variant="outlined"
                        sx={{ bgcolor: '#F3F3F3', borderRadius: '8px' }} />
                </Stack>
            </Stack>
            <Stack mt='24px'>
                <Button startIcon={<img src={UploadBtnImg} />} sx={{
                    display: 'flex', gap: '8px',
                    textTransform: 'capitalize', width: 'fit-content', pl: { xs: '4%', lg: '20px' }, pr: '24px', py: { xs: '3%', lg: '16px' }, background: '#5463FF', borderRadius: '12px', color: 'white', fontWeight: '600', fontSize: '16px',
                    "&:hover": { background: 'rgba(84, 99, 255, 0.9)' }
                }}>Upload Visit Card</Button>
            </Stack>
            <Button sx={{ textTransform: 'capitalize', background: 'linear-gradient(94.18deg, #FE1D26 0%, #E8222A 107.81%)', color: 'white', fontWeight: '600', fontSize: '22px', width: '280px', height: { xs: '55px', xl: '64px' }, borderRadius: '8px', mx: 'auto', mt: '20px' }}>Verify</Button>
        </Stack>
    )
}

export default GulfBaseCompany
