import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, Stack } from '@mui/material';
import { Icon } from '@iconify/react';
import Image from '../../Image';


const DocumentsCard = ({ Data }) => {
    const [activeStep, setActiveStep] = useState(0);

    const handleBack = () => {
        setActiveStep((prevActiveStep) => (prevActiveStep === 0 ? Data.length - 1 : prevActiveStep - 1));
    };

    const handleNext = () => {
        setActiveStep((prevActiveStep) => (prevActiveStep === Data.length - 1 ? 0 : prevActiveStep + 1));
    };


    return (
        <Stack alignItems='center' justifyContent='center' sx={{
            position: 'relative', margin: 'auto', width: '95%',
        }}>
            <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', position: 'absolute', zIndex: 5 }}>
                <Button disabled={activeStep === 0} onClick={handleBack} sx={{ position: 'absolute', left: '15px' }}>
                    <Icon icon="bi:arrow-left-circle-fill" color='#FF1818' width='45px' />
                </Button>
                <Button disabled={activeStep === Data.length - 1} onClick={handleNext} sx={{ position: 'absolute', right: '15px' }}>
                    <Icon icon="bi:arrow-right-circle-fill" color='#FF1818' width='45px' />
                </Button>
            </Box>

            <Stack direction='row' gap='1rem' sx={{ width: '200%', py: '2rem'}}>
                {Data.map((item, index) => (
                    <Card key={index} elevation={4} sx={{ height: '167px', width: '252px', position: 'relative', overflow: 'hidden', borderRadius: '12px' }}>
                        <CardMedia
                            sx={{ position: 'absolute', bottom: 0, height: '100%', width: '100%', objectFit: 'cover' }}
                            image={item.backgroundImg}
                        />
                        <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'absolute', bottom: 0, bgcolor: 'white', width: '100%', height: '52px', paddingTop: '22px' }}>
                            <Box sx={{ display: 'flex', gap: '11px' }}>
                                <Icon icon="bxs:file-doc" height='26px' />
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                                    <Typography sx={{ fontWeight: '500', fontSize: '10px' }}>{item.docName}</Typography>
                                    <Typography sx={{ fontWeight: '500', fontSize: '8px', color: '#808080' }}>{item.docTitle}</Typography>
                                </Box>
                            </Box>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                                <Typography sx={{ fontWeight: '500', fontSize: '10px', color: '#FD493E' }}>{item.applicant}</Typography>
                                <Typography sx={{ fontWeight: '500', fontSize: '8px', color: '#455154' }}>{item.date}</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3px' }}>
                                <Image src={item.profilePhoto} alt='profilePicture' width='24px' />
                                <Typography sx={{ fontWeight: '500', fontSize: '8px' }}>{item.photoText}</Typography>
                            </Box>
                        </CardContent>
                    </Card>
                ))}
            </Stack>
        </Stack>
    )
}

export default DocumentsCard
