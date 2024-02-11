import React, { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'

interface ThemeInterface {
  colors: {
    backgrounds: {
      standard: string
      moment: string
      modal: string
      modalBackdrop: string
    }
    text: {
      standard: string
      momentSubtext: string
      siteName: string
      underline: string
      modalImageText: string
      modalText: string
    }
    cta: string
  }
}

// const light: ThemeInterface = {
//   colors: {
//     backgrounds: {
//       standard: '#F1E4C3',
//       moment: '#fff',
//       modal: '#fff'
//     },
//     text: {
//       standard: '#444',
//       momentSubtext: '#888',
//       siteName: '#597E52',
//       underline: '#FFFFEC',
//       modalImageText: '#fff'
//     },
//     cta: '#597E52'
//   }
// }

const dark: ThemeInterface = {
  colors: {
    backgrounds: {
      standard: '#082032',
      moment: '#2C394B',
      modal: '#f3f3f3',
      modalBackdrop: '#082032'
    },
    text: {
      standard: '#ddd',
      momentSubtext: '#ddd',
      siteName: '#FF4C29',
      underline: '#FF4C29',
      modalImageText: '#fff',
      modalText: '#2C394B'
    },
    cta: '#FF4C29'
  }
}

const light: ThemeInterface = {
  colors: {
    backgrounds: {
      standard: '#fbe45b',
      moment: '#fff',
      modal: '#fff',
      modalBackdrop: '#fbe45b'
    },
    text: {
      standard: '#444',
      momentSubtext: '#888',
      siteName: '#a65852',
      underline: 'rgba(166, 208, 200, 1)',
      modalImageText: '#fff',
      modalText: '#444'
    },
    cta: '#a6d0c8'
  }
}

export const theme = { light, dark }

export type ThemeNames = 'light' | 'dark'
interface ThemeProps {
  children: ReactNode
  themeName: ThemeNames
}
const Theme = ({ children, themeName = 'light' }: ThemeProps) => {
  const activeTheme = theme[themeName]
  return <ThemeProvider theme={activeTheme}>{children}</ThemeProvider>
}

export default Theme
