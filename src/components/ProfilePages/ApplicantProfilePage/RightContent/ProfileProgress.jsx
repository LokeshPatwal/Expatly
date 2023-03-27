import React from 'react'
import { Box, Typography, Divider, Paper, Stack, Link } from '@mui/material'
import Image from '../../../Image'
import profileprogressimg from '../../../../assets/profileprogress.png'

const ProfileProgress = () => {
    return (
        <Paper elevation={0} sx={{ py: '1rem', display: 'flex', alignItems: 'center', gap: '20px', borderRadius: '10px', py: '3rem', px: '1rem' }}>
            <Image src={profileprogressimg} alt='profileprogress' />
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                <Typography sx={{ fontWeight: '500', fontSize: '16px', textAlign: 'center', color: '#200E32', textTransform: 'capitalize' }}>
                    Your Profile is completed 45%
                </Typography>
                <Typography sx={{ fontWeight: '500', fontSize: '12px', color: '#808080', textAlign: 'center' }}>Did You Know? 80 % of Applicant Recieve Good Offer  By Updating Complete Profile</Typography>
                <Link sx={{ color: '#FD493E', fontWeight: '500', fontSize: '14px' }}>View Job Descriptions</Link>
            </Box>
        </Paper>
    )
}

export default ProfileProgress
