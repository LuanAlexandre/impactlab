import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body {
    overflow-x: hidden;
  }

  * {
    max-width: 100%;
    box-sizing: border-box;
  }
`;
