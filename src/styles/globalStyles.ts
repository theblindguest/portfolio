import { createGlobalStyle } from 'styled-components'

// https://colorswall.com/palette/108603

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #fbe45b;
    color: #444;
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    /* prevents page from bouncing when scrolling above/below the start/end of the page */
    overscroll-behavior-y: none;
  }
`

export default GlobalStyle
