import React from 'react'
import Home from './pages/Home'
import EmployerSignup from './pages/EmployerSignup'
import EmployerSignup2 from './pages/EmployerSignup2'
import EmployerSignup3 from './pages/EmployerSignup3'
import Box from '@mui/material/Box'
import ApplicantSignup from './pages/ApplicantSignup'
import SkillProviderAgent from './components/SignUp/SkillProviderAgent/SkillProviderFormTab'
import RegisteredAgencySignup from './pages/RegisteredAgencySignup'
import RegisteredAgencySignup2 from './pages/RegisteredAgencySignup2'
import SkillProviderNextPage from './pages/SkillProviderNextPage'
import ApplicantSignup2 from './pages/ApplicantSignup2'
import ApplicantSignupRegisteredSignup from './pages/ApplicantSignupRegisteredSignup'
import ProfileHeader from './components/NavBar/ProfileHeader'
import ApplicantProfilePage from './pages/ApplicantProfilePage'


const App = () => {
  return (
    <Box>
      {/* <Home /> */}
      {/* <EmployerSignup /> */}
      {/* <EmployerSignup2 /> */}
      {/* <EmployerSignup3 /> */}

      {/* <RegisteredAgencySignup /> */}
      {/* <RegisteredAgencySignup2 /> */}

      {/* <SkillProviderAgent /> */}
      {/* <SkillProviderNextPage /> */}

      {/* <ApplicantSignup /> */}
      {/* <ApplicantSignup2 /> */}
      {/* <ApplicantSignupRegisteredSignup /> */}

      <ApplicantProfilePage />
    </Box>
  )
}

export default App

