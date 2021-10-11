import { createGlobalStyle } from 'styled-components'

export const theme = {
  colors: {
    purple: '#CAB8FF',
    pink: '#EB92BE',
    red: '#ff6a85',
    yellow: '#FFEF78',
    darkBlue: '#A8E7E9',
    lightBlue: '#B1FFFD',
    green: '#C1FFD7',
    gray: '#333333',
    black: '#141414',
  },
  zIndex: {
    base: 0,
    top: 10,
    modal: 100
  }
}

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 16px;
    font-family: 'Noto Sans Display', sans-serif;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body, h1, h2, h3, h4, h5, h6, p, ol, ul {
    margin: 0;
    padding: 0;
    font-weight: normal;
  }

  ol, ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`
