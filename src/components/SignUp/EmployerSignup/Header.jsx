import React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

const Header = () => {
    return (
        <Box sx={{ height: { xs: '2rem', xl: '50px' }, bgcolor: '#5463FF', boxShadow: '0px 4px 4px rgba(0,0,0,0.05)', display: 'flex', justifyContent: 'end', alignItems: 'center' }}>
            <Link href="#" sx={{ fontWeight: '500', fontSize: { xs: '15px', xl: '22px' }, color: 'white', mr: '5%' }}>Are you Job seeker? Login here</Link>
        </Box>
    )
}

export default Header
