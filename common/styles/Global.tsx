import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }

  html,
  body {
    max-width: 100vw;
    overflow-x: hidden;
    font-family: Roboto, Inter, Lekton, Exo, "Exo 2", -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default Global;
