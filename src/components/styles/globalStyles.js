import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  /* CSS RESET */
  *, *::before, *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
  }

  html, body, #___gatsby {
    height: 100%;
  }

  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  input, button, textarea, select {
    font: inherit;
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }

  #root, #___gatsby {
    isolation: isolate;
  }

  /* CSS VARIABLES */
  :root {
    --color-primary: #3e5589;
    --px1: 1rem;
    --px2: 2rem;
    --mobile-width: 576px;
  }
`

export default GlobalStyle;