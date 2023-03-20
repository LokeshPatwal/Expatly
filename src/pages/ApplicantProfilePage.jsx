import React from 'react'
import ProfileHeader from '../components/NavBar/ProfileHeader'
import { Box } from '@mui/material'
import SideBar from '../components/NavBar/SideBar'
import Applicant from '../components/ApplicantProfilePage/Applicant'
import Grid from '@mui/material/Unstable_Grid2';
import ApplicantBio from '../components/ApplicantProfilePage/ApplicantBio'
import ApplicantBehaviour from '../components/ApplicantProfilePage/ApplicantBehaviour'
import ApplicantStatus from '../components/ApplicantProfilePage/ApplicantStatus'
import ApplicantDocuments from '../components/ApplicantProfilePage/ApplicantDocuments'

const ApplicantProfilePage = () => {
    return (
        <Box bgcolor='#D9DEF1'>
            <ProfileHeader />
            <Grid container gap={4} disableEqualOverflow sx={{ padding: '1rem' }}>
                <Grid xl={2}>
                    <SideBar />
                </Grid>
                <Grid container xl={7} spacing={2}>
                    <Grid xl={12}>
                        <Applicant />
                    </Grid>
                    <Grid xl={12}>
                        <ApplicantBio />
                    </Grid>
                    <Grid xl={12}>
                        <ApplicantBehaviour />
                    </Grid>
                    <Grid xl={12}>
                        <ApplicantStatus />
                    </Grid>
                    <Grid xl={12}>
                        <ApplicantDocuments />
                    </Grid>
                </Grid>
                <Grid xl={3}>

                </Grid>
            </Grid>
        </Box>
    )
}

export default ApplicantProfilePage
