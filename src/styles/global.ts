import { css } from '@emotion/react';

export const globalCSS = css`
  body {
    margin: 0;
    background: #FFFFFF;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  @font-face {
    font-family: 'Montserrat', sans-serif;
    font-weight: normal;
    font-style: normal;
  }
`;
