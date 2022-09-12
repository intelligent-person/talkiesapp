import { css } from '@emotion/react';
import { mq } from './helpers';

export const textNowrap = css`
  white-space: nowrap;
`;

export const bold = css`
  font-weight: bold !important;
`;

export const textCenter = css`
  text-align: center !important;
`;

export const textDecoration = decoration => mq({
  textDecoration: decoration
});

export const textTransform = transform => mq({
  textTransform: transform
});

export const fontWeight = fontWeight => mq({ fontWeight });

export const lineHeight = lineHeight => mq({ lineHeight });

export const textDecorationNone = css`
  &,
  :hover {
    text-decoration: none;
  }
`;

export const textReset = css`
  color: inherit !important;
`;

export const textWhite = css`
  &,
  &::placeholder {
    color: #fff !important;
  }
`;

export const fontSize = fontSize => mq({ fontSize });

export const fontStyle = fontStyle => mq({ fontStyle });

export const letterSpacing = letterSpacing => mq({ letterSpacing });

export const ellipsis = css`
  text-overflow: ellipsis;
`;

export const color = color => mq({ color });

export const uppercase = css`
  &, button {
    text-transform: uppercase !important;
  }
`;

export const capitalize = css`
  &, button {
    text-transform: capitalize !important;
  }
`;
export const whiteSpace = whiteSpace => mq({ whiteSpace });
