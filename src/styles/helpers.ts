import { css } from '@emotion/react';
import facepaint from 'facepaint';
import { theme } from './theme';

export type OnlyStrings = string | string[]
export type AllArguments = number | number[] | OnlyStrings

export const mq = facepaint(Object.values(theme.breakpoints).map(
  breakpoint => `@media(min-width: ${breakpoint}px)`
), { overlap: true });

export const display = (display: OnlyStrings) => mq({
  display
});

export const visibility = (display: OnlyStrings) => mq({
  visibility
});

export const verticalAlign = (align: OnlyStrings) => mq({
  verticalAlign: align
});

export const textAlign = (align: OnlyStrings) => mq({
  textAlign: align
});

export const bgc = (color: OnlyStrings) => mq({
  backgroundColor: color
});

export const br = (radius: AllArguments) => mq({
  borderRadius: radius
});

export const border = (display: OnlyStrings) => mq({
  border
});

export const borderTop = (display: OnlyStrings) => mq({
  borderTop
});

export const borderBottom = (display: OnlyStrings) => mq({
  borderBottom
});

export const borderLeft = (display: OnlyStrings) => mq({
  borderLeft
});

export const borderRight = (display: OnlyStrings) => mq({
  borderRight
});

export const borderColor = (display: OnlyStrings) => mq({
  borderColor
});

export const left = (left: AllArguments) => mq({ left });

export const right = (right: AllArguments) => mq({ right });

export const top = (top: AllArguments) => mq({ top });

export const bottom = (bottom: AllArguments) => mq({ bottom });

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

export const zIndex = (index: AllArguments) => mq({
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

export function filterProperties (propertiesSet: any) {
  return (property: string) => !propertiesSet.has(property);
}

export const cursorPointer = css`
  cursor: pointer;
`;

export const gridGap = (gap: AllArguments) => mq({
  gridGap: gap
});

export const opacity = (opacity: AllArguments) => mq({ opacity });

export function hexToRGB (hex: string, opacity: number = 1) {
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
