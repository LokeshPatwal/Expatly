import React, { useState } from 'react'
import LinkedinLogo from '../../../assets/LinkedinLarge.png';
import GoogleLogo from '../../../assets/Google.png';
import FacebookLogo from '../../../assets/Facebook.png';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Box, Button, styled, Stack } from '@mui/material';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: { xs: '90%', sm: '400px', lg: 600 },
    height: { xs: 'fit-content', lg: '650' },
    paddingX: { xs: '1rem', md: '6rem' },
    paddingY: { xs: '1rem', md: '3rem' },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: '2rem',
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: '12px'
};

const StyledButton = styled(Button)`
  border-radius: 35px;
  text-transform: capitalize;
  font-weight: 600;
  display: flex;
  text-align: center;
  justify-content: space-between;
`
const StyledSubmitButton = styled(Button)`
  border-radius: 8px;
  text-transform: capitalize;
  font-weight: 600;
  display: flex;
  text-align: center;
`
const StyledPhoneInput = styled(PhoneInput)(({ theme }) => ({
    '& input': {
        outline: 'none',
        border: 'none',
        background: '#F3F3F3',
        borderRadius: '8px',
        height: '40px',
        boxSizing: 'border-box',
        [theme.breakpoints.up('sm')]: {
            height: '40px', // height for screens >= 600px
        },
        [theme.breakpoints.up('xl')]: {
            height: '50px', // height for screens >= 1280px
        },
    },
}));


const ApplicantFrontPageSubmitForm = () => {
    const [tab, setTab] = useState('')

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [value, setValue] = useState()

    return (
        <Stack sx={{ width: { xs: '95%', lg: '350px', xl: '448px' }, height: 'fit-content', display: 'flex', justifyContent: 'center', alignItems: 'center', my: '2rem', mx: 'auto' }}>
            <Stack direction='row' gap='1rem' mb='16px'>
                <Box component='img' src={FacebookLogo} alt='Facebook' sx={{ width: { xs: '3rem', xl: '100%' } }} />
                <Box component='img' src={GoogleLogo} alt='Google' sx={{ width: { xs: '3rem', xl: '100%' } }} />
                <Box component='img' src={LinkedinLogo} alt='Linkedin' sx={{ width: { xs: '3rem', xl: '100%' } }} />
            </Stack>
            <Typography>Or</Typography>
            <Stack direction='column' rowGap='16px'>
                <Stack direction='row' alignItems='center' justifyContent='space-between'>
                    <Typography sx={{ fontWeight: '700', fontSize: { xs: '22px', xl: '32px' }, color: '#787885' }}>Sign up</Typography>
                    <Typography component='p' sx={{ fontWeight: '500', fontSize: { xs: '13px', xl: '16px' }, color: 'black' }}>Already Registered?<Typography variant='span' sx={{ fontWeight: '500', fontSize: { xs: '15px', xl: '20px' }, color: '#5463FF' }}> Sign In</Typography> </Typography>
                </Stack>
                <Stack direction='column' gap='8px'>
                    <Typography sx={{ textTransform: 'capitalize', fontWeight: '500', fontSize: '16px', color: '#000000' }}>company name</Typography>
                    <TextField fullWidth autoComplete='off' id="outlined-basic" placeholder='Name' variant="outlined"
                        sx={{ bgcolor: '#F3F3F3', borderRadius: '8px' }} />
                </Stack>
                <Stack direction='column' gap='8px'>
                    <Typography sx={{ textTransform: 'capitalize', fontWeight: '500', fontSize: '16px', color: '#000000' }}>official email id</Typography>
                    <TextField fullWidth autoComplete='off' id="outlined-basic" placeholder='Email' variant="outlined"
                        sx={{ bgcolor: '#F3F3F3', borderRadius: '8px' }}
                    />
                </Stack>
                <Stack direction='column' gap='8px'>
                    <Typography sx={{ textTransform: 'capitalize', fontWeight: '500', fontSize: '16px', color: '#000000' }}>Official Mobile / whatsapp Number</Typography>
                    <StyledPhoneInput
                        international
                        placeholder="Enter phone number"
                        defaultCountry="IN"
                        value={value}
                        onChange={setValue}
                        sx={{
                            boxSizing: 'border-box', bgcolor: '#F3F3F3', border: '1px solid #C4C4C4', borderRadius: '8px', paddingX: '1rem',
                            '&:hover': { border: '1px solid black' }, '&:focus-within': { border: '2px solid #1976d2' }
                        }}
                    />
                </Stack>
                <Stack direction={{ xs: 'column', md: 'row' }} gap='8px'>
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
                <FormGroup display='flex' gap='16px' mt='8px'>
                    <FormControlLabel control={<Checkbox />} label="I agree to Receieve Expatly Offers and Services" />
                    <FormControlLabel control={<Checkbox />} label="I agree to Terms & Condition and Privacy Policies" />
                </FormGroup>
                <StyledSubmitButton variant="contained" sx={{ background: 'linear-gradient(94.18deg, #FE1D26 0%, #E8222A 107.81%)', fontSize: { xs: '13px', xl: '18px' }, py: '10px', mt: '8px' }}>
                    Submit
                </StyledSubmitButton>
            </Stack>
        </Stack>
    )
}

export default ApplicantFrontPageSubmitForm
