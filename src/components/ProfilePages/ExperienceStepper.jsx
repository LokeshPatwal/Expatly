import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import Rating from '@mui/material/Rating';


const theme = createTheme({
    components: {
        MuiStepLabel: {
            styleOverrides: {
                label: {
                    fontWeight: '700',
                    fontSize: '14px',
                    color: '#1F202A',
                },
            },
        },
    },
});



export default function ExperienceStepper({ Data }) {

    const CustomStepIcon = ({ index, Data }) => {
        const image = Data[index].image;

        return (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Avatar src={image} alt='Logo' sx={{ width: 35, height: 35 }} />
            </Box>
        );
    };
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ px: '2rem', py: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Stepper orientation="vertical">
                    {
                        Data.map((step, index) => (
                            <Step key={index} sx={{ display: 'flex' }}>
                                <StepLabel StepIconComponent={index === 0 ? () => <CustomStepIcon index={index} Data={Data} /> : CircleOutlinedIcon}>
                                    <Box sx={{ ml: '1rem' }}>
                                        <Typography>{step.label}</Typography>
                                        <Box display='flex' gap='10px'>
                                            <Typography sx={{ display: 'inline', color: '#808080', fontWeight: '700', fontSize: '12px' }}>
                                                {step.companyname}</Typography>
                                            <Typography sx={{ display: 'inline', color: '#D9D9D9', fontWeight: '700', fontSize: '12px' }}>
                                                {step.city}</Typography>
                                        </Box>
                                        <Typography sx={{ color: '#C4C4C4', fontWeight: '400', fontSize: '12px' }}>{step.timeperiod}</Typography>
                                    </Box>
                                </StepLabel>
                            </Step>
                        ))
                    }
                </Stepper>
                <Box>
                    <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                    <Typography sx={{ color: '#787885', fontWeight: '400', fontSize: '12px' }}>4.1 Rating</Typography>
                </Box>
            </Box>
        </ThemeProvider>
    );
}