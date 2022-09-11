import styled from '@emotion/styled'
import { filterProperties } from './helpers'

interface NavProperties {
  withImage?: boolean
}

const NavForwardProperties = new Set([
  'withImage'
])

export const Nav = styled('a', {
  shouldForwardProp: filterProperties(NavForwardProperties)
})<NavProperties>`
  font-weight: 500;
  font-size: 22px;
  padding: 5px;
  text-decoration: none;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-color: transparent;
  cursor: pointer;

  :hover {
    color: #FFFFFF;
    border-image: linear-gradient(to right, rgba(231, 231, 231, 0), rgba(231, 231, 231, 1), rgba(231, 231, 231, 0)) 100% 0;
  }
  
  ${({ theme }) => `
    color: ${theme.colors.primary};
    font-family: ${theme.fontFamily};
  `}
  
  ${({ withImage }) => withImage && `
    display: flex;
    padding: 0;
    width: fit-content;
    align-items: center;
    margin: 0 auto;
  `}
`

interface ButtonProperties {
  primary?: boolean
  secondary?: boolean
}

const ButtonForwardProperties = new Set([
  'primary',
  'secondary'
])

export const Button = styled('button', {
  shouldForwardProp: filterProperties(ButtonForwardProperties)
})<ButtonProperties>`
  border: none;
  cursor: pointer;
  transition: all .2s linear;
  font-family: ${({ theme }) => theme.fontFamily};

  :focus-visible {
    outline: none;
  }
  
  :active {
    filter: none;
  }
  
  ${({ theme, primary }) => primary && `
      background: ${theme.buttons.primary.background};
      color: ${theme.buttons.primary.color};
      filter: ${theme.buttons.primary.filter};
      border-radius: ${theme.buttons.primary.sizes.default.borderRadius};
      padding: ${theme.buttons.primary.sizes.default.padding};
      font-size: ${theme.buttons.primary.sizes.default.fontSize};
      font-weight: ${theme.buttons.primary.sizes.default.fontWeight};
      border: ${theme.buttons.primary.border};
      
      :hover, :focus-visible {
        background: ${theme.buttons.primary.hover.background};
        filter: ${theme.buttons.primary.hover.filter};
        boxShadow: ${theme.buttons.primary.hover.boxShadow};
        border: ${theme.buttons.primary.hover.border};
      }
      
      :active {
        background: ${theme.buttons.primary.active.background};
        border: ${theme.buttons.primary.active.border};
      }
  `}
  
  ${({ theme, secondary }) => secondary && `
      background: ${theme.buttons.secondary.background};
      color: ${theme.buttons.secondary.color};
      border-radius: ${theme.buttons.secondary.sizes.default.borderRadius};
      padding: ${theme.buttons.secondary.sizes.default.padding};
      font-size: ${theme.buttons.secondary.sizes.default.fontSize};
      font-weight: ${theme.buttons.secondary.sizes.default.fontWeight};
      
      :hover, :focus-visible {
        background: ${theme.buttons.secondary.hover.background};
        boxShadow: ${theme.buttons.secondary.hover.boxShadow};
      }
      
      :active {
        background: ${theme.buttons.secondary.active.background};
        color: ${theme.buttons.secondary.active.color};
      }
  `}
`
