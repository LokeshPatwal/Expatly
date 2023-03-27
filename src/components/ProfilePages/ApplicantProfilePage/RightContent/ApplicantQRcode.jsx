import React from 'react'
import { Box, Typography, Divider, Paper, Stack, Link, Button } from '@mui/material'
import Image from '../../../Image'
import QRcode from '../../../../assets/QRcodeApplicant.png'
import CheckIcon from '@mui/icons-material/Check';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Icon } from '@iconify/react';
import Profilephoto from '../../../../assets/ProfilePicture.png';

const ApplicantQRcode = () => {
    return (
        <Paper elevation={0} sx={{ display: 'flex', flexDirection: 'column', borderRadius: '12px', border: '1px solid #D6D6D6' }}>
            <Stack padding='1rem'>
                <Stack>
                    <Box sx={{ color: 'white', bgcolor: 'black', width: 'fit-content', py: '2px', px: '5px', borderRadius: '15px', fontWeight: '600', fontSize: '11px' }}>Qr-code/username.expatly.co</Box>
                    <Box sx={{ display: 'flex', justifyContent: 'end', alignItems: 'center', gap: '10%' }}>
                        <Typography sx={{ textTransform: 'capitalize', fontWeight: '400', fontSize: '21px' }}>Why Qr Code?</Typography>
                        <Link sx={{ fontWeight: '500', fontSize: '16px', color: '#FD493E' }}>Download</Link>
                    </Box>
                </Stack>
                <Stack direction='row' alignItems='center' justifyContent='space-between'>
                    <Stack direction='column' alignItems='center' width='fit-content' gap='1rem' position='relative'>
                        <Image src={QRcode} alt='QRcode' sx={{ width: '90%', height: 'auto' }} />
                        <Image src={Profilephoto} alt='Profile' sx={{ position: 'absolute', top: '35px', border: '5px solid #FD493E', borderRadius: '50%' }} />
                        <Button variant='outlined' startIcon={<Icon icon="fluent:share-28-regular" />}
                            endIcon={<ArrowDropDownIcon />} sx={{
                                color: '#FF1818', border: '1px solid #FF1818', borderRadius: '25px', fontWeight: '600', fontSize: '16px', textTransform: 'capitalize', '&:hover': { backgroundColor: 'initial', borderColor: 'initial' }
                            }}>
                            Share<Divider orientation="vertical" flexItem sx={{ bgcolor: '#FF1818', ml: '8px' }} />
                        </Button>
                    </Stack>
                    <Stack gap='10px'>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <CheckIcon sx={{ color: '#FD493E' }} /><Typography sx={{ fontWeight: '500', fontSize: '12px' }}>Share with Applicant build own Cv’s Bank</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <CheckIcon sx={{ color: '#FD493E' }} /><Typography sx={{ fontWeight: '500', fontSize: '12px' }}>Increase your Followers and Review/Rating</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <CheckIcon sx={{ color: '#FD493E' }} /><Typography sx={{ fontWeight: '500', fontSize: '12px' }}>Dominate your Industries and community</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <CheckIcon sx={{ color: '#FD493E' }} /><Typography sx={{ fontWeight: '500', fontSize: '12px' }}>Manage Project and get update on Whatsapp</Typography>
                        </Box>
                    </Stack>
                </Stack>
            </Stack>
            <Divider />
            <Stack direction='row' justifyContent='space-between' px='1rem' py='10px'>
                <Link sx={{ fontWeight: '500', fontSize: '11px', color: 'black' }}>See How many Have joined your Network</Link>
                <Link sx={{ fontWeight: '500', fontSize: '11px', color: 'black' }}>How it Works?</Link>
            </Stack>
        </Paper>
    )
}

export default ApplicantQRcode
