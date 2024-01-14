import { createGlobalStyle } from 'styled-components'
import { ThemeNames, theme } from './themes'

// https://colorswall.com/palette/108603

const GlobalStyle = createGlobalStyle<{ $themeName: ThemeNames }>`
  body {
    background-color: ${(props) =>
      theme[props.$themeName].colors.backgrounds.standard};
    color: ${(props) => theme[props.$themeName].colors.text.standard};
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    /* prevents page from bouncing when scrolling above/below the start/end of the page */
    overscroll-behavior-y: none;
  }
`

export default GlobalStyle
