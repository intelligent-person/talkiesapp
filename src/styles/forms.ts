import styled from '@emotion/styled';
import { filterProperties } from './helpers';
import { css } from '@emotion/react';

export const Input = styled('input')`
  width: 100%;
  border: none;
  margin: 0;
  transition: all .2s linear, background 0ms;

  :focus-visible {
    outline: none;
  }

  ${({ theme }) => css`
    background: ${theme.forms.input.hover.background};
    font-family: ${theme.fontFamily};
    padding: ${theme.forms.input.sizes.default.padding};
    color: ${theme.forms.input.color};
    font-weight: ${theme.forms.input.fontWeight};

    font-size: ${theme.forms.input.sizes.default.fontSize};
    border-radius: ${theme.forms.input.sizes.default.borderRadius};

    @media (max-width: 600px) {
      font-size: ${theme.forms.input.sizes.small.fontSize};
      border-radius: ${theme.forms.input.sizes.small.borderRadius};
      padding: ${theme.forms.input.sizes.small.padding};
    }

    :-webkit-autofill {
      -webkit-box-shadow: 0 0 0 1000px ${theme.forms.input.background} inset !important;
    }
    
    :-webkit-autofill:hover,
    :-webkit-autofill:focus,
    :-webkit-autofill:active {
      -webkit-box-shadow: 0 0 0 1000px white inset !important;
    }
    
    :placeholder-shown:not(:focus) {
      background: ${theme.forms.input.background};
    }

    @media (min-width: 600px) {
      :hover {
        background: ${theme.forms.input.hover.background} !important;
        box-shadow: ${theme.forms.input.hover.boxShadow} !important;
      }
      :placeholder-shown:hover:not(:focus) + ${Label} {
        background: #FFFFFF !important;
      }
    }

    :focus {
      background: ${theme.forms.input.focus.background} !important;
      box-shadow: ${theme.forms.input.focus.boxShadow} !important;
      color: ${theme.forms.input.focus.color} !important;
    }
  `}
`;

export const Textarea = styled('textarea')``;

export const Label = styled('label')`
  
  ${({ theme }) => `
    font-family: ${theme.fontFamily};
    color: ${theme.forms.label.color};
    font-weight: ${theme.forms.label.fontWeight};
    
    font-size: ${theme.forms.label.sizes.default.fontSize};
    border-radius: ${theme.forms.label.sizes.default.borderRadius};
    padding: ${theme.forms.label.sizes.default.padding};
    
    @media(max-width: 600px) {
      font-size: ${theme.forms.label.sizes.small.fontSize};
      border-radius: ${theme.forms.label.sizes.small.borderRadius};
      padding: ${theme.forms.label.sizes.small.padding};
    }
  `}
`;

interface FormGroupProperties {
  invalid?: boolean
}

const FormGroupForwardProperties = new Set([
  'invalid'
]);

export const FormGroup = styled('div', {
  shouldForwardProp: filterProperties(FormGroupForwardProperties)
})<FormGroupProperties>`
  position: relative;
  margin-bottom: 35px;
  
  @media(max-width: 600px) {
    margin-bottom: 20px;
  }

  ${Label} {
    position: absolute;
    top: -15px;
    left: 40px;
    background: #FFFFFF;
    box-shadow: inset 0px 2.99387px 2.99387px rgba(0, 0, 0, 0.15);
    opacity: 0;
    cursor: text;
    
    @media(max-width: 600px) {
      top: -10px;
      left: 17px;
    }
  }

  ${Input}:not(:-webkit-autofill) + ${Label} {
    opacity: 1;
    transition: all .2s linear, background 0ms;
  }


  ${Textarea}:placeholder-shown:not(:focus) + ${Label},
  ${Input}:placeholder-shown:not(:focus) + ${Label} {
    top: 15px;
    left: 25px;
    padding: 0;
    background: #E7E7E7;
    box-shadow: none;
    font-weight: 200;
    font-size: 22px;
    color: #232323;

    @media(max-width: 600px) {
      top: 12px;
      left: 14px;
      font-weight: 300;
      font-size: 16px;
    }
  }

  ${Input}:not(:placeholder-shown):not(:focus) + ${Label} {
    opacity: 0 !important;
    top: 15px;
    left: 25px;
  }

  ${Textarea}:placeholder-shown::placeholder,
  ${Input}:placeholder-shown::placeholder {
    opacity: 0;
    color: #000000;
  }

  ${({ invalid }) => invalid && css`
    ${Input}:not(:-webkit-autofill),
    ${Input}:not(:placeholder-shown:not(:focus)):not(:-webkit-autofill) {
      color: rgba(185, 52, 52, 1) !important;
      background: #FFFFFF !important;
      box-shadow: inset -0.819857px -0.819857px 3.27943px rgba(0, 0, 0, 0.45) !important;

      @media (max-width: 600px) {
        box-shadow: inset -1.49693px -1.49693px 5.98773px rgba(0, 0, 0, 0.45); !important;
      }
    }
    
    ${Input}:-webkit-autofill,
    ${Input}:-webkit-autofill:focus,
    ${Input}:-webkit-autofill:active {
      -webkit-text-fill-color: rgba(185, 52, 52, 1) !important;
      -webkit-box-shadow: 0 0 0 1000px white inset !important;
    }
    
    ${Input}::placeholder {
      color: rgba(185, 52, 52, 1) !important;
    }
    
    ${Label}.valid {
      opacity: 0 !important;
    }
    
    ${Label}.invalid {
      opacity: 1 !important;
      top: 43px !important;
      box-shadow: inset 0px -2.99387px 1.49693px rgba(0, 0, 0, 0.25);
      color: rgba(185, 52, 52, 1) !important;
      
      @media(max-width: 600px) {
        top: 35px !important;
        box-shadow: inset 0px -1.63971px 0.819857px rgba(0, 0, 0, 0.25);
      }
    }

    ${Textarea}:placeholder-shown::placeholder,
    ${Input}:placeholder-shown::placeholder {
      opacity: 1;
    }
  `}
`;

export const SearchForm = styled('div')<FormGroupProperties>`
  position: relative;

  ${Input}::-webkit-search-decoration,
  ${Input}::-webkit-search-cancel-button,
  ${Input}::-webkit-search-results-button,
  ${Input}::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  ${Label} {
    position: absolute;
    top: 8px;
    right: 25px;
    padding: 0;
    left: initial;
    box-shadow: none;
    cursor: pointer;
    
    span {
      font-size: 40px;
    }
    
    div {
      display: none
    }
  }

  ${Input}:not(:-webkit-autofill) + ${Label} {
    opacity: 1;
    transition: all .2s linear, background 0ms;
  }


  ${Input}:placeholder-shown:not(:focus) + ${Label} {
    display: flex;
    align-items: center;
    top: 8px;
    right: 50%;
    left: initial;
    transform: translate(50%, 0);
    grid-gap: 5px;
    cursor: text;
    font-weight: 500;
    font-size: 20px;
    
    div {
      display: inline-flex;
    }
  }

  ${Textarea}:placeholder-shown::placeholder,
  ${Input}:placeholder-shown::placeholder {
    opacity: 0;
    color: #000000;
  }
`;
