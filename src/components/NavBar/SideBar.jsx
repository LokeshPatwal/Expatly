import React, { useState } from 'react'
import { Divider, Paper, Box, Button } from '@mui/material'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '../../assets/Home.png';
import Network from '../../assets/Network.png';
import Jobs from '../../assets/Jobs.png';
import Message from '../../assets/Message.png';
import Documents from '../../assets/Documents.png';
import Users from '../../assets/Users.png';
import Logout from '../../assets/Logout.png';
import { Icon } from '@iconify/react';


const SideBar = () => {
    const [active, setActive] = useState('Home')

    const activeButtonStyle = {
        color: '#FD493E',
        borderRight: '5px solid #FD493E',
    };

    const activeIconStyle = {
    };

    return (
        <Paper elevation={0} sx={{ width: '298px', borderRadius: '12px', height: '100vh' }}>
            <List sx={{ pt: '3rem' }}>
                <Divider />
                <ListItem disablePadding onClick={() => setActive('Home')} >
                    <ListItemButton sx={active === 'Home' ? activeButtonStyle : null}>
                        <ListItemIcon sx={active === 'Home' ? activeIconStyle : null}>
                            <Icon icon="carbon:home" />
                        </ListItemIcon>
                        <ListItemText primary="Home" sx={{ ml: -1 }} />
                    </ListItemButton>
                </ListItem>
                <Divider />
                <ListItem disablePadding onClick={() => setActive('Network')} >
                    <ListItemButton sx={active === 'Network' ? activeButtonStyle : null}>
                        <ListItemIcon sx={active === 'Network' ? activeIconStyle : null}>
                            <Icon icon="mdi:local-area-network" />
                        </ListItemIcon>
                        <ListItemText primary="Network" sx={{ ml: -1 }} />
                    </ListItemButton>
                </ListItem>
                <Divider />
                <ListItem disablePadding onClick={() => setActive('Jobs')} >
                    <ListItemButton sx={active === 'Jobs' ? activeButtonStyle : null}>
                        <ListItemIcon sx={active === 'Jobs' ? activeIconStyle : null}>
                            <Icon icon="tabler:device-desktop-analytics" />
                        </ListItemIcon>
                        <ListItemText primary="Jobs" sx={{ ml: -1 }} />
                    </ListItemButton>
                </ListItem>
                <Divider />
                <ListItem disablePadding onClick={() => setActive('Message')} >
                    <ListItemButton sx={active === 'Message' ? activeButtonStyle : null}>
                        <ListItemIcon sx={active === 'Message' ? activeIconStyle : null}>
                            <Icon icon="gala:data" />
                        </ListItemIcon>
                        <ListItemText primary="Message" sx={{ ml: -1 }} />
                    </ListItemButton>
                </ListItem>
                <Divider />
                <ListItem disablePadding onClick={() => setActive('Documents')} >
                    <ListItemButton sx={active === 'Documents' ? activeButtonStyle : null}>
                        <ListItemIcon sx={active === 'Documents' ? activeIconStyle : null}>
                            <Icon icon="tabler:message" />
                        </ListItemIcon>
                        <ListItemText primary="Documents" sx={{ ml: -1 }} />
                    </ListItemButton>
                </ListItem>
                <Divider />
                <ListItem disablePadding onClick={() => setActive('Users')} >
                    <ListItemButton sx={active === 'Users' ? activeButtonStyle : null}>
                        <ListItemIcon sx={active === 'Users' ? activeIconStyle : null}>
                            <Icon icon="akar-icons:person-add" />
                        </ListItemIcon>
                        <ListItemText primary="Users" sx={{ ml: -1 }} />
                    </ListItemButton>
                </ListItem>
                <Divider />
                <ListItem disablePadding onClick={() => setActive('Logout')} >
                    <ListItemButton sx={active === 'Logout' ? activeButtonStyle : null}>
                        <ListItemIcon sx={active === 'Logout' ? activeIconStyle : null}>
                            <Icon icon="humbleicons:logout" />
                        </ListItemIcon>
                        <ListItemText primary="Logout" sx={{ ml: -1 }} />
                    </ListItemButton>
                </ListItem>
                <Divider />
            </List >
            <Box display='flex' justifyContent='center' mt='3rem'>
                <Button variant='contained' sx={{ borderRadius: '20px', textTransform: 'capitalize', px: '24px', letterSpacing: '1px', fontWeight: '600', fontSize: '16px', background: 'linear-gradient(94.18deg, #FE1D26 0%, #E8222A 107.81%)' }}>Import</Button>
            </Box>
        </Paper >
    )
}

export default SideBar
