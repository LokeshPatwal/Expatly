import React from 'react'
import { Stack, Button, ButtonBase, Box, Link } from '@mui/material'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import BorderColorIcon from '@mui/icons-material/BorderColor';

const RegisteredSignupForm = () => {

  return (
    <Stack width='100%' height='100%' direction='column' alignItems='center' justifyContent='center' py={{ xs: '2rem', lg: 0 }}>
      <Stack rowGap='3rem' my='3rem'>
        <Box display='flex' alignItems='end' justifyContent='center' position='relative'>
          <Typography variant='h4' sx={{ fontWeight: '700', fontSize: '32px', color: '#787885' }}>Congrats Mr “”,</Typography>
          <Link sx={{ color: '#000000', fontWeight: '400', fontSize: '20px', position: 'absolute', right: '-8rem', cursor: 'pointer' }}>Change Company Type</Link>
        </Box>
        <Typography sx={{ fontWeight: '600', fontSize: '22px', color: '#787885' }}>
          Please See the MEA registered Email Id “name@company.com” for final Verification.
        </Typography>
        <Stack direction='column' rowGap='16px'>
          <Stack direction='row' columnGap='1rem'>
            <Stack width='100%' direction='column' gap='8px'>
              <Typography sx={{ textTransform: 'capitalize', fontWeight: '500', fontSize: '16px', color: '#000000' }}>RA Number (MEA license)</Typography>
              <TextField fullWidth autoComplete='off' id="outlined-basic" placeholder='RA7896' variant="outlined"
                sx={{ bgcolor: '#F3F3F3' }} />
            </Stack>
            <Stack width='100%' direction='column' gap='8px'>
              <Typography sx={{ textTransform: 'capitalize', fontWeight: '500', fontSize: '16px', color: '#000000' }}>Proprietor</Typography>
              <TextField fullWidth autoComplete='off' id="outlined-basic" placeholder=' Usman Hussain Shaikh' variant="outlined"
                sx={{ bgcolor: '#F3F3F3' }} />
            </Stack>
          </Stack>
          <Stack direction='row' columnGap='1rem'>
            <Stack width='100%' direction='column' gap='8px'>
              <Typography sx={{ textTransform: 'capitalize', fontWeight: '500', fontSize: '16px', color: '#000000' }}>Agency Name</Typography>
              <TextField fullWidth autoComplete='off' id="outlined-basic" placeholder=' National Exports' variant="outlined"
                sx={{ bgcolor: '#F3F3F3' }} />
            </Stack>
            <Stack width='100%' direction='column' gap='8px'>
              <Typography sx={{ textTransform: 'capitalize', fontWeight: '500', fontSize: '16px', color: '#000000' }}>Email Address</Typography>
              <TextField fullWidth autoComplete='off' id="outlined-basic" placeholder=' usmanhussain3@gmail.co' variant="outlined"
                sx={{ bgcolor: '#F3F3F3', textTransform: 'capitalize' }} />
            </Stack>
          </Stack>
          <Stack direction='row' columnGap='1rem'>
            <Stack width='100%' direction='column' gap='8px'>
              <Typography sx={{ textTransform: 'capitalize', fontWeight: '500', fontSize: '16px', color: '#000000' }}>Whatsapp Number</Typography>
              <TextField fullWidth autoComplete='off' id="outlined-basic" placeholder=' +91 9699895596' variant="outlined"
                sx={{ bgcolor: '#F3F3F3' }} />
            </Stack>
            <Stack width='100%' direction='column' gap='8px'>
              <Typography sx={{ textTransform: 'capitalize', fontWeight: '500', fontSize: '16px', color: '#000000' }}>Alternate Email Id</Typography>
              <TextField fullWidth autoComplete='off' id="outlined-basic" placeholder=' Nnationalexports6ame@gmail.com' variant="outlined"
                sx={{ bgcolor: '#F3F3F3' }} />
            </Stack>
          </Stack>
          <Stack direction='row' columnGap='1rem'>
            <Stack width='100%' direction='column' gap='8px'>
              <Typography sx={{ textTransform: 'capitalize', fontWeight: '500', fontSize: '16px', color: '#000000' }}>Proprietor</Typography>
              <TextField fullWidth autoComplete='off' id="outlined-basic" placeholder='Usman Hussain Shaikh' variant="outlined"
                sx={{ bgcolor: '#F3F3F3', textTransform: 'capitalize' }} />
            </Stack>
            <Stack width='100%' direction='column' gap='8px'>
              <Typography sx={{ textTransform: 'capitalize', fontWeight: '500', fontSize: '16px', color: '#000000' }}>City</Typography>
              <TextField fullWidth autoComplete='off' id="outlined-basic" placeholder=' Mumbai' variant="outlined"
                sx={{ bgcolor: '#F3F3F3' }} />
            </Stack>
          </Stack>
          <Stack direction='row' columnGap='1rem'>
            <Stack width='100%' direction='column' gap='8px'>
              <Typography sx={{ textTransform: 'capitalize', fontWeight: '500', fontSize: '16px', color: '#000000' }}>License Number</Typography>
              <TextField fullWidth autoComplete='off' id="outlined-basic" placeholder=' 0079/MUM/PER/1000/1/7896/07' variant="outlined"
                sx={{ bgcolor: '#F3F3F3' }} />
            </Stack>
            <Stack width='100%' direction='column' gap='8px'>
              <Typography sx={{ textTransform: 'capitalize', fontWeight: '500', fontSize: '16px', color: '#000000' }}>address</Typography>
              <TextField
                sx={{ bgcolor: '#F3F3F3' }}
                placeholder="F/426 KANAKIA ZILLION BKC ANNEXE LBS MARG NEAR KURLA BUS DEPOT KURLA WEST Mumbai INDIA 400070"
                multiline
              />
            </Stack>
          </Stack>
          <Typography sx={{ textTransform: 'capitalize', fontWeight: '500', fontSize: '16px', color: '#000000' }}>I declare above license is belongs to me</Typography>
          <Button sx={{ textTransform: 'capitalize', background: 'linear-gradient(94.18deg, #FE1D26 0%, #E8222A 107.81%)', color: 'white', fontWeight: '600', fontSize: '22px', width: '280px', height: { xs: '55px', xl: '64px' }, borderRadius: '8px', mx: 'auto', mt: '20px' }}>sign up</Button>
          <ButtonBase sx={{ fontWeight: '500', fontSize: '20px', width: 'fit-content', mx: 'auto' }}>
            Edit RA Number   <BorderColorIcon /></ButtonBase>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default RegisteredSignupForm
