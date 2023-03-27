import React from 'react'
import { Box, Typography, Paper, Stack } from '@mui/material'
import Image from '../../Image'
import { CardRewards } from '../../JSON_Data/CardRewards'
import { v4 as uuidv4 } from 'uuid';

const ApplicantRewards = () => {
    return (
        <Paper elevation={0} sx={{
            overflow: 'hidden', display: 'flex', flexDirection: 'column', gap: '10px', borderRadius: '12px'
        }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', py: '1rem', px: '2rem', bgcolor: '#FBFBFB', border: '1px solid #D6D6D6', borderRadius: '10px 10px 0px 0px' }}>
                <Typography sx={{ fontWeight: '600', fontSize: '16px' }}>Rewards</Typography>
            </Box>
            <Stack direction='row' gap='2rem' sx={{ px: '2rem', py: '1rem' }}>
                {
                    CardRewards.map((item) => (
                        <Stack key={uuidv4()} gap='5px' sx={{ width: '154px', height: '161px' }}>
                            <Box sx={{ width: 'fit-content', display: 'flex', flexDirection: 'column', gap: '0' }}>
                                <Image src={item.image} alt='hallImg' sx={{ width: '100%', objectFit: 'cover' }} />
                                <Box sx={{ bgcolor: '#D9D9D9', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Typography sx={{ fontWeight: '500', fontSize: '14px' }}>{item.title}</Typography>
                                </Box>
                            </Box>
                            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '5px' }}>
                                <Typography sx={{ textTransform: 'capitalize', fontWeight: '500', fontSize: '12px', textAlign: 'center', lineHeight: '16px' }}>{item.company}</Typography>
                                <Typography sx={{ fontWeight: '400', fontSize: '12px' }}>{item.years}</Typography>
                            </Box>
                        </Stack>
                    ))
                }
            </Stack>
        </Paper>
    )
}

export default ApplicantRewards
