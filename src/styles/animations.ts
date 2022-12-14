import { css, keyframes } from '@emotion/react';

export const animationDuration = '.5s';

export const animated = css`
  animation-duration: ${animationDuration};
  animation-fill-mode: both;

  @media print, (prefers-reduced-motion: reduce) {
    animation-duration: 1ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 1ms !important;
  }
`;

export const toLeftAnimation = keyframes`
  from {
    left: 0;
    transform: translateX(0);
  }
  
  to {
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const fadeInAnimation = keyframes`
  from {
    opacity: .3;
  }

  to {
    opacity: 1;
  }
`;

export const fadeIn = css`
  animation: ${fadeInAnimation};

  ${animated}
`;

export const fadeOutAnimation = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

export const fadeOut = css`
  animation: ${fadeOutAnimation};

  ${animated}
`;
