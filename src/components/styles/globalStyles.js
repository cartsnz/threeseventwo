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

  /* Fonts */
  @font-face {
    font-family: "Barlow";
    src: url('../fonts/Barlow-Medium.ttf');
  }

  body {
    font-family: "Barlow", sans-serif;
    font-weight: normal;
    word-wrap: break-word;
  }

  /* Global styles */
  body {
    display: flex;
    flex-direction: column;
  }

  .container {
    padding: 0 30px 30px;
    margin-top: 110px;
    flex: 1 0 auto;
  }

  .medium-up--hide {
    @media (min-width: ${({theme}) => theme.mobile}) {
      display: none;
    }
  }


`

export default GlobalStyle;