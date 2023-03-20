import React from 'react'
import MenuItem from '@mui/material/MenuItem';
import { Stack, Typography, Button, TextField, Link } from '@mui/material';
import UploadBtnImg from '../../../assets/UploadImg.png'

const industry = [
    {
        value: 'عربي',
    },
    {
        value: 'Hinglish',
    },
    {
        value: 'English',
    },
];

const Signup = () => {
    return (
        <Stack direction='row' display='flex' alignItems='center' justifyContent='center' height='100%' columnGap='10%'>
            <Stack sx={{ width: { xs: '95%', lg: '350px', xl: '448px' }, height: 'fit-content', display: 'flex', justifyContent: 'center', alignItems: 'center', my: '2rem' }}>
                <Stack direction='row' justifyContent='space-between' alignItems='center' width='100%' mb='24px'>
                    <Typography sx={{ fontWeight: '700', fontSize: { xs: '22px', xl: '32px' }, color: '#787885' }}>Sign up</Typography>
                    <TextField id="outlined-select-currency" defaultValue='Hinglish' select size="small" sx={{ minWidth: '7rem', py: '0px', borderRadius: '8px', borderRadius: '8px', color: '#FD493E' }} >
                        {industry.map((option) => (
                            <MenuItem key={option.value} value={option.value} sx={{}}>
                                {option.value}
                            </MenuItem>
                        ))}
                    </TextField>
                </Stack>
                <Stack direction='column' rowGap='16px' width='100%'>
                    <Stack width='100%' direction='column' gap='8px'>
                        <Typography sx={{ textTransform: 'capitalize', fontWeight: '500', fontSize: '16px', color: '#000000' }}>Position / Job Looking For</Typography>
                        <TextField fullWidth autoComplete='off' id="outlined-basic" placeholder='Name' variant="outlined"
                            sx={{ bgcolor: '#F3F3F3', borderRadius: '8px' }} />
                    </Stack>
                    <Stack width='100%' direction='column' gap='8px'>
                        <Typography sx={{ textTransform: 'capitalize', fontWeight: '500', fontSize: '16px', color: '#000000' }}>Searching Job in which Country</Typography>
                        <TextField fullWidth autoComplete='off' id="outlined-basic" placeholder='Country' variant="outlined"
                            sx={{ bgcolor: '#F3F3F3', borderRadius: '8px' }} />
                    </Stack>
                    <Stack width='100%' direction='column' gap='8px'>
                        <Typography sx={{ textTransform: 'capitalize', fontWeight: '500', fontSize: '16px', color: '#000000' }}>Industry</Typography>
                        <TextField fullWidth autoComplete='off' id="outlined-basic" placeholder='Industry' variant="outlined"
                            sx={{ bgcolor: '#F3F3F3', borderRadius: '8px' }} />
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
            </Stack>
            <Link href='#' sx={{
                fontWeight: '400', fontSize: '20px', fontStyle: 'italic', color: 'black', position: 'relative',
                top: '-17rem'
            }}>Already in Abroad Country ? SIgnup Here</Link>
        </Stack>
    )
}

export default Signup
