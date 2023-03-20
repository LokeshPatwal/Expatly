import { Box } from '@mui/material'
import React from 'react'
import Footer from '../components/Home/Footer'
import FooterBottom from '../components/FooterBottom'
import JobGulf from '../components/Home/JobGulf'
import JoinRecruitment from '../components/Home/JoinRecruitment'
import Navbar from '../components/Home/Navbar'
import PostVacancy from '../components/Home/PostVacancy'
import Scan from '../components/Home/Scan'
import Whatsapp from '../components/Home/Whatsapp'

const Home = () => {
    return (
        <Box>
            <Navbar />
            <Scan />
            <Whatsapp />
            <JobGulf />
            <PostVacancy />
            <JoinRecruitment />
            <Footer />
            <FooterBottom />
        </Box>
    )
}

export default Home
