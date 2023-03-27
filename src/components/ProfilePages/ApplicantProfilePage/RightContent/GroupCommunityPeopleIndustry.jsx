import React, { useState } from 'react'
import { Paper, Box } from '@mui/material'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Icon } from '@iconify/react';
import People from './People';
import Community from './Community';
import Industry from './Industry';
import Group from './Group';


const GroupCommunityPeopleIndustry = () => {
    const [active, setActive] = useState('People')

    const activeButtonStyle = {
        color: '#FD493E',
        borderTop: '5px solid #FD493E',
    };

    return (
        <Paper elevation={0} sx={{
            display: 'flex', flexDirection: 'column', gap: '10px', borderRadius: '12px',
            py: '2rem'
        }}>
            <List sx={{ display: 'flex', borderTop: '1px solid #E8E8E8', borderBottom: '1px solid #E8E8E8', padding: 0 }}>
                <ListItem onClick={() => { setActive('Group') }} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', color: active === 'Group' ? '#FD493E' : '', borderBottom: active === 'Group' ? '3px solid #FD493E' : '' }}>
                    <ListItemIcon sx={{ display: 'flex', justifyContent: 'center', color: active === 'Group' ? '#FD493E' : '' }}>
                        <Icon icon="fluent:people-community-24-regular" width='24px' />
                    </ListItemIcon>
                    <ListItemText primary="Group" />
                </ListItem>

                <ListItem onClick={() => { setActive('Community') }} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', color: active === 'Community' ? '#FD493E' : '', borderBottom: active === 'Community' ? '3px solid #FD493E' : '' }}>
                    <ListItemIcon sx={{ display: 'flex', justifyContent: 'center', color: active === 'Community' ? '#FD493E' : '' }}>
                        <Icon icon="icon-park-outline:six-circular-connection" width='24px' />
                    </ListItemIcon>
                    <ListItemText primary="Community" />
                </ListItem>

                <ListItem onClick={() => { setActive('People') }} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', color: active === 'People' ? '#FD493E' : '', borderBottom: active === 'People' ? '3px solid #FD493E' : '' }}>
                    <ListItemIcon sx={{ display: 'flex', justifyContent: 'center', color: active === 'People' ? '#FD493E' : '' }}>
                        <Icon icon="fluent:people-48-regular" width='24px' />
                    </ListItemIcon>
                    <ListItemText primary="People" />
                </ListItem>

                <ListItem onClick={() => { setActive('Industry') }} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', color: active === 'Industry' ? '#FD493E' : '', borderBottom: active === 'Industry' ? '3px solid #FD493E' : '' }}>
                    <ListItemIcon sx={{ display: 'flex', justifyContent: 'center', color: active === 'Industry' ? '#FD493E' : '' }}>
                        <Icon icon="carbon:industry" width='24px' />
                    </ListItemIcon>
                    <ListItemText primary="Industry" />
                </ListItem>
            </List>
            <Box>
                {active === 'Group' && <Group />}
                {active === 'Community' && <Community />}
                {active === 'People' && <People />}
                {active === 'Industry' && <Industry />}
            </Box>
        </Paper>
    )
}

export default GroupCommunityPeopleIndustry
