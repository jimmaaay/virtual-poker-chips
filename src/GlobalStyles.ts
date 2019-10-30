import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    line-height: 1.5;
  }

  body {
    font-size: 1.6rem;
    background: #333;
    color: #fff;
    margin: 0;
  }

  p {
    margin: 0 0 2.5rem;
  }
`;

export default GlobalStyles;