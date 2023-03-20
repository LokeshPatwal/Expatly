import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import SearchJob from '../../assets/SearchJob.png';
import ReferContacts from '../../assets/ReferContacts.png';
import EarnCash from '../../assets/EarnCash.png';

const EarnExtra = () => {
    return (
        <Stack direction='column' rowGap={4}>
            <Box textAlign='center' gap={2}>
                <Typography variant='h4' sx={{ color: '#FD493E', fontWeight: '600', fontSize: { xs: '28px', xl: '40px' } }}>
                    Earn Extra Salary
                </Typography>
                <Typography component='p' sx={{ textTransform: 'capitalize', color: '#200E32', fontWeight: '600', fontSize: { xs: '15px', xl: '22px' } }}>
                    Refer Jobs Earn Cash in three Step!
                </Typography>
            </Box>
            <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent='space-between' rowGap={4}>
                <Stack direction='column' alignItems='center' justifyContent='center' gap={3} mx='auto' >
                    <Box component='img' src={SearchJob} alt='SearchJob' sx={{ width: '80%' }} />
                    <Typography component='p' sx={{ textTransform: 'capitalize', color: '#787885', fontWeight: '600', fontSize: { xs: '15px', xl: '22px' } }}>
                        search job
                    </Typography>
                </Stack>
                <Stack direction='column' alignItems='center' justifyContent='center' gap={3} mx='auto' >
                    <Box component='img' src={ReferContacts} alt='ReferContacts' sx={{ width: '80%' }} />
                        <Typography component='p' sx={{ textTransform: 'capitalize', color: '#787885', fontWeight: '600', fontSize: { xs: '15px', xl: '22px' } }}>
                            refer in contacts
                        </Typography>
                </Stack>
                <Stack direction='column' alignItems='center' justifyContent='center' gap={3} mx='auto' >
                    <Box component='img' src={EarnCash} alt='EarnCash' sx={{ width: '80%' }} />
                    <Typography component='p' sx={{ textTransform: 'capitalize', color: '#787885', fontWeight: '600', fontSize: { xs: '15px', xl: '22px' } }}>
                        earn cash
                    </Typography>
                </Stack>
            </Stack>
        </Stack >
    )
}

export default EarnExtra
