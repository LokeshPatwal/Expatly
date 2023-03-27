import React from 'react'
import { Box, Typography, Divider, Paper, Stack, Link } from '@mui/material'
import ExperienceStepper from '../ExperienceStepper'
import VolvoLogo from '../../../assets/Volvo.png'
import TeslaLogo from '../../../assets/Tesla.png'

export const steps = [
    {
        image: VolvoLogo,
        label: 'UX Designer',
        companyname: 'Haptik Digital',
        city: 'Bangalore',
        timeperiod: 'Nov, 2015 - Present',
    },
    {
        label: 'Graphic Designer',
        timeperiod: 'Nov, 2020 - 2017',
    },
    {
        label: 'Graphic Designer',
        timeperiod: 'Nov, 2020 - 2017',
    },
];

export const steps2 = [
    {
        image: TeslaLogo,
        label: 'UX Designer',
        companyname: 'Haptik Digital',
        city: 'Bangalore',
        timeperiod: 'Nov, 2015 - Present',
    },
    {
        label: 'Graphic Designer',
        timeperiod: 'Nov, 2020 - 2017',
    },
    {
        label: 'Graphic Designer',
        timeperiod: 'Nov, 2020 - 2017',
    },
];

const ApplicantExperience = () => {
    return (
        <Paper elevation={0} sx={{overflow: 'hidden', display: 'flex', flexDirection: 'column', gap: '10px', borderRadius: '12px' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', py: '1rem', px: '2rem', bgcolor: '#FBFBFB', border: '1px solid #D6D6D6', borderRadius: '10px 10px 0px 0px' }}>
                <Typography sx={{ fontWeight: '600', fontSize: '16px' }}>Experience</Typography>
            </Box>
            <Stack direction='row' gap='20%' sx={{ py: '1rem', px: '2rem' }}>
                <Stack alignItems='start' gap='10px'>
                    <Typography sx={{ fontWeight: '500', fontSize: '16px' }}>9+ Years</Typography>
                    <Typography sx={{ fontWeight: '500', fontSize: '12px', color: '#808080' }}>
                        Total Experience</Typography>
                </Stack>
                <Stack alignItems='start' gap='10px'>
                    <Typography sx={{ fontWeight: '500', fontSize: '16px' }}>6 Years</Typography>
                    <Typography sx={{ fontWeight: '500', fontSize: '12px', color: '#808080' }}>Gulf, Saudi, Bahrain +3 more</Typography>
                </Stack>
                <Stack alignItems='start' gap='10px'>
                    <Typography sx={{ fontWeight: '500', fontSize: '16px' }}>3 Years</Typography>
                    <Typography sx={{ fontWeight: '500', fontSize: '12px', color: '#808080' }}>India</Typography>
                </Stack>
            </Stack>
            <Divider />
            <ExperienceStepper Data={steps} />
            <Divider sx={{ marginX: '2rem' }} />
            <ExperienceStepper Data={steps2} />
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', py: '1rem', px: '2rem', borderRadius: '0px 0px 10px 10px', border: '1px solid #D6D6D6' }}>
                <Link sx={{ fontWeight: '500', fontSize: '16px', color: '#FD493E' }}>See More</Link>
            </Box>
        </Paper>
    )
}

export default ApplicantExperience
