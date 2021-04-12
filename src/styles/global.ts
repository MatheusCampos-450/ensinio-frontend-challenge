import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  :root {
    --background: #E5E5E5;
    --black: #130C25;
    --soft-black: #423D51;
    --water-green: #00E1E7;
    --purple: #432E98;
    --soft-purple: #5F41D9

  }

  @media(max-width: 1980px) {
    html {
      /* font-size: 81.25%; */
    }
  }

  @media(max-width: 1680px) {
    html {
      /* font-size: 78.125%; */
    }
  }

  @media(max-width: 1440px) {
    html {
      /* font-size: 75%; */
    }
  }

  @media(max-width: 1360px) {
    html {
      /* font-size: 68.75%; */
    }
  }

  @media(max-width: 1280px) {
    html {
      /* font-size: 62.5%; */
    }
  }

  @media(max-width: 1024px) {
    html {
      /* font-size: 56.25%; */
    }
  }

  @media(max-width: 960px) {
    html {
      /* font-size: 50%; */
    }
  }

  body {
    background: var(--background);
  }

  body, input, textarea, button {
    font: 400 16px "Inter", sans-serif;
  }

  button {
    cursor: pointer;
    outline: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyle;
