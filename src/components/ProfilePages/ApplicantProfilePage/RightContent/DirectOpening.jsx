import React from 'react'
import { Box, Typography, Paper } from '@mui/material'
import Image from '../../../Image'
import newsletter from '../../../../assets/newsletter.png'


const DirectOpening = () => {
    return (
        <Paper elevation={0} sx={{ py: '1rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', borderRadius: '10px' }}>
            <Typography sx={{ fontWeight: '500', fontSize: '16px', textAlign: 'center' }}>Direct Opening
            </Typography>
            <Image src={newsletter} alt='newsletter' />
            <Typography sx={{ fontWeight: '500', fontSize: '12px', color: '#808080', textAlign: 'center' }}>Get direct acess of client posted job Apply direct to companies without any middle men save 60% of your service charge at just rupees 500</Typography>
        </Paper>
    )
}

export default DirectOpening
