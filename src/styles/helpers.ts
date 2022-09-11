import { css } from '@emotion/react';
import facepaint from 'facepaint';
import {theme} from "./theme";

export const mq = facepaint(Object.values(theme.breakpoints).map(
  breakpoint => `@media(min-width: ${breakpoint}px)`
), { overlap: true });

export const display = display => mq({
  display
});

export const visibility = visibility => mq({
  visibility
});

export const verticalAlign = align => mq({
  verticalAlign: align
});

export const textAlign = align => mq({
  textAlign: align
});

export const bgc = color => mq({
  backgroundColor: color
});

export const br = radius => mq({
  borderRadius: radius
});

export const border = border => mq({
  border
});

export const borderTop = borderTop => mq({
  borderTop
});

export const borderBottom = borderBottom => mq({
  borderBottom
});

export const borderLeft = borderLeft => mq({
  borderLeft
});

export const borderRight = borderRight => mq({
  borderRight
});

export const borderColor = borderColor => mq({
  borderColor
});

export const left = left => mq({ left });

export const right = right => mq({ right });

export const top = top => mq({ top });

export const bottom = bottom => mq({ bottom });

export const noResize = css`
  resize: none;
`;

export const relative = css`
  position: relative;
`;

export const absolute = css`
  position: absolute;
`;

export const fixed = css`
  position: fixed;
`;

export const sticky = css`
  position: sticky;
`;

export const zIndex = index => mq({
  zIndex: index
});

export const overflowHidden = css`
  overflow: hidden;
`;

export const overflowXauto = css`
  overflow-x: auto;
`;

export const overflowYauto = css`
  overflow-y: auto;
`;

export const circle = css`
  border-radius: 50% !important;
`;

export const floatLeft = css`
  float: left;
`;

export const floatRight = css`
  float: right;
`;

export function filterProperties (propertiesSet) {
  return property => !propertiesSet.has(property);
}

export const cursorPointer = css`
  cursor: pointer;
`;

export const gridGap = gap => mq({
  gridGap: gap
});

export const opacity = opacity => mq({ opacity });

export function hexToRGB (hex, opacity = 1) {
  let r = 0;
  let g = 0;
  let b = 0;
  
  if (hex.length === 4) {
    r = Number.parseInt(hex[1] + hex[1], 16);
    g = Number.parseInt(hex[2] + hex[2], 16);
    b = Number.parseInt(hex[3] + hex[3], 16);
  } else if (hex.length === 7) {
    r = Number.parseInt(hex[1] + hex[2], 16);
    g = Number.parseInt(hex[3] + hex[4], 16);
    b = Number.parseInt(hex[5] + hex[6], 16);
  }
  
  return `rgb(${r}, ${g}, ${b}, ${opacity})`;
}