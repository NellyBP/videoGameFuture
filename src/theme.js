'use client'
import { createTheme } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    primary: {
      main: '#e50914', // Netflix red
      contrastText: '#fff', // white text for better readability on red background
    },
    secondary: {
      main: '#000', // black
    },
    background: {
      default: '#141414', // dark background, typical of Netflix
      paper: '#1f1f1f',
    },
    text: {
      primary: '#fff',
      secondary: '#e5e5e5',
    },
  },
  typography: {
    fontFamily: '"Helvetica Neue", Arial, sans-serif',
    h1: {
      fontWeight: 700,
    },
    // ... other typography settings
  },
  // You can also customize other aspects of the theme here
});

export default theme;
