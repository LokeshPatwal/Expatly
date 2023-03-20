import React from 'react'
import Sentence from './Sentence'
import { Box, Button, Stack, styled } from '@mui/material';
import { Typography } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Workers from '../../assets/Workers.png';
import WhatsappImg from '../../assets/GulfJobImg1.png';
import JobConnection from '../../assets/GulfJobImg2.png';
import LanguageInteraction from '../../assets/GulfJobImg3.png';
import VerifiedJob from '../../assets/GulfJobImg4.png';
import Grid from '@mui/material/Unstable_Grid2';



const DropDownButton = styled(Button)`
  color: #798291;
  font-weight: 500;
  text-transform: capitalize;
  padding: 0px;
  &:hover {
    background: none;
  }
`
const StyledButton = styled(Button)`
  border-radius: 50px;
  text-transform: capitalize;
  font-weight: 600;
`

const JobGulf = () => {
    return (
        <Box sx={{ bgcolor: '#D4E3FF', px: { xs: '5%', md: '8%', xl: '160px' }, py: '2rem' }} >
            <Box display='flex' flexDirection='column' rowGap={{ xs: '3rem', lg: '4rem' }}>
                <Typography component='p' sx={{ fontSize: { xs: '28px', xl: '40px' }, fontWeight: '600', textAlign: 'center' }}>Technician and Labors
                    <Typography variant='span' sx={{ color: '#FD493E' }}>  Job In Gulf </Typography>
                </Typography>
                <Stack direction={{ xs: 'column', md: 'row' }} justifyContent='space-between' gap={2}>
                    <Box display={{ xs: 'none', sm: 'flex' }} justifyContent='space-between' border='0.5px solid #C4C4C4' boxShadow='0px -1px 20px -4px rgba(128, 128, 128, 0.4)' borderRadius='70px' bgcolor='white' width={{ xs: '100%', md: '74%', xl: '66%' }} height={{ xs: '45px', xl: '66px' }} order={{ xs: '2', md: '1' }}>
                        <Box sx={{ width: '15%', fontWeight: '600', fontSize: '16px', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', px: { xs: '1%', xl: '4%' }, borderRight: '0.5px solid #C4C4C4' }} >
                            <Sentence sx={{ fontSize: '16px', color: '#000000', fontWeight: '600' }}>Filter By</Sentence>
                        </Box>
                        <Stack direction='row' justifyContent='space-evenly' width='100%'>
                            <DropDownButton disableRipple disableElevation
                                sx={{ fontSize: { xs: '12px', md: '14px', xl: '16px' } }}
                                endIcon={<KeyboardArrowDownIcon sx={{ ml: { xs: '-8px', lg: 0 } }} />}
                            >
                                Country
                            </DropDownButton>
                            <DropDownButton disableRipple disableElevation
                                sx={{ fontSize: { xs: '12px', md: '14px', xl: '16px' } }}
                                endIcon={<KeyboardArrowDownIcon sx={{ ml: { xs: '-8px', lg: 0 } }} />}
                            >
                                location
                            </DropDownButton>
                            <DropDownButton disableRipple disableElevation
                                sx={{ fontSize: { xs: '12px', md: '14px', xl: '16px' } }}
                                endIcon={<KeyboardArrowDownIcon sx={{ ml: { xs: '-8px', lg: 0 } }} />}
                            >
                                job
                            </DropDownButton>
                            <DropDownButton disableRipple disableElevation
                                sx={{ fontSize: { xs: '12px', md: '14px', xl: '16px' } }}
                                endIcon={<KeyboardArrowDownIcon sx={{ ml: { xs: '-8px', lg: 0 } }} />}
                            >
                                company
                            </DropDownButton>
                            <DropDownButton disableRipple disableElevation
                                sx={{ fontSize: { xs: '12px', md: '14px', xl: '16px' } }}
                                endIcon={<KeyboardArrowDownIcon sx={{ ml: { xs: '-8px', lg: 0 } }} />}
                            >
                                recruiter
                            </DropDownButton>
                        </Stack>
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'linear-gradient(94.18deg, #FE1D26 0%, #E8222A 107.81%)', fontWeight: '600', fontSize: '16px', textAlign: 'center', color: 'white', borderRadius: '0px 50px 50px 0px', px: { xs: '2%', xl: '4%' } }}>
                            <Sentence>Reset</Sentence>
                        </Box>
                    </Box>
                    <Box display={{ xs: 'flex', sm: 'none' }} justifyContent='space-between' border='0.5px solid #C4C4C4' boxShadow='0px -1px 20px -4px rgba(128, 128, 128, 0.4)' borderRadius='70px' bgcolor='white' width={{ xs: '100%', md: '74%', xl: '66%' }}
                        height={{ xs: '45px', xl: '66px' }} order={{ xs: '2', md: '1' }}>
                    </Box>
                    <Paper component="form" sx={{
                        p: '2px 10px', display: 'flex', alignItems: 'center', width: { xs: '100%', md: '30%' }, borderRadius: '70px',
                        boxShadow: '0px -1px 20px -4px rgba(128, 128, 128, 0.4)', order: { xs: '1', md: '2' }, height: { xs: '45px', xl: '66px' }
                    }}>
                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="Job, Location, Co. "
                            inputProps={{ 'aria-label': 'search google maps' }}
                        />
                        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                            <SearchIcon />
                        </IconButton>
                    </Paper>
                </Stack>
                <Stack direction='row' spacing={{ xs: 0, md: '7rem' }} alignItems='center'>
                    <Box>
                        <Sentence sx={{ fontWeight: '600', fontSize: '24px' }}>#Trending</Sentence>
                        <Box display='flex' flexWrap='wrap' gap={{ xs: '10px', md: '1rem' }} mt='1rem' >
                            <StyledButton variant="outlined" sx={{ color: '#5463FF', fontSize: { xs: '12px', md: '13px', lg: '16px', xl: '18px' } }}>Canada</StyledButton>
                            <StyledButton variant="outlined" sx={{ color: '#5463FF', fontSize: { xs: '12px', md: '13px', lg: '16px', xl: '18px' } }}>Saudi Arabia jobs</StyledButton>
                            <StyledButton variant="outlined" sx={{ color: '#5463FF', fontSize: { xs: '12px', md: '13px', lg: '16px', xl: '18px' } }}>Interview </StyledButton>
                            <StyledButton variant="outlined" sx={{ color: '#5463FF', fontSize: { xs: '12px', md: '13px', lg: '16px', xl: '18px' } }}>Electrician</StyledButton>
                            <StyledButton variant="outlined" sx={{ color: '#5463FF', fontSize: { xs: '12px', md: '13px', lg: '16px', xl: '18px' } }}>Oil & Gas Industry</StyledButton>
                            <StyledButton variant="outlined" sx={{ color: '#5463FF', fontSize: { xs: '12px', md: '13px', lg: '16px', xl: '18px' } }}>Saudi Bin Laden Company</StyledButton>
                            <StyledButton variant="outlined" sx={{ color: '#5463FF', fontSize: { xs: '12px', md: '13px', lg: '16px', xl: '18px' } }}>Saudi Bin Laden Company</StyledButton>
                            <StyledButton variant="outlined" sx={{ color: '#5463FF', fontSize: { xs: '12px', md: '13px', lg: '16px', xl: '18px' } }}>National Exports Manpower Consultant</StyledButton>
                        </Box>
                    </Box>
                    <Box component='img' src={Workers} alt='Workers' sx={{ display: { xs: 'none', md: 'block' }, width: { sm: '20rem', md: '25rem', lg: '35rem' }, height: '15rem' }} />
                </Stack>
                <Grid container rowGap='1rem'>
                    <Grid xs={12} sm={6} lg={3}>
                        <Box sx={{ height: { xs: '150px', xl: '181px' }, width: { xs: '82%', xl: '331px' }, mx: 'auto', boxShadow: '0px 0px 10px 1px rgba(128, 128, 128, 0.3)', borderRadius: '12px', bgcolor: 'white', position: 'relative', display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
                            <Sentence sx={{ fontWeight: '500', fontSize: '18px', paddingX: { xs: '10%', xl: '20%' }, mx: 'auto', textAlign: 'center', color: 'black' }}>Gulf Opening Direct On Whatsapp</Sentence>
                            <Box component='img' src={WhatsappImg} alt='WhatsappImg' sx={{ position: 'absolute', left: -40, width: { xs: '5rem', xl: '92px' } }} />
                        </Box>
                    </Grid>
                    <Grid xs={12} sm={6} lg={3}>
                        <Box sx={{ height: { xs: '150px', xl: '181px' }, width: { xs: '82%', xl: '331px' }, mx: 'auto', boxShadow: '0px 0px 10px 1px rgba(128, 128, 128, 0.3)', borderRadius: '12px', bgcolor: 'white', position: 'relative', display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
                            <Sentence sx={{ fontWeight: '500', fontSize: '18px', paddingX: { xs: '10%', xl: '20%' }, mx: 'auto', textAlign: 'center', color: 'black' }}>Your Industry/Job Connection</Sentence>
                            <Box component='img' src={JobConnection} alt='JobConnection' sx={{ position: 'absolute', left: -40, width: { xs: '5rem', xl: '92px' } }} />
                        </Box>
                    </Grid>
                    <Grid xs={12} sm={6} lg={3}>
                        <Box sx={{ height: { xs: '150px', xl: '181px' }, width: { xs: '82%', xl: '331px' }, mx: 'auto', boxShadow: '0px 0px 10px 1px rgba(128, 128, 128, 0.3)', borderRadius: '12px', bgcolor: 'white', position: 'relative', display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
                            <Sentence sx={{ fontWeight: '500', fontSize: '18px', paddingX: { xs: '10%', xl: '20%' }, mx: 'auto', textAlign: 'center', color: 'black' }}>Your Language Interaction</Sentence>
                            <Box component='img' src={LanguageInteraction} alt='LanguageIntraction' sx={{ position: 'absolute', left: -40, width: { xs: '5rem', xl: '92px' } }} />
                        </Box>
                    </Grid>
                    <Grid xs={12} sm={6} lg={3}>
                        <Box sx={{ height: { xs: '150px', xl: '181px' }, width: { xs: '82%', xl: '331px' }, mx: 'auto', boxShadow: '0px 0px 10px 1px rgba(128, 128, 128, 0.3)', borderRadius: '12px', bgcolor: 'white', position: 'relative', display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
                            <Sentence sx={{ fontWeight: '500', fontSize: '18px', paddingX: { xs: '10%', xl: '20%' }, mx: 'auto', textAlign: 'center', color: 'black' }}>Verified Job and Company’s Acess
                            </Sentence>
                            <Box component='img' src={VerifiedJob} alt='VerifiedJobs' sx={{ position: 'absolute', left: -40, width: { xs: '5rem', xl: '92px' } }} />
                        </Box>
                    </Grid>
                </Grid>
            </Box >
        </Box >
    )
}

export default JobGulf
