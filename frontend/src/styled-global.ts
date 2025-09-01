import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    font-family: 'Inter', Arial, Helvetica, sans-serif;
  }

  body {
    background-color: #f8f9fa;
    color: #22223b;
    min-height: 100vh;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  button, input, textarea, select {
    font-family: inherit;
    font-size: 1rem;
    outline: none;
  }

  a {
    color: inherit;
  }
`;
