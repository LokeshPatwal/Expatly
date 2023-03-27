import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box, Rating, Divider, Link } from '@mui/material';
import { Icon } from '@iconify/react';
import Image from '../../Image';

const ReviewCard = ({ Data }) => {
    return (
        <Box display='flex' padding='2rem' gap='1rem'>
            {
                Data.map((item, index) => (
                    <Card key={index} elevation={4} sx={{ height: '187px', width: '377px', position: 'relative', overflow: 'hidden', borderRadius: '10px' }}>
                        <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            <Box display='flex' gap='10px'>
                                <Box><Image src={item.profilePhoto} alt='image' sx={{ width: '34px', height: '34px' }} /></Box>
                                <Box>
                                    <Typography sx={{ fontWeight: '500', fontSize: '16px', color: '#200E32' }}>{item.userName}</Typography>
                                    <Typography component='p' sx={{ color: '#787885', fontWeight: '400', fontSize: '14px' }}>
                                        {item.designation}
                                        <Typography component='span' sx={{ fontWeight: '400', fontSize: '14px' }}> @ {item.agencyName}</Typography>
                                    </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <Rating name="Rating" defaultValue={2.5} precision={0.5} size="small" />
                                    <Typography sx={{ color: '#787885', fontWeight: '400', fontSize: '12px' }}>4.1 Rating</Typography>
                                </Box>
                            </Box>
                            <Divider sx={{ position: 'relative', top: -8, left: 0 }} />
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Typography sx={{ fontWeight: '400', fontSize: '12px', color: '#787885', textTransform: 'capitalize' }}>{item.about}</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Box sx={{ display: 'flex', gap: '30%' }}>
                                    <Link sx={{ fontWeight: '500', fontSize: '14px', color: '#FD493E' }}>Reply</Link>
                                    <Link sx={{ fontWeight: '500', fontSize: '14px', color: '#FD493E' }}>Message</Link>
                                </Box>
                                <Icon icon="fluent:more-circle-20-regular" width='25' height='25' />
                            </Box>
                        </CardContent>
                    </Card>
                ))
            }
        </Box>
    )
}

export default ReviewCard
