import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CheckIcon from '@mui/icons-material/Check';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ManageNetImg from '../../assets/Frame.png'
import { Button, styled } from '@mui/material';

const StyledButton = styled(Button)`
  border-radius: 50px;
  text-transform: capitalize;
  font-weight: 600;
  width: fit-content;
`
const ManageNetwork = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, alignItems: 'center', height: { xs: 'fit-content', lg: '488px' }, border: '1px solid #C4C4C4', borderRadius: '12px', background: 'linear-gradient(90.09deg, rgba(212, 227, 255, 0.4) 0.06%, rgba(186, 186, 250, 0.4) 98.85%)', py: '2rem', px: { xs: '5px', md: '3rem' }, columnGap: { md: '6rem' } }}>
            <Box sx={{ width: { xs: '100%', lg: '30%' }, display: 'flex', flexDirection: 'column', gap: { xs: '1rem', xl: '1.5rem' } }}>
                <Typography variant='h2' sx={{ textAlign: { xs: 'center', md: 'left' }, fontWeight: '600', fontSize: { xs: '28px', xl: '40px' }, color: '#FD493E' }}>Manage & Build Network <Typography variant='span' sx={{ color: '#000000', fontSize: { xs: '24px', xl: '32px' } }}> for Your Ongoing Recruitment.</Typography></Typography>
                <List sx={{ display: 'flex', flexDirection: 'column', gap: { xs: '6px', md: '1rem' } }}>
                    <ListItem disablePadding>
                        <ListItemIcon>
                            <CheckIcon sx={{ color: '#FD493E' }} />
                        </ListItemIcon>
                        <ListItemText primary={<Typography variant='p' sx={{ color: '#000000', fontWeight: '600', fontSize: { xs: '12px', md: '16px' } }}>Build Independent Resume Data base</Typography>} />
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemIcon>
                            <CheckIcon sx={{ color: '#FD493E' }} />
                        </ListItemIcon>
                        <ListItemText primary={<Typography variant='p' sx={{ color: '#000000', fontWeight: '600', fontSize: { xs: '12px', md: '16px' } }}>Get Relevant Cv’s Basket </Typography>} />
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemIcon>
                            <CheckIcon sx={{ color: '#FD493E' }} />
                        </ListItemIcon>
                        <ListItemText primary={<Typography variant='p' sx={{ color: '#000000', fontWeight: '600', fontSize: { xs: '12px', md: '16px' } }}>Skill Provider / Associate Connection</Typography>} />
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemIcon>
                            <CheckIcon sx={{ color: '#FD493E' }} />
                        </ListItemIcon>
                        <ListItemText primary={<Typography variant='p' sx={{ color: '#000000', fontWeight: '600', fontSize: { xs: '12px', md: '16px' } }}>Advance and easy Dashboard</Typography>} />
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemIcon>
                            <CheckIcon sx={{ color: '#FD493E' }} />
                        </ListItemIcon>
                        <ListItemText primary={<Typography variant='p' sx={{ color: '#000000', fontWeight: '600', fontSize: { xs: '12px', md: '16px' } }}>Accurate Update on Whatsapp</Typography>} />
                    </ListItem>
                </List>
            </Box>
            <Box sx={{
                display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center',
                width: { xs: '90vw', md: '90%', lg: '60%', xl: '921px' }, height: { md: 'fit-content', xl: '612px' }, borderRadius: '20px', border: '1px solid #C4C4C4', bgcolor: 'white', rowGap: '1rem', py: { xs: '1rem' }, boxSizing: 'border-box'
            }}>
                <Box component='img' src={ManageNetImg} alt='Frame' sx={{ width: { xs: '60%', lg: 'fit-content' }, height: 'fit-content' }} />
                <StyledButton variant="contained" sx={{ background: 'linear-gradient(94.18deg, #FE1D26 0%, #E8222A 107.81%)', fontSize: { xs: '12px', md: '16px', xl: '18px' } }}>Create Project</StyledButton>
                <Typography component='p' sx={{ fontWeight: '500', fontSize: { xs: '12px', lg: '18px' }, color: 'black', textAlign: 'center' }}>Create Unique link make your own Resume Database and Contacts</Typography>
            </Box>
        </Box>
    )
}

export default ManageNetwork
