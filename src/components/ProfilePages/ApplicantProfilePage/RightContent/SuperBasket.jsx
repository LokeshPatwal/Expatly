import React from 'react'
import { Box, Typography, Paper, Link } from '@mui/material'
import Image from '../../../Image'
import Superbasket from '../../../../assets/Superbasket.png'


const SuperBasket = () => {
    return (
        <Paper elevation={0} sx={{ py: '1rem', display: 'flex', alignItems: 'center', gap: '1rem', borderRadius: '10px', px: '1rem', py: '2rem' }}>
            <Image src={Superbasket} alt='Superbasket' width='50%' />
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', gap: '1rem', width: '50%' }}>
                <Typography sx={{ fontWeight: '500', fontSize: '16px', textAlign: 'center', color: '#200E32', textTransform: 'capitalize' }}>
                    Super Basket
                </Typography>
                <Box sx={{ textTransform: 'capitalize', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <Typography sx={{ bgcolor: '#C4C4C4', fontWeight: '500', fontSize: '12px', textAlign: 'center', px: '10px', py: '5px', borderRadius: '8px', width: 'fit-content' }}>Top Relevant Applicant</Typography>
                    <Typography sx={{ bgcolor: '#C4C4C4', fontWeight: '500', fontSize: '12px', textAlign: 'center', px: '10px', py: '5px', borderRadius: '8px', width: 'fit-content' }}>Only interested candidates</Typography>
                    <Typography sx={{ bgcolor: '#C4C4C4', fontWeight: '500', fontSize: '12px', textAlign: 'center', px: '10px', py: '5px', borderRadius: '8px', width: 'fit-content' }}>Post 10 Job Category</Typography>
                </Box>
                <Link sx={{ color: '#FD493E', fontWeight: '500', fontSize: '14px' }}>Buy Basket</Link>
            </Box>
        </Paper>
    )
}

export default SuperBasket
