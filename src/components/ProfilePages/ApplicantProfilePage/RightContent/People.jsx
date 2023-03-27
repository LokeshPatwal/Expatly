import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { Box, Typography, Stack, TextField, Button, Link, Divider } from '@mui/material'
import { Icon } from '@iconify/react';
import ProfilePhoto from '../../../../assets/ProfilePhoto.png'
import Rating from '@mui/material/Rating';
import VerifiedIcon from '@mui/icons-material/Verified';
import Image from '../../../Image';
import { ProfileCards } from '../../../JSON_Data/ProfileCards';
import { v4 as uuidv4 } from 'uuid';

const People = () => {
    const [active, setActive] = useState('Relevant')

    return (
        <Stack gap='20px' sx={{ paddingX: '25px', position: 'relative', mt: '10px' }}>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <TextField placeholder='Search project, agency, more...'
                    InputProps={{ endAdornment: <SearchIcon /> }} sx={{
                        width: '100%', borderRadius: '12px', border: 'none', '& fieldset': {
                            border: '1px solid rgba(0, 0, 0, 0.2)',
                            borderRadius: '25px'
                        },
                    }}
                />
            </Box>
            <Box sx={{ display: 'flex', gap: '1rem' }}>
                <Button onClick={() => { setActive('Relevant') }} sx={{
                    borderRadius: '25px', textTransform: 'capitalize', fontWeight: '600', fontSize: '18px', px: '1rem', height: '2rem',
                    color: active === 'Relevant' ? 'white' : 'black',
                    bgcolor: active === 'Relevant' ? 'black' : 'white',
                    '&:hover': { bgcolor: 'black', color: 'white' }
                }}>Relevant</Button>
                <Button onClick={() => { setActive('YouJoined') }} sx={{
                    borderRadius: '25px', textTransform: 'capitalize', fontWeight: '600', fontSize: '18px', px: '1rem', height: '2rem',
                    color: active === 'YouJoined' ? 'white' : 'black',
                    bgcolor: active === 'YouJoined' ? 'black' : 'white',
                    '&:hover': { bgcolor: 'black', color: 'white' }
                }}>You Joined</Button>
            </Box>
            <Divider />
            {
                ProfileCards.map((card, index) => (
                    <Stack key={uuidv4()} height='247px' justifyContent='center' alignItems='center' border='1px solid #D9D9D9' borderRadius='12px' gap='10px' px='1rem'>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                            <Typography sx={{ color: '#FD493E', fontStyle: 'italic', fontWeight: '800', fontSize: '15px', letterSpacing: '0.035em' }}>{card.title}</Typography>
                            <Icon icon="iconoir:more-horiz-circle" width='30' height='30' />
                        </Box>
                        <Stack direction='row' gap='3rem' width='100%' >
                            <Stack direction='column' alignItems='center' gap='6px'>
                                <Image src={card.profilephoto} alt='ProfilePhoto' />
                                <Typography sx={{ bgcolor: '#FCE51A', width: 'fit-content', px: '5px', borderRadius: '5px', fontWeight: '500', fontSize: '10px' }}>{card.status}</Typography>
                                <Rating name="size-medium" defaultValue={2} size='small' />
                            </Stack>
                            <Stack direction='column' justifyContent='space-between' width='100%' gap='20px' position='relative'>
                                <Stack>
                                    <VerifiedIcon sx={{ color: '#27F02F', position: 'absolute', left: '-2rem', top: 4 }} /><Typography sx={{ fontWeight: '500', fontSize: '22px' }}>{card.name}</Typography>
                                    <Typography sx={{ fontWeight: '600', fontSize: '16px', color: '#808080' }}>{card.designation}</Typography>
                                    <Typography sx={{ fontWeight: '500', fontSize: '12px', color: '#808080' }}>{card.location}</Typography>
                                    <Typography sx={{ fontWeight: '600', fontSize: '11px', color: '#808080' }}>{card.role}</Typography>
                                </Stack>
                                <Stack direction='row' gap='15%'>
                                    <Stack alignItems='center'>
                                        <Icon icon="clarity:eye-show-line" width='28px' />
                                        <Link sx={{ fontWeight: '400', fontSize: '14px', color: '#000000' }}>Profile</Link>
                                    </Stack>
                                    <Stack alignItems='center'>
                                        <Icon icon="fluent:call-20-regular" width='28px' />
                                        <Link sx={{ fontWeight: '400', fontSize: '14px', color: '#000000' }}>Call</Link>
                                    </Stack>
                                    <Stack alignItems='center'>
                                        <Icon icon="ph:whatsapp-logo-light" width='28px' />
                                        <Link sx={{ fontWeight: '400', fontSize: '14px', color: '#000000' }}>Whatsapp</Link>
                                    </Stack>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Stack>
                ))
            }
        </Stack>
    )
}

export default People
