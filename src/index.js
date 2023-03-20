import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material';
import { CssBaseline } from '@mui/material';


let theme = createTheme({
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderRadius: '8px', // custom border-radius value
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          height: '50px', // default height value
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme); // make theme responsive

theme = createTheme(theme, {
  components: {
    MuiInputBase: {
      styleOverrides: {
        input: {
          [theme.breakpoints.up('xs')]: {
            height: '10px', // height value for screens >= 600px
          },
          [theme.breakpoints.up('xl')]: {
            height: '20px',
          },
        },
      },
    },
  },
});

const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

