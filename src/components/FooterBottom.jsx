import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const FooterBottom = () => {
    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', columnGap: '5%', color: '#000000', py: '2%', width: '100%', bgcolor: 'rgba(246, 246, 255, 0.9)' }}>
            <Typography sx={{ fontWeight: '500', fontSize: '16px' }}>About us</Typography>
            <Typography sx={{ fontWeight: '500', fontSize: '16px' }}>Users Agreement license</Typography>
            <Typography sx={{ fontWeight: '500', fontSize: '16px' }}>Privacy policies</Typography>
            <Typography sx={{ fontWeight: '500', fontSize: '16px' }}>FAQ</Typography>
            <Typography sx={{ fontWeight: '500', fontSize: '16px' }}>Site Map</Typography>
            <Typography sx={{ fontWeight: '500', fontSize: '16px' }}>Support</Typography>
            <Typography sx={{ fontWeight: '500', fontSize: '16px' }}>Fraud alert</Typography>
        </Box>
    )
}

export default FooterBottom
