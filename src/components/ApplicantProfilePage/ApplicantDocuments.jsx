import React from 'react'
import { Box, Typography, Button, Paper, Stack, Link } from '@mui/material'

const ApplicantDocuments = () => {
    return (
        <Paper elevation={0} sx={{ width: '1088px', display: 'flex', flexDirection: 'column', gap: '10px', borderRadius: '12px' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', py: '1rem', px: '2rem', bgcolor: '#FBFBFB', border: '1px solid #D6D6D6', borderRadius: '10px 10px 0px 0px' }}>
                <Typography sx={{ fontWeight: '600', fontSize: '16px' }}>Documents</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', py: '1rem', px: '2rem', borderRadius: '0px 0px 10px 10px', border: '1px solid #D6D6D6' }}>
                <Link sx={{ fontWeight: '500', fontSize: '16px', color: '#FD493E' }}>See Documents</Link>
            </Box>
        </Paper>
    )
}

export default ApplicantDocuments
