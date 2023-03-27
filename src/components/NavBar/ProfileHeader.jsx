import React from 'react'
import ExpatlyLogo from '../../assets/ExpatlyLogo.png'
import { Stack, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import ProfilePicture from '../../assets/ProfilePicture.png'
import Image from '../Image';
import { Icon } from '@iconify/react';

const ProfileHeader = () => {
    return (
        <Paper elevation={4} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem' }}>
            <Stack direction='row' alignItems='center' gap='24px'>
                <Image src={ExpatlyLogo} alt='Expatly' />
                <TextField sx={{ bgcolor: '#F3F3F3', width: '450px', borderRadius: '12px', border: 'none' }} placeholder='Search project, agency, more...'
                    InputProps={{
                        endAdornment: <SearchIcon />,
                    }}
                />
            </Stack>
            <Stack direction='row' justifyContent='center' alignItems='center' gap='2rem'>
                <Icon icon="uil:language" />
                <Icon icon="tabler:bell" />
                <Icon icon="bi:bookmark-heart" />
                <Icon icon="icon-park-outline:setting-two" />
                <Image src={ProfilePicture} />
                <Icon icon="ph:caret-down-fill" />
            </Stack>
        </Paper>
    )
}

export default ProfileHeader
