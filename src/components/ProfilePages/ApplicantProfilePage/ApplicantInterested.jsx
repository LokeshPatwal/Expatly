import React, { useState } from 'react'
import { Box, Typography, Stack, Button, Paper, Divider, Link } from '@mui/material'
import Image from '../../Image'
import { CardRewards } from '../../JSON_Data/CardRewards'
import { v4 as uuidv4 } from 'uuid';

const ApplicantInterested = () => {
    const [active, setActive] = useState('Country')

    return (
        <Paper elevation={0} sx={{ overflow: 'hidden', display: 'flex', flexDirection: 'column', gap: '10px', borderRadius: '12px' }}
        >
            <Box sx={{ display: 'flex', alignItems: 'center', py: '1rem', px: '2rem', bgcolor: '#FBFBFB', border: '1px solid #D6D6D6', borderRadius: '10px 10px 0px 0px' }}>
                <Typography sx={{ fontWeight: '600', fontSize: '16px' }}>Interested</Typography>
                <Stack direction='row' ml='3rem' gap='12px'>
                    <Button onClick={() => setActive('Country')}
                        sx={{
                            width: 'fit-content', borderRadius: '20px', px: '1rem', textTransform: 'capitalize', fontWeight: '500', fontSize: '12px', color: active === 'Country' ? 'white' : 'black', background: active === 'Country' ? 'linear-gradient(94.18deg, #FE1D26 0%, #E8222A 107.81%)' : ''
                        }}>Country</Button>
                    <Button onClick={() => setActive('Community')}
                        sx={{
                            width: 'fit-content', borderRadius: '20px', px: '1rem', textTransform: 'capitalize', fontWeight: '500', fontSize: '12px', color: active === 'Community' ? 'white' : 'black',
                            background: active === 'Community' ? 'linear-gradient(94.18deg, #FE1D26 0%, #E8222A 107.81%)' : ''
                        }}>Community</Button>
                    <Button onClick={() => setActive('Industries')}
                        sx={{
                            width: 'fit-content', borderRadius: '20px', px: '1rem', textTransform: 'capitalize', fontWeight: '500', fontSize: '12px', color: active === 'Industries' ? 'white' : 'black', background: active === 'Industries' ? 'linear-gradient(94.18deg, #FE1D26 0%, #E8222A 107.81%)' : ''
                        }}>Industries</Button>
                    <Button onClick={() => setActive('Companies')}
                        sx={{
                            width: 'fit-content', borderRadius: '20px', px: '1rem', textTransform: 'capitalize', fontWeight: '500', fontSize: '12px', color: active === 'Companies' ? 'white' : 'black', background: active === 'Companies' ? 'linear-gradient(94.18deg, #FE1D26 0%, #E8222A 107.81%)' : ''
                        }}>Companies</Button>
                    <Button onClick={() => setActive('Keywords')}
                        sx={{
                            width: 'fit-content', borderRadius: '20px', px: '1rem', textTransform: 'capitalize', fontWeight: '500', fontSize: '12px', color: active === 'Keywords' ? 'white' : 'black', background: active === 'Keywords' ? 'linear-gradient(94.18deg, #FE1D26 0%, #E8222A 107.81%)' : ''
                        }}>Keywords</Button>
                    <Button onClick={() => setActive('People')}
                        sx={{
                            width: 'fit-content', borderRadius: '20px', px: '1rem', textTransform: 'capitalize', fontWeight: '500', fontSize: '12px', color: active === 'People' ? 'white' : 'black', background: active === 'People' ? 'linear-gradient(94.18deg, #FE1D26 0%, #E8222A 107.81%)' : ''
                        }}>People</Button>
                    <Button onClick={() => setActive('Skill')}
                        sx={{
                            width: 'fit-content', borderRadius: '20px', px: '1rem', textTransform: 'capitalize', fontWeight: '500', fontSize: '12px', color: active === 'Skill' ? 'white' : 'black', background: active === 'Skill' ? 'linear-gradient(94.18deg, #FE1D26 0%, #E8222A 107.81%)' : ''
                        }}>Skill</Button>
                </Stack>
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

export default ApplicantInterested
