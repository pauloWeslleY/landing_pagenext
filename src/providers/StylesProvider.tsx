'use client'
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'

import theme from '@/app/styles/theme'
import GlobalStyle from '@/app/styles/GlobalStyles'

export const StylesProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )
}
