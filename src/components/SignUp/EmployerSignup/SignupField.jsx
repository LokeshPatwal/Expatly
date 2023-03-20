import React, { useState } from 'react'
import LinkedinLogo from '../../../assets/LinkedinLarge.png';
import GoogleLogo from '../../../assets/Google.png';
import FacebookLogo from '../../../assets/Facebook.png';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Box, Button, styled, Stack, ButtonBase, Link } from '@mui/material';
import Modal from '@mui/material/Modal';
import OTPImg from '../../../assets/OTPImg.png'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
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

const SignupField = () => {
    const [tab, setTab] = useState('')

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleOtp = (e) => { }

    const [input, setInput] = useState({
        name: '',
        email: '',
        number: '',
        companyType: '',
    })
    const [isChecked, setIsChecked] = useState({
        agreeToOffers: false,
        agreeToTerms: false,
    })

    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [numberError, setNumberError] = useState('');
    const [companyError, setCompanyError] = useState('');
    const [checkboxError, setCheckboxError] = useState('');

    const [isSubmitted, setIsSubmitted] = useState(false);


    //...........................................//
    const handleTab1 = () => {
        setTab('Tab1')
        setInput({
            ...input,
            companyType: 'Registered Agency / Recruiter',
        })
    }
    const handleTab2 = () => {
        setTab('Tab2')
        setInput({
            ...input,
            companyType: 'Gulf Base Company',
        })
    }
    const handleTab3 = () => {
        setTab('Tab3')
        setInput({
            ...input,
            companyType: 'Skill Provider Agent',
        })
    }
    //.....................................................
    const handleInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setInput((prevInput) => ({
            ...prevInput,
            [name]: value,
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // ......................................validation_for_inputfields.......................................
        // Validate Name
        if (!input.name.trim()) {
            setNameError('Name is required')
        }
        else if (input.name) {
            setNameError('')
        }

        // Validate Email
        if (!input.email) {
            setEmailError('Email is required')
        } else if (!/\S+@\S+\.\S+/.test(input.email)) {
            setEmailError('Email is invalid')
        }
        else {
            setEmailError('')
        }

        //Validate PhoneNumber
        if (!input.number) {
            setNumberError('Number is required');
        } else if (!/^\+(?:[0-9] ?){6,14}[0-9]$/.test(input.number)) {
            setNumberError('Number is invalid');
        }
        else {
            setNumberError('')
        }

        // Validate CompanyType
        if (!input.companyType) {
            setCompanyError('Selection is required')
        }
        else {
            setCompanyError('')
        }

        //Validate Checkboxes
        setIsSubmitted(true)

        console.table(input.name);
    };
    const showOffersError = isSubmitted && !isChecked.agreeToOffers;
    const showTermsError = isSubmitted && !isChecked.agreeToTerms;

    return (
        <Stack sx={{ width: { xs: '95%', lg: '350px', xl: '448px' }, height: 'fit-content', display: 'flex', justifyContent: 'center', alignItems: 'center', my: '2rem', mx: 'auto' }}>
            <form onSubmit={handleSubmit}>
                <Stack direction='row' justifyContent='center' gap='1rem' mb='16px' >
                    <Box component='img' src={FacebookLogo} alt='Facebook' sx={{ width: { xs: '3rem', xl: '75px' } }} />
                    <Box component='img' src={GoogleLogo} alt='Google' sx={{ width: { xs: '3rem', xl: '75px' } }} />
                    <Box component='img' src={LinkedinLogo} alt='Linkedin' sx={{ width: { xs: '3rem', xl: '75px' } }} />
                </Stack>
                <Typography textAlign='center'>Or</Typography>
                <Stack direction='column' rowGap='16px' justifyContent='center'>
                    <Box display='flex' alignItems='center' justifyContent='space-between' >
                        <Typography sx={{ fontWeight: '700', fontSize: { xs: '22px', xl: '32px' }, color: '#787885' }}>Sign up</Typography>
                        <Typography component='p' sx={{ fontWeight: '500', fontSize: { xs: '13px', xl: '16px' }, color: 'black' }}>Already Registered? <Link variant='span' sx={{ fontWeight: '500', cursor: 'pointer', fontSize: { xs: '15px', xl: '20px' }, color: '#5463FF' }}> Sign In</Link> </Typography>
                    </Box>
                    <Stack direction='column' gap='8px'>
                        <Typography sx={{ textTransform: 'capitalize', fontWeight: '500', fontSize: '16px', color: '#000000' }}>company name</Typography>
                        <TextField fullWidth autoComplete='off' placeholder='Name' variant="outlined" name='name' value={input.name}
                            onChange={handleInputChange} sx={{ bgcolor: '#F3F3F3' }} />
                        {nameError && <Typography variant='body2' color='error'>{nameError}</Typography>}
                    </Stack>
                    <Stack direction='column' gap='8px'>
                        <Typography sx={{ textTransform: 'capitalize', fontWeight: '500', fontSize: '16px', color: '#000000' }}>official email id</Typography>
                        <TextField fullWidth autoComplete='off' placeholder='Email' variant="outlined" name='email' value={input.email}
                            onChange={handleInputChange} sx={{ bgcolor: '#F3F3F3' }} />
                        {emailError && <Typography variant='body2' color='error'>{emailError}</Typography>}
                    </Stack>
                    <Stack direction='column' gap='8px'>
                        <Typography sx={{ textTransform: 'capitalize', fontWeight: '500', fontSize: '16px', color: '#000000' }}>Official Mobile / whatsapp Number</Typography>
                        <StyledPhoneInput international name='number' value={input.number}
                            onChange={(value) => handleInputChange({ target: { name: 'number', value } })}
                            placeholder="Enter phone number"
                            defaultCountry="IN"
                            autoFocus={false}
                            sx={{
                                boxSizing: 'border-box', bgcolor: '#F3F3F3', border: '1px solid #C4C4C4', borderRadius: '8px', paddingX: '1rem',
                                '&:hover': { border: '1px solid black' }, '&:focus-within': { border: '2px solid #1976d2' }
                            }}
                        />
                        {numberError && <Typography variant='body2' color='error'>{numberError}</Typography>}
                    </Stack>
                    <Stack direction='column' gap='8px'>
                        <Typography sx={{ textTransform: 'capitalize' }}>Company/Agency Type</Typography>
                        <Stack direction='row' justifyContent='space-between'>
                            <Button onClick={handleTab1} variant="outlined" sx={{
                                borderRadius: '8px', width: '31%', lineHeight: '17px', fontWeight: '500', fontSize: '14px', color: '#787885', textTransform: 'capitalize',
                                border: `${tab === 'Tab1' ? '1px solid #FD493E' : '1px solid #C4C4C4'}`,
                                background: `${tab === 'Tab1' ? 'rgba(253, 73, 62, 0.07)' : ''}`,
                                "&:hover": { border: '1px solid #FD493E', background: 'rgba(253, 73, 62, 0.07)' }
                            }}>Registered Agency / Recruiter</Button>
                            <Button onClick={handleTab2} variant="outlined" sx={{
                                borderRadius: '8px', width: '31%', lineHeight: '17px', fontWeight: '500', fontSize: '14px', color: '#787885', textTransform: 'capitalize',
                                border: `${tab === 'Tab2' ? '1px solid #FD493E' : '1px solid #C4C4C4'}`,
                                background: `${tab === 'Tab2' ? 'rgba(253, 73, 62, 0.07)' : ''}`,
                                "&:hover": { border: '1px solid #FD493E', background: 'rgba(253, 73, 62, 0.07)' }
                            }}>Gulf Base Company</Button>
                            <Button onClick={handleTab3} variant="outlined" sx={{
                                borderRadius: '8px', width: '31%', lineHeight: '17px', fontWeight: '500', fontSize: '14px', color: '#787885', textTransform: 'capitalize',
                                border: `${tab === 'Tab3' ? '1px solid #FD493E' : '1px solid #C4C4C4'}`,
                                background: `${tab === 'Tab3' ? 'rgba(253, 73, 62, 0.07)' : ''}`,
                                "&:hover": { border: '1px solid #FD493E', background: 'rgba(253, 73, 62, 0.07)' }
                            }}>Skill Provider Agent</Button>
                        </Stack>
                        {companyError && <Typography variant='body2' color='error'>{companyError}</Typography>}
                    </Stack>
                    <Stack direction='column' justifyContent='center' alignItems='center'>
                        <FormGroup display='flex' gap='16px' mt='8px' sx={{ justifyContent: 'center', width: 'fit-content' }}>
                            <FormControlLabel
                                control={<Checkbox checked={isChecked.agreeToOffers} onChange={(e) =>
                                    setIsChecked({ ...isChecked, agreeToOffers: e.target.checked })} name='agreeToOffers' />}
                                label="I agree to Receieve Expatly Offers and Services"
                                sx={{ textTransform: 'capitalize', '& .MuiTypography-root': { fontWeight: '500', fontSize: '14px' } }}
                            />
                            <FormControlLabel
                                control={<Checkbox checked={isChecked.agreeToTerms} onChange={(e) =>
                                    setIsChecked({ ...isChecked, agreeToTerms: e.target.checked })} name='agreeToTerms' />}
                                label="I agree to Terms & Condition and Privacy Policies"
                                sx={{ textTransform: 'capitalize', '& .MuiTypography-root': { fontWeight: '500', fontSize: '14px' } }}
                            />
                        </FormGroup>
                    </Stack>
                    {showOffersError && <Typography variant='body2' color='error'>Please agree to receive Expatly offers and services</Typography>}
                    {showTermsError && <Typography variant='body2' color='error'>Please agree to the terms & conditions and privacy policies</Typography>}
                    <StyledSubmitButton type='submit' variant="contained" onClick={handleSubmit} disabled={!isChecked}
                        sx={{ background: 'linear-gradient(94.18deg, #FE1D26 0%, #E8222A 107.81%)', height: { xs: '40px', xl: '50px' }, fontWeight: '600', fontSize: { xs: '13px', lg: '20px' }, py: '10px', mt: '8px' }}
                    >
                        Submit
                    </StyledSubmitButton>
                </Stack>
            </form>
            <Modal open={open} onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Box component='img' src={OTPImg} alt='OTP' sx={{ width: '6rem', mb: '1rem' }} />
                    <Stack direction='column' justifyContent='center' rowGap={2}>
                        <Typography sx={{ textAlign: 'left', width: '100%' }}>Enter OTP</Typography>
                        <Box display='flex' justifyContent='space-between'>
                            <TextField autoFocus onChange={() => handleOtp} inputProps={{ maxLength: 1 }}
                                sx={{ width: '70px', background: '#F3F3F3', borderRadius: '12px' }} />
                            <TextField onChange={() => handleOtp} inputProps={{ maxLength: 1 }}
                                sx={{ width: '70px', background: '#F3F3F3', borderRadius: '12px' }} />
                            <TextField onChange={() => handleOtp} inputProps={{ maxLength: 1 }}
                                sx={{ width: '70px', background: '#F3F3F3', borderRadius: '12px' }} />
                            <TextField onChange={() => handleOtp} inputProps={{ maxLength: 1 }}
                                sx={{ width: '70px', background: '#F3F3F3', borderRadius: '12px' }} />
                        </Box>
                        <Typography sx={{ textAlign: 'center' }}>We have sent an OTP on No “37198371932” If haven’t Receive Click on Resend</Typography>
                        <ButtonBase centerRipple sx={{ textDecoration: 'underline', color: '#FD493E', width: 'fit-content', mx: 'auto' }}>
                            Resend OTP
                        </ButtonBase>
                    </Stack>
                    <Stack display='flex' rowGap='1rem'>
                        <StyledButton endIcon={<ArrowForwardIosIcon />} variant="contained" sx={{ background: 'linear-gradient(94.18deg, #FE1D26 0%, #E8222A 107.81%)', fontSize: { xs: '10px', md: '13px', xl: '18px' } }}>
                            Verify
                        </StyledButton>
                        <Typography>Not your No? Change Number</Typography>
                    </Stack>
                </Box>
            </Modal>
        </Stack>

    )
}

export default SignupField

