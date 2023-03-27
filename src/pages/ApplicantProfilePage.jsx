import React from 'react'
import ProfileHeader from '../components/NavBar/ProfileHeader'
import { Box } from '@mui/material'
import SideBar from '../components/NavBar/SideBar'
import Applicant from '../components/ProfilePages/ApplicantProfilePage/Applicant'
import Grid from '@mui/material/Unstable_Grid2';
import ApplicantBio from '../components/ProfilePages/ApplicantProfilePage/ApplicantBio'
import ApplicantBehaviour from '../components/ProfilePages/ApplicantProfilePage/ApplicantBehaviour'
import ApplicantStatus from '../components/ProfilePages/ApplicantProfilePage/ApplicantStatus'
import ApplicantDocuments from '../components/ProfilePages/ApplicantProfilePage/ApplicantDocuments'
import ApplicantExperience from '../components/ProfilePages/ApplicantProfilePage/ApplicantExperience'
import ApplicantSkillLevel from '../components/ProfilePages/ApplicantProfilePage/ApplicantSkillLevel'
import ApplicantSkills from '../components/ProfilePages/ApplicantProfilePage/ApplicantSkills'
import ApplicantReview from '../components/ProfilePages/ApplicantProfilePage/ApplicantReview'
import ApplicantRewards from '../components/ProfilePages/ApplicantProfilePage/ApplicantRewards'
import ApplicantInterested from '../components/ProfilePages/ApplicantProfilePage/ApplicantInterested'
import ApplicantQRcode from '../components/ProfilePages/ApplicantProfilePage/RightContent/ApplicantQRcode'
import GroupCommunityPeopleIndustry from '../components/ProfilePages/ApplicantProfilePage/RightContent/GroupCommunityPeopleIndustry'
import DirectOpening from '../components/ProfilePages/ApplicantProfilePage/RightContent/DirectOpening'
import ProfileProgress from '../components/ProfilePages/ApplicantProfilePage/RightContent/ProfileProgress'
import SuperBasket from '../components/ProfilePages/ApplicantProfilePage/RightContent/SuperBasket'

const ApplicantProfilePage = () => {
    return (
        <Box bgcolor='#D9DEF1'>
            <ProfileHeader />
            <Grid container  disableEqualOverflow sx={{padding: '1rem'}}>
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
                    <Grid xl={12}>
                        <ApplicantExperience />
                    </Grid>
                    <Grid xl={12}>
                        <ApplicantSkillLevel />
                    </Grid>
                    <Grid xl={12}>
                        <ApplicantSkills />
                    </Grid>
                    <Grid xl={12}>
                        <ApplicantReview />
                    </Grid>
                    <Grid xl={12}>
                        <ApplicantRewards />
                    </Grid>
                    <Grid xl={12}>
                        <ApplicantInterested />
                    </Grid>
                </Grid>
                <Grid container xl={3} spacing={1}>
                    <Grid xl={12}>
                        <ApplicantQRcode />
                    </Grid>
                    <Grid xl={12}>
                        <GroupCommunityPeopleIndustry />
                    </Grid>
                    <Grid xl={12}>
                        <DirectOpening />
                    </Grid>
                    <Grid xl={12}>
                        <ProfileProgress />
                    </Grid>
                    <Grid xl={12}>
                        <SuperBasket />
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}

export default ApplicantProfilePage
