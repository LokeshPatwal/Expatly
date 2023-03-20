import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import { Box, Button, ButtonBase, styled } from '@mui/material';
import ExpatlyLogo from '../../assets/Logo.png'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Divider from '@mui/material/Divider';

const StyledButtonBase = styled(ButtonBase)`
  color: #798291;
  font-weight: 500;
  text-transform: capitalize;
`
const StyledButton = styled(Button)`
  border-radius: 50px;
  text-transform: capitalize;
  font-weight: 600;
`
const DropDownButton = styled(Button)`
  color: #798291;
  font-weight: 500;
  text-transform: capitalize;
  padding: 0px;
  &:hover {
    background: none;
  }
`
const Navbar = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Grid container alignItems="center" justifyContent="space-between" height='fit-content' rowGap={{ sm: '1rem' }} sx={{ px: { xs: '5%', md: '8%', xl: '160px' }, py: '1rem' }}>
                <Grid sm='fit-content' md={6} lg={2} xl={2.5} bgcolor='lightgreen'>
                    <Box component="img" src={ExpatlyLogo} alt='Expatly' sx={{ width: { xs: '8rem', md: '10rem', xl: '15rem' } }} />
                </Grid>
                <Grid container sm={12} md={12} lg={6} xl={6} columnGap='5%' order={{ sm: 3, lg: 2 }} bgcolor='lightpink'>
                    <StyledButtonBase disableRipple sx={{ fontSize: { xs: '12px', md: '13px', xl: '18px' } }}>Jobs and Skill</StyledButtonBase>
                    <StyledButtonBase disableRipple sx={{ fontSize: { xs: '12px', md: '13px', xl: '18px' } }}>Community</StyledButtonBase>
                    <StyledButtonBase disableRipple sx={{ fontSize: { xs: '12px', md: '13px', xl: '18px' } }}>Project Managment</StyledButtonBase>
                    <StyledButtonBase disableRipple sx={{ fontSize: { xs: '12px', md: '13px', xl: '18px' } }}>Hire Talent</StyledButtonBase>
                </Grid>
                <Grid container sm='fit-content' md={6} lg={4} xl={3} display='flex' alignItems='center' columnGap={2}
                    order={{ sm: 2, lg: 3 }} bgcolor='lightblue'>
                    <StyledButton variant="outlined" sx={{ color: '#5463FF', fontSize: { xs: '10px', md: '13px', xl: '18px' } }}>
                        Login
                    </StyledButton>
                    <StyledButton variant="contained" sx={{ background: 'linear-gradient(94.18deg, #FE1D26 0%, #E8222A 107.81%)', fontSize: { xs: '10px', md: '13px', xl: '18px' } }}>
                        Register
                    </StyledButton>
                    <Divider orientation="vertical" variant="middle" flexItem sx={{ color: 'black', display: { xs: 'none', sm: 'block' } }} />
                    <DropDownButton disableRipple disableElevation
                        sx={{ fontSize: { xs: '12px', md: '13px', xl: '18px' }, float: 'right', textAlign: 'right' }}
                        endIcon={<KeyboardArrowDownIcon sx={{ ml: { xs: '-8px', md: 0 }, fontSize: '5px' }} />}
                        aria-controls='basic-menu'
                        aria-haspopup='true'
                        aria-expanded='false'
                        onClick={() => { }}
                    >
                        for employers
                    </DropDownButton>
                </Grid>
            </Grid>
            <Grid sx={{ bgcolor: '#5463FF', display: 'flex', justifyContent: 'center', gap: '5%', height: { xs: '2rem', xl: '49px' } }}>
                <DropDownButton
                    disableRipple
                    disableElevation
                    sx={{ fontSize: { xs: '12px', md: '16px', xl: '18px', color: 'white' } }}
                    endIcon={<KeyboardArrowDownIcon sx={{ ml: { xs: '-8px', sm: 0 } }} />}
                >
                    Feature
                </DropDownButton>
                <DropDownButton
                    disableRipple
                    disableElevation
                    sx={{ fontSize: { xs: '12px', md: '16px', xl: '18px', color: 'white' } }}
                    endIcon={<KeyboardArrowDownIcon sx={{ ml: { xs: '-8px', sm: 0 } }} />}
                >
                    Resources
                </DropDownButton>
                <DropDownButton
                    disableRipple
                    disableElevation
                    sx={{ fontSize: { xs: '12px', md: '16px', xl: '18px', color: 'white' } }}
                    endIcon={<KeyboardArrowDownIcon sx={{ ml: { xs: '-8px', sm: 0 } }} />}
                >
                    Prize and Solution
                </DropDownButton>
            </Grid>
        </Box >
    )
}

export default Navbar
