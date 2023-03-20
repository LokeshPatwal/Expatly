import React from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { TextField, Stack, Typography, Button } from '@mui/material';
import UploadBtnImg from '../../../assets/UploadImg.png'


const SkillProviderFormTab = () => {
    const [value, setValue] = React.useState('female');

    const handleChange = (event) => {
        setValue(event.target.value);
    };
    return (
        <Stack sx={{ width: { xs: '95%', lg: '350px', xl: '448px' }, height: 'fit-content', display: 'flex', justifyContent: 'center', alignItems: 'center', my: '2rem', mx: 'auto' }}>
            <Stack direction='column' rowGap='16px'>
                <Stack width='100%' direction='column' gap='8px'>
                    <Typography sx={{ textTransform: 'capitalize', fontWeight: '500', fontSize: '16px', color: '#000000' }}>your name or contact person’s name</Typography>
                    <TextField fullWidth autoComplete='off' id="outlined-basic" placeholder='Name' variant="outlined"
                        sx={{ bgcolor: '#F3F3F3', borderRadius: '8px' }} />
                </Stack>
                <Stack width='100%' direction='column' gap='8px'>
                    <Typography sx={{ textTransform: 'capitalize', fontWeight: '500', fontSize: '16px', color: '#000000' }}>designation</Typography>
                    <TextField fullWidth autoComplete='off' id="outlined-basic" placeholder='Name' variant="outlined"
                        sx={{ bgcolor: '#F3F3F3', borderRadius: '8px' }} />
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
                <Stack width='100%' direction='column' gap='8px'>
                    <Typography sx={{ textTransform: 'capitalize', fontWeight: '500', fontSize: '16px', color: '#000000' }}>Building No, Build Name, Area</Typography>
                    <TextField fullWidth autoComplete='off' id="outlined-basic" placeholder='Name' variant="outlined"
                        sx={{ bgcolor: '#F3F3F3', borderRadius: '8px' }} />
                </Stack>
                <FormControl>
                    <FormLabel id="demo-controlled-radio-buttons-group">Do you hold any registered Agency Branch or Any Govt License</FormLabel>
                    <RadioGroup row
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        value={value}
                        onChange={handleChange}
                    >
                        <FormControlLabel value="female" control={<Radio />} label="Yes" />
                        <FormControlLabel value="male" control={<Radio />} label="No" />
                    </RadioGroup>
                </FormControl>
                <Stack>
                    <Button startIcon={<img src={UploadBtnImg} />} sx={{
                        display: 'flex', gap: '8px',
                        textTransform: 'capitalize', width: 'fit-content', pl: { xs: '4%', lg: '20px' }, pr: '24px', py: { xs: '3%', lg: '16px' }, background: '#5463FF', borderRadius: '12px', color: 'white', fontWeight: '600', fontSize: '16px',
                        "&:hover": { background: 'rgba(84, 99, 255, 0.9)' }
                    }}>Upload Visit Card</Button>
                </Stack>
                <Button sx={{ textTransform: 'capitalize', background: 'linear-gradient(94.18deg, #FE1D26 0%, #E8222A 107.81%)', color: 'white', fontWeight: '600', fontSize: '22px', width: '280px', height: { xs: '55px', xl: '64px' }, borderRadius: '8px', mx: 'auto', mt: '16px' }}>Sign Up</Button>
            </Stack>
        </Stack>
    )
}

export default SkillProviderFormTab
