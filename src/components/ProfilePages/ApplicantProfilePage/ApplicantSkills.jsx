import React, { useState } from 'react'
import { Box, Typography, Button, Paper, Stack, Link } from '@mui/material'

const ApplicantSkills = () => {
    const [active, setActive] = useState('PersonalInfo')

    return (
        <Paper elevation={0} sx={{ overflow: 'hidden',display: 'flex', flexDirection: 'column', gap: '10px', borderRadius: '12px' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', py: '1rem', px: '2rem', bgcolor: '#FBFBFB', borderRadius: '10px 10px 0px 0px', border: '1px solid #D6D6D6' }}>
                <Typography sx={{ fontWeight: '600', fontSize: '16px' }}>Skills</Typography>
                <Stack direction='row' ml='6rem' gap='2rem'>
                    <Button onClick={() => setActive('PersonalInfo')}
                        sx={{ borderRadius: '20px', px: '1rem', textTransform: 'capitalize', fontWeight: '400', fontSize: '12px', color: 'black', background: active === 'PersonalInfo' ? 'white' : '' }}>Expertise</Button>
                    <Button onClick={() => setActive('CVs')}
                        sx={{
                            borderRadius: '20px', px: '1rem', textTransform: 'capitalize', fontWeight: '400', fontSize: '12px', color: 'black', background: active === 'CVs' ? 'white' : ''
                        }}>Taught</Button>
                    <Button onClick={() => setActive('SkillVideo')}
                        sx={{ borderRadius: '20px', px: '1rem', textTransform: 'capitalize', fontWeight: '400', fontSize: '12px', color: 'black', ckground: active === 'SkillVideo' ? 'white' : '' }}>Counselled</Button>
                </Stack>
            </Box>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '20px', px: '2rem', py: '1rem' }}>
                <Button sx={{ height: 'fit-content', width: 'fit-content', textTransform: 'capitalize', border: '1px solid #FD493E', borderRadius: '10px', color: '#200E32', fontWeight: '500', fontSize: '16px', px: '1rem' }}>Pasting</Button>
                <Button sx={{ height: 'fit-content', width: 'fit-content', textTransform: 'capitalize', border: '1px solid #FD493E', borderRadius: '10px', color: '#200E32', fontWeight: '500', fontSize: '16px', px: '1rem' }}>Cutting Plywood</Button>
                <Button sx={{ height: 'fit-content', width: 'fit-content', textTransform: 'capitalize', border: '1px solid #FD493E', borderRadius: '10px', color: '#200E32', fontWeight: '500', fontSize: '16px', px: '1rem' }}>Finishing</Button>
                <Button sx={{ height: 'fit-content', width: 'fit-content', textTransform: 'capitalize', border: '1px solid #FD493E', borderRadius: '10px', color: '#200E32', fontWeight: '500', fontSize: '16px', px: '1rem' }}>Carving</Button>
                <Button sx={{ height: 'fit-content', width: 'fit-content', textTransform: 'capitalize', border: '1px solid #FD493E', borderRadius: '10px', color: '#200E32', fontWeight: '500', fontSize: '16px', px: '1rem' }}>Labor Handling</Button>
                <Button sx={{ height: 'fit-content', width: 'fit-content', textTransform: 'capitalize', border: '1px solid #FD493E', borderRadius: '10px', color: '#200E32', fontWeight: '500', fontSize: '16px', px: '1rem' }}>Aligning</Button>
                <Button sx={{ height: 'fit-content', width: 'fit-content', textTransform: 'capitalize', border: '1px solid #FD493E', borderRadius: '10px', color: '#200E32', fontWeight: '500', fontSize: '16px', px: '1rem' }}>Tools Management</Button>
                <Button sx={{ height: 'fit-content', width: 'fit-content', textTransform: 'capitalize', border: '1px solid #FD493E', borderRadius: '10px', color: '#200E32', fontWeight: '500', fontSize: '16px', px: '1rem' }}>Cutting Plywood</Button>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', py: '1rem', px: '2rem', borderRadius: '0px 0px 10px 10px', border: '1px solid #D6D6D6' }}>
                <Link sx={{ fontWeight: '400', fontSize: '16px', color: '#FD493E' }}>Endorse Skill</Link>
            </Box>
        </Paper>
    )
}

export default ApplicantSkills
