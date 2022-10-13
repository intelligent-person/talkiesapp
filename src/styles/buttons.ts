import styled from '@emotion/styled';
import { br, filterProperties } from './helpers';
import { css } from '@emotion/react';
import { fadeIn, fadeOut } from './animations';
import { fontSize } from './text';
import { p } from './paddings';

interface NavProperties {
  withIcon?: boolean
  tab?: boolean
}

const NavForwardProperties = new Set([
  'withIcon',
  'tab'
]);

export const Nav = styled('a', {
  shouldForwardProp: filterProperties(NavForwardProperties)
})<NavProperties>`
  font-weight: 500;
  padding: 5px;
  text-decoration: none;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-color: transparent;
  cursor: pointer;
  ${[
    fontSize(['12px', '16px', '20px'])
  ]}

  :hover {
    color: #FFFFFF;
    border-image: linear-gradient(to right, rgba(231, 231, 231, 0), rgba(231, 231, 231, 1), rgba(231, 231, 231, 0)) 100% 0;
  }
  
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-family: ${theme.fontFamily};
  `}
  
  ${({ withIcon }) => withIcon && css`
    display: flex;
    padding: 0;
    width: fit-content;
    align-items: center;
    margin: 0 auto;
    grid-gap: 5px;
    
    span, svg {
      ${[fontSize(['22px', '36px'])]}
    }
  `}
  
  ${({ tab }) => tab && css`
    display: flex;
    width: fit-content;
    align-items: center;
    margin: 0 auto;
    grid-gap: 5px;
    border-radius: 12px;
    transition: all .3s linear;
    ${[
    p(['2px 4px', '5px 8px', '5px 16px']),
    br([7, 10, 12])
  ]}

    .hover {
      display: none;
      ${fadeIn};
    }
    
    :hover {
      background: rgba(231, 231, 231, 0.25);
      border-image: none;
      
      span {
        display: none;
        ${fadeOut};
      }
      
      .hover {
        display: block;
      }
    }
  `}
`;

interface ButtonProperties {
  primary?: boolean
  secondary?: boolean
  watch?: boolean

  withIcon?: boolean
}

const ButtonForwardProperties = new Set([
  'primary',
  'secondary',
  'watch',

  'withIcon'
]);

export const Button = styled('button', {
  shouldForwardProp: filterProperties(ButtonForwardProperties)
})<ButtonProperties>`
  border: none;
  cursor: pointer;
  transition: all .1s linear;
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
      
      @media (min-width: 600px) {
        :hover, :focus-visible {
          background: ${theme.buttons.primary.hover.background};
          filter: ${theme.buttons.primary.hover.filter};
          boxShadow: ${theme.buttons.primary.hover.boxShadow};
          border: ${theme.buttons.primary.hover.border};
        }
      }
      
      :active {
        background: ${theme.buttons.primary.active.background};
        border: ${theme.buttons.primary.active.border};
      }
      
      @media (max-width: 600px) {
        border-radius: ${theme.buttons.primary.sizes.small.borderRadius};
        padding: ${theme.buttons.primary.sizes.small.padding};
        font-size: ${theme.buttons.primary.sizes.small.fontSize};
        font-weight: ${theme.buttons.primary.sizes.small.fontWeight};
      }
  `}
  
  ${({ theme, secondary }) => secondary && `
      background: ${theme.buttons.secondary.background};
      color: ${theme.buttons.secondary.color};
      border-radius: ${theme.buttons.secondary.sizes.default.borderRadius};
      padding: ${theme.buttons.secondary.sizes.default.padding};
      font-size: ${theme.buttons.secondary.sizes.default.fontSize};
      font-weight: ${theme.buttons.secondary.sizes.default.fontWeight};
      
      @media (min-width: 600px) {
        :hover, :focus-visible {
          background: ${theme.buttons.secondary.hover.background};
          boxShadow: ${theme.buttons.secondary.hover.boxShadow};
        }
      }
      
      :active {
        background: ${theme.buttons.secondary.active.background};
        color: ${theme.buttons.secondary.active.color};
      }
      
      @media (max-width: 600px) {
        border-radius: ${theme.buttons.secondary.sizes.small.borderRadius};
        padding: ${theme.buttons.secondary.sizes.small.padding};
        font-size: ${theme.buttons.secondary.sizes.small.fontSize};
        font-weight: ${theme.buttons.secondary.sizes.small.fontWeight};
      }
  `}
  
  ${({ theme, watch }) => watch && `
      background: ${theme.buttons.watch.background};
      color: ${theme.buttons.watch.color};
      border: ${theme.buttons.watch.border};
      border-radius: ${theme.buttons.watch.sizes.default.borderRadius};
      padding: ${theme.buttons.watch.sizes.default.padding};
      font-size: ${theme.buttons.watch.sizes.default.fontSize};
      font-weight: ${theme.buttons.watch.sizes.default.fontWeight};
      
      :active {
        background: ${theme.buttons.watch.active.background};
        color: ${theme.buttons.watch.active.color};
        border: ${theme.buttons.watch.active.border};
      }
      
      @media (min-width: 600px) {
        :hover, :focus-visible {
          background: ${theme.buttons.watch.hover.background};
        }
      }
      
      @media (max-width: 600px) {
        border-radius: ${theme.buttons.watch.sizes.small.borderRadius};
        padding: ${theme.buttons.watch.sizes.small.padding};
        font-size: ${theme.buttons.watch.sizes.small.fontSize};
        font-weight: ${theme.buttons.watch.sizes.small.fontWeight};
      }
  `}
  
  ${({ withIcon }) => withIcon && `
      display: flex;
      justify-content: space-between;
      align-items: center;
      
      svg {
        width: 18px !important;
        height: 18px !important;
        
        @media (min-width: 600px) {
          width: 33px !important;
          height: 33px !important;
        }
      }
  `}
`;
