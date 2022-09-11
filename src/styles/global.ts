import {css} from "@emotion/react";

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
    font-family: "SF UI Display";
    src: url('../../public/assets/fonts/FontsFree-Net-SF-UI-Display-Regular-1.ttf');
    font-weight: normal;
    font-style: normal;
  }
`