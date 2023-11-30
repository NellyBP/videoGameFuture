"use client"
import './globals.css'
import { ThemeProvider } from '@emotion/react'
import theme from "../theme"
import NavBar from './clientComponents/NavBar'


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeProvider theme={theme}>
        <body>
          <NavBar />
          {children}
        </body>
      </ThemeProvider>
    </html>
  )
}
