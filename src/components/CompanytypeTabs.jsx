import React, { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import { Stack, Typography, Button, TextField } from '@mui/material';
import LicenseAgency from './LicenseAgency';
import GulfBaseCompany from './GulfBaseCompany';
import SkillProviderAgent from './SignUp/SkillProviderAgent/SkillProviderFormTab';
import SkillProviderFormTab from './SignUp/SkillProviderAgent/SkillProviderFormTab';

const industry = [
    {
        value: 'عربي',
    },
    {
        value: 'Hinglish',
    },
    {
        value: 'English',
    },
];

const CompanytypeTabs = () => {
    const [activeTab, setActiveTab] = useState('Tab1')

    return (
        <Stack sx={{ width: { xs: '95%', lg: '350px', xl: '448px' }, height: 'fit-content', display: 'flex', justifyContent: 'center', alignItems: 'center', my: '2rem', mx: 'auto' }}>
            <Stack direction='row' justifyContent='space-between' alignItems='center' width='100%' mb='24px'>
                <Typography sx={{ fontWeight: '700', fontSize: { xs: '22px', xl: '32px' }, color: '#787885' }}>Sign up</Typography>
                <TextField id="outlined-select-currency" defaultValue='عربي' select size="small" sx={{ minWidth: '7rem', py: '0px', borderRadius: '8px', borderRadius: '8px', color: '#FD493E' }} >
                    {industry.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.value}
                        </MenuItem>
                    ))}
                </TextField>
            </Stack>
            <Stack direction='column' rowGap='16px'>
                <Stack direction='column' rowGap='8px'>
                    <Typography sx={{ textTransform: 'capitalize' }}>Company/Agency Type</Typography>
                    <Stack direction='row' justifyContent='space-between'>
                        <Button onClick={() => { setActiveTab('Tab1') }} variant="outlined" sx={{
                            borderRadius: '8px', width: '31%', lineHeight: '17px', fontWeight: '500', fontSize: { xs: '10px', md: '14px' }, color: '#787885',
                            border: `${activeTab === 'Tab1' ? '1px solid #FD493E' : '1px solid #C4C4C4'}`,
                            background: `${activeTab === 'Tab1' ? 'rgba(253, 73, 62, 0.07)' : ''}`,
                            "&:hover": { border: '1px solid #FD493E', background: 'rgba(253, 73, 62, 0.07)' }
                        }}>Registered Agency / Recruiter</Button>
                        <Button onClick={() => { setActiveTab('Tab2') }} variant="outlined" sx={{
                            borderRadius: '8px', width: '31%', lineHeight: '17px', fontWeight: '500', fontSize: { xs: '10px', md: '14px' }, color: '#787885',
                            border: `${activeTab === 'Tab2' ? '1px solid #FD493E' : '1px solid #C4C4C4'}`,
                            background: `${activeTab === 'Tab2' ? 'rgba(253, 73, 62, 0.07)' : ''}`,
                            "&:hover": { border: '1px solid #FD493E', background: 'rgba(253, 73, 62, 0.07)' }
                        }}>Gulf Base Company</Button>
                        <Button onClick={() => { setActiveTab('Tab3') }} variant="outlined" sx={{
                            borderRadius: '8px', width: '31%', lineHeight: '17px', fontWeight: '500', fontSize: { xs: '10px', md: '14px' }, color: '#787885',
                            border: `${activeTab === 'Tab3' ? '1px solid #FD493E' : '1px solid #C4C4C4'}`,
                            background: `${activeTab === 'Tab3' ? 'rgba(253, 73, 62, 0.07)' : ''}`,
                            "&:hover": { border: '1px solid #FD493E', background: 'rgba(253, 73, 62, 0.07)' }
                        }}>Skill Provider Agent</Button>
                    </Stack>
                </Stack>
                <Stack>
                    {activeTab === 'Tab1' ? <LicenseAgency /> : ''}
                    {activeTab === 'Tab2' ? <GulfBaseCompany /> : ''}
                    {activeTab === 'Tab3' ? <SkillProviderFormTab /> : ''}
                </Stack>
            </Stack>
        </Stack>
    )
}

export default CompanytypeTabs
