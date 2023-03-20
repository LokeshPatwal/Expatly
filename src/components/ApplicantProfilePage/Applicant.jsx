import React, { useState } from 'react'
import { Box, Typography, Stack, Link, Paper, Divider } from '@mui/material'
import ProfilePhoto from '../../assets/ProfilePhoto.png'
import Rating from '@mui/material/Rating';
import VerifiedIcon from '@mui/icons-material/Verified';
import Image from '../Image';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Icon } from '@iconify/react';
import { Tab, Tabs } from '@mui/material';

const Applicant = () => {
    const [active, setActive] = useState('About')

    const activeButtonStyle = {
        color: '#FD493E',
        borderTop: '5px solid #FD493E',
    };
    const activeIconStyle = {
    };

    return (
        <Paper elevation={0} sx={{ width: '1088px', height: 'fit-content', display: 'flex', flexDirection: 'column', gap: '10px', borderRadius: '12px' }}>
            <Stack gap='1rem' sx={{ py: '1rem', px: '2rem' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography sx={{ color: '#FD493E', fontStyle: 'italic', fontWeight: '800', fontSize: '15px', letterSpacing: '0.035em' }}># Looking for Job</Typography>
                    <Box sx={{ color: 'white', bgcolor: 'black', width: 'fit-content', px: '10px', py: '2px', borderRadius: '10px' }}>Applicant</Box>
                </Box>
                <Stack direction='row' justifyContent='space-between'>
                    <Stack direction='row' gap='3rem' >
                        <Stack direction='column' alignItems='center' gap='5px'>
                            <Image src={ProfilePhoto} alt='ProfilePhoto' />
                            <Typography sx={{ bgcolor: '#FCE51A', width: 'fit-content', p: '3px', borderRadius: '5px' }}>Expert</Typography>
                            <Rating name="size-medium" defaultValue={2} />
                        </Stack>
                        <Stack direction='column' sx={{ position: 'relative' }}>
                            <VerifiedIcon sx={{ color: '#27F02F', position: 'absolute', left: '-2rem', top: 4 }} /><Typography sx={{ fontWeight: '500', fontSize: '22px' }}>Fayaz Mubin</Typography>
                            <Typography sx={{ fontWeight: '600', fontSize: '16px', color: '#808080' }}>Designation</Typography>
                            <Typography sx={{ fontWeight: '500', fontSize: '12px', color: '#808080' }}>Mumbai,India <Link sx={{ textDecoration: 'none', color: '#FD493E', fontWeight: '600', fontSize: '14px' }}>Contact info</Link></Typography>
                            <Typography sx={{ fontWeight: '600', fontSize: '11px', color: '#808080' }}>Co-operative</Typography>
                        </Stack>
                    </Stack>
                    <Stack direction='row' justifyContent='space-between' gap='4rem'>
                        <Stack alignItems='center'>
                            <Icon icon="fluent:call-28-regular" width='30' height='30' />
                            <Typography>Call</Typography>
                        </Stack>
                        <Stack alignItems='center'>
                            <Icon icon="basil:whatsapp-outline" width='30' height='30' color='lightgreen' />
                            <Typography>Whatsapp</Typography>
                        </Stack>
                        <Stack alignItems='center'>
                            <Icon icon="iconoir:more-horiz-circle" width='30' height='30' />
                            <Typography>More</Typography>
                        </Stack>
                    </Stack>
                </Stack>
                <Stack direction='row' gap='8%' ml='15%'>
                    <Box>
                        <Typography sx={{ color: '#FD493E', fontWeight: '500', fontSize: '22px' }}>1.3 k</Typography>
                        <Typography sx={{ color: '#787885', fontWeight: '500', fontSize: '16px' }}>connect</Typography>
                    </Box>
                    <Box>
                        <Typography sx={{ color: '#FD493E', fontWeight: '500', fontSize: '22px' }}>100</Typography>
                        <Typography sx={{ color: '#787885', fontWeight: '500', fontSize: '16px' }}>post</Typography>
                    </Box>
                    <Box>
                        <Typography sx={{ color: '#FD493E', fontWeight: '500', fontSize: '22px' }}>100</Typography>
                        <Typography sx={{ color: '#787885', fontWeight: '500', fontSize: '16px' }}>followers</Typography>
                    </Box>
                </Stack>
            </Stack>
            <Stack direction='row' sx={{ borderTop: 1, borderColor: 'divider', padding: 0 }}>
                <List sx={{ display: 'flex', width: '75%', padding: 0, margin: 0, height: '100%' }}>
                    <ListItem disablePadding onClick={() => setActive('About')} sx={{ height: '100%' }}>
                        <ListItemButton disableRipple sx={active === 'About' ? activeButtonStyle : null}>
                            <ListItemIcon sx={active === 'About' ? activeIconStyle : null}>
                                <Icon icon="mdi:about-variant" />
                            </ListItemIcon>
                            <ListItemText primary="About" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding onClick={() => setActive('Post')} sx={{ height: '100%' }}>
                        <ListItemButton disableRipple sx={active === 'Post' ? activeButtonStyle : null}>
                            <ListItemIcon sx={active === 'Post' ? activeIconStyle : null}>
                                <Icon icon="ic:baseline-post-add" />
                            </ListItemIcon>
                            <ListItemText primary="Post" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding onClick={() => setActive('Community')} sx={{ height: '100%' }}>
                        <ListItemButton disableRipple sx={active === 'Community' ? activeButtonStyle : null}>
                            <ListItemIcon sx={active === 'Community' ? activeIconStyle : null}>
                                <Icon icon="icon-park-outline:six-circular-connection" />
                            </ListItemIcon>
                            <ListItemText primary="Community" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding onClick={() => setActive('Group')} sx={{ height: '100%' }}>
                        <ListItemButton disableRipple sx={active === 'Group' ? activeButtonStyle : null}>
                            <ListItemIcon sx={active === 'Group' ? activeIconStyle : null}>
                                <Icon icon="fluent:people-community-24-regular" />
                            </ListItemIcon>
                            <ListItemText primary="Group" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding onClick={() => setActive('Portfolio')} sx={{ height: '100%' }}>
                        <ListItemButton disableRipple sx={active === 'Portfolio' ? activeButtonStyle : null}>
                            <ListItemIcon sx={active === 'Portfolio' ? activeIconStyle : null}>
                                <Icon icon="bytesize:portfolio" />
                            </ListItemIcon>
                            <ListItemText primary="Portfolio" />
                        </ListItemButton>
                    </ListItem>
                </List >
            </Stack>

        </Paper >
    )
}

export default Applicant
