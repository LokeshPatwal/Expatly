import React from 'react'
import QRcode from '../assets/QRcode.png'
import CheckIcon from '@mui/icons-material/Check';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Box, Typography } from '@mui/material';
import { ListData } from '../ListItemData';
import { v4 as uuidv4 } from 'uuid';


const WhatsappLink = ({ data }) => {
    return (
        <Box sx={{ minHeight: '100%', width: { xs: '100%', xl: '446px' }, bgcolor: '#F6F6FF', display: 'flex', justifyContent: { xs: 'center', lg: 'start' }, alignItems: 'center', flexDirection: { xs: 'column', sm: 'row', lg: 'column' }, py: '46px', columnGap: '10%', rowGap: '5%', mx: 'auto' }}>
            <Box display='flex' flexDirection='column' alignItems='center' gap={3}>
                <Box component='img' src={QRcode} sx={{ width: { xs: '15rem', md: '14rem', xl: '20rem' } }} />
                <Typography sx={{ fontWeight: '700', fontSize: { xs: '14px', lg: '18px' } }}>w.a/Whatsapp link</Typography>
            </Box>
            <List sx={{ display: 'flex', flexDirection: 'column', gap: { xs: '0px', xl: '1rem' } }}>
                {
                    data?.map((item, index) => {
                        return <ListItem key={uuidv4() } >
                            <ListItemIcon sx={{ minWidth: '2rem' }}>
                                <CheckIcon sx={{ color: '#FD493E' }} />
                            </ListItemIcon>
                            <ListItemText primary={<Typography variant='p' sx={{ color: '#000000', fontWeight: '600', fontSize: { xs: '12px', xl: '16px' } }}>{item.title}</Typography>} />
                        </ListItem>
                    })
                }
            </List>
        </Box>
    )
}

export default WhatsappLink
