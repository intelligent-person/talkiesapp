import styled from "@emotion/styled";
import {filterProperties} from "./helpers";

export const Input = styled('input')`
  width: 100%;
  border: none;
  transition: all .2s linear;

  :focus-visible {
    outline: none;
  }

  :-webkit-autofill {
    transition: all 5000s ease-in-out 0s;
  }

  ${({theme}) => `
    background: ${theme.forms.input.background};
    border-radius: ${theme.forms.input.borderRadius};
    padding: ${theme.forms.input.padding};
    color: ${theme.forms.input.color};
    font-weight: ${theme.forms.input.fontWeight};
    font-size: ${theme.forms.input.fontSize};
    line-height: ${theme.forms.input.lineHeight};
    font-family: ${theme.fontFamily};
    
    :hover, :focus-visible, :-webkit-autofill {
      background: ${theme.forms.input.hover.background};
      box-shadow: ${theme.forms.input.hover.boxShadow};
      font-weight: ${theme.forms.input.fontWeight};
      font-size: ${theme.forms.input.fontSize};
      line-height: ${theme.forms.input.lineHeight};
      font-family: ${theme.fontFamily};
    }
    
    :placeholder-shown:hover:not(:focus) + ${Label} {
        background: #FFFFFF !important;
      }
    
    :not(:placeholder-shown:not(:focus)) {
      background: ${theme.forms.input.focus.background} !important;
      box-shadow: ${theme.forms.input.focus.boxShadow} !important;
      color: ${theme.forms.input.focus.color} !important;
    }
  `}
`

export const Textarea = styled('textarea')``

export const Label = styled('label')`
  ${({theme}) => `
    font-family: ${theme.fontFamily};
  `}
`

interface FormGroupProps {
  invalid?: boolean
}

const FormGroupForwardProps = new Set([
  'invalid',
])

export const FormGroup = styled('div', {
  shouldForwardProp: filterProperties(FormGroupForwardProps)
})<FormGroupProps>`
  position: relative;
  margin-bottom: 35px;

  ${Label} {
    position: absolute;
    top: -20px;
    left: 37px;
    padding: 5px 8px;
    background: #FFFFFF;
    box-shadow: inset 0px 2.99387px 2.99387px rgba(0, 0, 0, 0.15);
    border-radius: 12px;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    color: #000000;
    opacity: 0;
  }

  ${Input}:not(:-webkit-autofill) + ${Label} {
    opacity: 1;
    transition: all .2s linear;
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
    line-height: 26px;
    color: #232323;
  }

  ${({invalid}) => invalid && `
     ${Input},
     ${Input}:not(:placeholder-shown:not(:focus)) {
        color: rgba(185, 52, 52, 1) !important;
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
     }
  `}
  ${Textarea}:placeholder-shown::placeholder,
  ${Input}:placeholder-shown::placeholder {
    opacity: 0;
    color: #000000;

    ${({invalid}) => invalid && `opacity: 1;`
    };
  }

`