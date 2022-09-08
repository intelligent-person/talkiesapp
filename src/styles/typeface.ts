import styled from "@emotion/styled";

export const H1 = styled('h1')`
  ${props => `
    color: ${props.theme.typeface.h1.color};
    font-size: ${props.theme.typeface.h1.fontSize};
    font-weight: ${props.theme.typeface.h1.fontWeight};
    line-height: ${props.theme.typeface.h1.lineHeight};
    font-family: ${props.theme.fontFamily};
    margin: ${props.theme.typeface.margin};
  `}
`