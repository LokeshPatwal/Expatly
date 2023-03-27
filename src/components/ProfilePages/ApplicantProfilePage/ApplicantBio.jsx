import React, { useState } from 'react'
import { Box, Typography, Stack, Button, Paper, Divider, Link } from '@mui/material'
import { Table, TableBody, TableCell, TableRow } from '@mui/material';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const ApplicantBio = () => {
  const [active, setActive] = useState('PersonalInfo')

  return (
    <Paper elevation={0} sx={{overflow: 'hidden', display: 'flex', flexDirection: 'column', gap: '10px', borderRadius: '12px' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', py: '1rem', px: '2rem', bgcolor: '#FBFBFB', borderRadius: '10px 10px 0px 0px', border: '1px solid #D6D6D6' }}>
        <Typography sx={{ fontWeight: '500', fontSize: '16px' }}>Bio</Typography>
        <Stack direction='row' ml='6rem' gap='2rem'>
          <Button onClick={() => setActive('PersonalInfo')}
            sx={{ borderRadius: '20px', px: '1rem', textTransform: 'capitalize', fontWeight: '500', fontSize: '12px', color: active === 'PersonalInfo' ? 'white' : 'black', background: active === 'PersonalInfo' ? 'linear-gradient(94.18deg, #FE1D26 0%, #E8222A 107.81%)' : '' }}>Personal Info</Button>
          <Button onClick={() => setActive('CVs')}
            sx={{
              borderRadius: '20px', px: '1rem', textTransform: 'capitalize', fontWeight: '500', fontSize: '12px', color: active === 'CVs' ? 'white' : 'black',
              background: active === 'CVs' ? 'linear-gradient(94.18deg, #FE1D26 0%, #E8222A 107.81%)' : ''
            }}>Cv's</Button>
          <Button onClick={() => setActive('SkillVideo')}
            sx={{ borderRadius: '20px', px: '1rem', textTransform: 'capitalize', fontWeight: '500', fontSize: '12px', color: active === 'SkillVideo' ? 'white' : 'black', background: active === 'SkillVideo' ? 'linear-gradient(94.18deg, #FE1D26 0%, #E8222A 107.81%)' : '' }}>Skill Video</Button>
          <Button onClick={() => setActive('VideoIntro')}
            sx={{ borderRadius: '20px', px: '1rem', textTransform: 'capitalize', fontWeight: '500', fontSize: '12px', color: active === 'VideoIntro' ? 'white' : 'black', background: active === 'VideoIntro' ? 'linear-gradient(94.18deg, #FE1D26 0%, #E8222A 107.81%)' : '' }}>Video Introduction</Button>
        </Stack>
      </Box>
   
      <Stack direction='column' gap='1rem' sx={{ px: '5rem', py: '2rem', }}>
        <Typography sx={{ fontWeight: '400', fontSize: '22px' }}>This is about me and  about meabout meabout meabout meabout meabout meabout meabout meabout me about me</Typography>
        <Stack direction='row' justifyContent='space-between' gap='3rem' >
          <Stack width='50%'>
            <Table sx={{}}>
              <TableBody>
                <TableRow>
                  <TableCell sx={{ padding: '6px', border: 'none', color: '#787885', fontWeight: '400', fontSize: '13px' }}>Applicant Name</TableCell>
                  <TableCell sx={{ padding: '6px', border: 'none', color: 'black', fontWeight: '500', fontSize: '14px' }}>Mangesh Yadav (Electrical Engineer)</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ padding: '6px', border: 'none', color: '#787885', fontWeight: '400', fontSize: '13px' }}>Technical Qualification</TableCell>
                  <TableCell sx={{ padding: '6px', border: 'none', color: 'black', fontWeight: '500', fontSize: '14px' }}>ITI in Electrical (2013-14) <Link sx={{ color: '#787885', fontWeight: '400', fontSize: '12px' }}>View Certificate</Link></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ padding: '6px', border: 'none', color: '#787885', fontWeight: '400', fontSize: '13px' }}>Years Old</TableCell>
                  <TableCell sx={{ padding: '6px', border: 'none', color: 'black', fontWeight: '500', fontSize: '14px' }}>32 </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ padding: '6px', border: 'none', color: '#787885', fontWeight: '400', fontSize: '13px' }}>Inch Height</TableCell>
                  <TableCell sx={{ padding: '6px', border: 'none', color: 'black', fontWeight: '500', fontSize: '14px' }}>5.5</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ padding: '6px', border: 'none', color: '#787885', fontWeight: '400', fontSize: '13px' }}>Place</TableCell>
                  <TableCell sx={{ padding: '6px', border: 'none', color: 'black', fontWeight: '500', fontSize: '14px' }}>Mumbai</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ padding: '6px', border: 'none', color: '#787885', fontWeight: '400', fontSize: '13px' }}>6 Month Course</TableCell>
                  <TableCell sx={{ padding: '6px', border: 'none', color: 'black', fontWeight: '500', fontSize: '14px' }}>Data Science</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ padding: '6px', border: 'none', color: '#787885', fontWeight: '400', fontSize: '13px' }}>Skill Test</TableCell>
                  <TableCell sx={{ padding: '6px', border: 'none', color: 'black', fontWeight: '500', fontSize: '14px' }}>
                    Test Pass <Link sx={{ color: '#787885', fontWeight: '400', fontSize: '12px' }}>View Trade test</Link></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Stack>
          <Stack width='50%'>
            <Table sx={{}}>
              <TableBody>
                <TableRow>
                  <TableCell sx={{ padding: '6px', border: 'none', color: '#787885', fontWeight: '400', fontSize: '13px' }}>Area</TableCell>
                  <TableCell sx={{ padding: '6px', border: 'none', color: 'black', fontWeight: '500', fontSize: '14px' }}>Ghatkopar</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ padding: '6px', border: 'none', color: '#787885', fontWeight: '400', fontSize: '13px' }}>Education</TableCell>
                  <TableCell sx={{ padding: '6px', border: 'none', color: 'black', fontWeight: '500', fontSize: '14px' }}>B. Tech  (2014 - 2019)</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ padding: '6px', border: 'none', color: '#787885', fontWeight: '400', fontSize: '13px' }}>Passport No</TableCell>
                  <TableCell sx={{ padding: '6px', border: 'none', color: 'black', fontWeight: '500', fontSize: '14px' }}>
                    H4729139 <Link sx={{ color: '#787885', fontWeight: '400', fontSize: '12px' }}>View Passport</Link></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ padding: '6px', border: 'none', color: '#787885', fontWeight: '400', fontSize: '13px' }}>Passport Type</TableCell>
                  <TableCell sx={{ padding: '6px', border: 'none', color: 'black', fontWeight: '500', fontSize: '14px' }}>ECNR</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ padding: '6px', border: 'none', color: '#787885', fontWeight: '400', fontSize: '13px' }}>Expiry</TableCell>
                  <TableCell sx={{ padding: '6px', border: 'none', color: 'black', fontWeight: '500', fontSize: '14px' }}>12 June 2030</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ padding: '6px', border: 'none', color: '#787885', fontWeight: '400', fontSize: '13px' }}>Nature</TableCell>
                  <TableCell sx={{ padding: '6px', border: 'none', color: 'black', fontWeight: '500', fontSize: '14px' }}>Co-operative</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ padding: '6px', border: 'none', color: '#787885', fontWeight: '400', fontSize: '13px' }}>Hobbies</TableCell>
                  <TableCell sx={{ padding: '6px', border: 'none', color: 'black', fontWeight: '500', fontSize: '14px' }}>Reading Book </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Stack>
        </Stack>
      </Stack>
  
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', py: '1rem', px: '2rem', bgcolor: '#FBFBFB', borderRadius: '0px 0px 10px 10px', border: '1px solid #D6D6D6' }}>
        <Link sx={{ color: '#FD493E' }}>Rate Profile</Link>
        <Button startIcon={<CheckCircleOutlinedIcon />} endIcon={<ArrowDropDownIcon />} sx={{
          color: 'white', bgcolor: '#44E64A', borderRadius: '10px', fontWeight: '600', fontSize: '16px', textTransform: 'capitalize', '&:hover': { bgcolor: '#44E64A', opacity: 0.9 }
        }}>
          Approved   <Divider orientation="vertical" flexItem sx={{ bgcolor: 'white', ml: '8px' }} />
        </Button>
      </Box>
    </Paper >
  )
}

export default ApplicantBio
