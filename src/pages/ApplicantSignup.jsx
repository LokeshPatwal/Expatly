import React from 'react'
import Box from '@mui/material/Box'
import Link from '@mui/material/Box'
import ApplicantFrontPageSubmitForm from '../components/SignUp/ApplicantSignup/ApplicantFrontPageSubmitForm';
import WhatsappLink from '../components/WhatsappLink';
import FooterBottom from '../components/FooterBottom';
import { ApplicantListData } from '../ListItemData';


const ApplicantSignup = () => {
  return (
      <Box>
        <Box sx={{ height: { xs: '2rem', xl: '50px' }, bgcolor: '#5463FF', boxShadow: '0px 4px 4px rgba(0,0,0,0.05)', display: 'flex', justifyContent: 'end', alignItems: 'center' }}>
          <Link href="#" sx={{ fontWeight: '500', fontSize: { xs: '15px', xl: '22px' }, color: 'white', mr: '5%' }}>Employer? Login here</Link>
        </Box>
        <Box display='flex' flexDirection={{ xs: 'column', lg: 'row' }}>
          <Box display='flex' flex='9' justifyContent='center'>
            <ApplicantFrontPageSubmitForm />
          </Box>
          <Box display='flex' flex='3' justifyContent='end'>
            <WhatsappLink data={ApplicantListData}/>
          </Box>
        </Box>
        <FooterBottom />
      </Box >
  )
}

export default ApplicantSignup
