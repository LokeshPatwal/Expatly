import React from 'react'
import Header from '../components/SignUp/EmployerSignup/Header'
import Box from '@mui/material/Box'
import SignupField from '../components/SignUp/EmployerSignup/SignupField'
import FooterBottom from '../components/FooterBottom'
import WhatsappLink from '../components/WhatsappLink'
import { ListData } from '../ListItemData'


const EmployerSignup = () => {
  return (
    <Box>
      <Header />
      <Box display='flex' flexDirection={{ xs: 'column', lg: 'row' }}>
        <Box display='flex' flex='9' justifyContent='center'>
          <SignupField />
        </Box>
        <Box display='flex' flex='3' justifyContent='end'>
          <WhatsappLink data={ListData} />
        </Box>
      </Box>
      <FooterBottom />
    </Box >
  )
}

export default EmployerSignup
