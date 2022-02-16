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

  .overflow-hidden {
    overflow: hidden;
  }

  .container {
    padding: 2rem;
    margin-top: 110px;
    flex: 1 0 auto;
  }

  // Check this
  .container.relative {
    position: relative;
  }

  .medium-up--hide {
    @media (min-width: ${({theme}) => theme.mobile}) {
      display: none;
    }
  }

  .background {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 300px;
    background: ${({theme}) => theme.primaryDark};
    height: 100vh;
  }

  .refresh {
    padding: 10px;
    position: absolute;
    background: rgba(0, 0, 0, 0.4);
    border-radius: 10px;
    width: 20px;
    height: 20px;
    top: 10px;
    right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .mobile-nav-spacer {
    flex: 0 1 33%;
  }

`

export default GlobalStyle;