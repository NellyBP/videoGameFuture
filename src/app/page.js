"use client"

import { ThemeProvider } from '@mui/material/styles';
import theme from "../theme"

const MyApp = () => {
  return (
    <ThemeProvider theme={theme}>
      <p>Hello</p>
    </ThemeProvider>
  );
}

export default MyApp;
