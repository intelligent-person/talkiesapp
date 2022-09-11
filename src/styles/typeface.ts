import styled from "@emotion/styled";

export const H1 = styled('h1')`
  ${({theme}) => `
    color: ${theme.typeface.h1.color};
    font-size: ${theme.typeface.h1.fontSize};
    font-weight: ${theme.typeface.h1.fontWeight};
    line-height: ${theme.typeface.h1.lineHeight};
    font-family: ${theme.fontFamily};
    margin: ${theme.typeface.margin};
  `}
`
export const H4 = styled('h4')`
  ${({theme}) => `
    color: ${theme.typeface.h4.color};
    font-size: ${theme.typeface.h4.fontSize};
    font-weight: ${theme.typeface.h4.fontWeight};
    line-height: ${theme.typeface.h4.lineHeight};
    font-family: ${theme.fontFamily};
    margin: ${theme.typeface.margin};
  `}
`
export const H6 = styled('h4')`
  ${({theme}) => `
    color: ${theme.typeface.h6.color};
    font-size: ${theme.typeface.h6.fontSize};
    font-weight: ${theme.typeface.h6.fontWeight};
    line-height: ${theme.typeface.h6.lineHeight};
    font-family: ${theme.fontFamily};
    margin: ${theme.typeface.margin};
  `}
`