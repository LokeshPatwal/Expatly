import React from 'react'
import ScanImg from '../../assets/ScanImg.png'
import HomeMainImg from '../../assets/HomeImg.png'
import { Box, Container } from '@mui/material'

const Scan = () => {
    return (
        <Box sx={{ background: 'linear-gradient(180deg, #AAC7FF 0%, rgba(170, 199, 255, 0) 115.04%)', height: 'fit-content', py: { xs: '5rem', xl: '140px' }, px: { xs: '5%', md: '8%', xl: '150px' }, position: 'relative' }}>
            <Box display="flex" justifyContent={{ xs: 'center', md: 'space-between' }}>
                <Box component="img" src={ScanImg} alt='Scan' sx={{ width: { xs: '16rem', sm: '36%', xl: '510px' }, display: 'flex', justifyContent: { xs: 'center', md: 'start' } }} />
                <Box component="img" src={HomeMainImg} alt='HomeImg' sx={{ width: { md: '60%', xl: '1150px' }, position: 'absolute', right: 0, top: -10, display: { xs: 'none', md: 'block' } }} />
            </Box>
        </Box>
    )
}

export default Scan
