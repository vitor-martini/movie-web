import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    color: ${({ theme }) => theme.COLORS.WHITE};
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-family: "Roboto Slab", serif;
    font-size: 1.6rem;
    border: none;
    outline: none;
  }
  
  button:focus {
    outline: 1px solid ${({ theme }) => theme.COLORS.WHITE };
  }
  
  input::placeholder, textarea::placeholder, svg {
    color: ${({ theme }) => theme.COLORS.GRAY };
  }

  a {
    text-decoration: none;
    outline: none;
  }
  
  a:focus {
    font-weight: 700;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover {
    filter: brightness(0.9);
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }
`;