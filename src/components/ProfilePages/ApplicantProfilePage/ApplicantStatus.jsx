import React, { useState } from 'react'
import { Box, Typography, Button, Paper, Stack, Link } from '@mui/material'
import { Icon } from '@iconify/react';

const ApplicantStatus = () => {
    const [active, setActive] = useState('MedicallyFit')

    return (
        <Paper elevation={0} sx={{overflow: 'hidden', display: 'flex', flexDirection: 'column', gap: '10px', borderRadius: '12px' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', py: '1rem', px: '2rem', bgcolor: '#FBFBFB', border: '1px solid #D6D6D6', borderRadius: '10px 10px 0px 0px' }}>
                <Typography sx={{ fontWeight: '600', fontSize: '16px' }}>Status</Typography>
                <Button sx={{ background: 'linear-gradient(94.18deg, #FE1D26 0%, #E8222A 107.81%)', borderRadius: '8px', color: 'white', textTransform: 'none' }}>Looking for Job</Button>
            </Box>
            <Stack direction='row' justifyContent='space-around' sx={{ py: '1rem' }}>
                <Stack color='#787885' justifyContent='center' alignItems='center' gap='1rem'>
                    <Typography>Preference</Typography>
                    <Box display='flex' gap='12px' alignItems='center'><Icon icon="la:plane-departure" /><Typography>Saudi Arabia</Typography></Box>
                </Stack>
                <Stack color='#787885' justifyContent='center' alignItems='center' gap='1rem'>
                    <Typography>Experience</Typography>
                    <Box display='flex' gap='12px' alignItems='center'><Icon icon="healthicons:medium-bars" /><Typography>5 Years</Typography></Box>
                </Stack>
                <Stack color='#787885' justifyContent='center' alignItems='center' gap='1rem'>
                    <Typography>Connection By</Typography>
                    <Box display='flex' gap='12px' alignItems='center'><Icon icon="icon-park-outline:circular-connection" /><Typography>Skill Provider Agent</Typography></Box>
                </Stack>
            </Stack>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', py: '1rem', px: '2rem', borderRadius: '0px 0px 10px 10px', border: '1px solid #D6D6D6' }}>
                <Link sx={{ fontWeight: '500', fontSize: '16px', color: '#FD493E' }}>Add to</Link>
                <Stack direction='row' ml='6rem' gap='2rem'>
                    <Button onClick={() => setActive('MedicalStatus')}
                        sx={{ borderRadius: '20px', px: '1rem', textTransform: 'capitalize', fontWeight: '500', fontSize: '12px', color: active === 'MedicalStatus' ? 'white' : 'black', background: active === 'MedicalStatus' ? 'linear-gradient(94.18deg, #FE1D26 0%, #E8222A 107.81%)' : '' }}>Medical Status</Button>
                    <Button onClick={() => setActive('MedicallyFit')}
                        sx={{
                            borderRadius: '20px', px: '1rem', textTransform: 'capitalize', fontWeight: '500', fontSize: '12px', color: active === 'MedicallyFit' ? 'white' : 'black',
                            background: active === 'MedicallyFit' ? 'linear-gradient(94.18deg, #FE1D26 0%, #E8222A 107.81%)' : ''
                        }}>Medically Fit</Button>
                    <Button onClick={() => setActive('SaudiArabia')}
                        sx={{ borderRadius: '20px', px: '1rem', textTransform: 'capitalize', fontWeight: '500', fontSize: '12px', color: active === 'SaudiArabia' ? 'white' : 'black', background: active === 'SaudiArabia' ? 'linear-gradient(94.18deg, #FE1D26 0%, #E8222A 107.81%)' : '' }}>Saudi Arabia</Button>
                </Stack>
            </Box>
        </Paper>
    )
}

export default ApplicantStatus
