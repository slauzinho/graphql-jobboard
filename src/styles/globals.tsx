import { createGlobalStyle } from 'styled-components';
import styledNormalize from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
    ${styledNormalize}

    html {
    box-sizing: border-box;
    font-size: 62.5%;
    height:100%;
  }

  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  body {
    font-family: 'Source Sans Pro', sans-serif;
    line-height: 1.7;
    font-size: 1.6rem;
    font-weight: 400;
    /* -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale; */
    height:100%;
  }

  h3 {
      font-size: 1.6rem;
      line-height: 1.38;
      font-weight: 400;
  }
`;
