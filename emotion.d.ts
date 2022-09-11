import '@emotion/react'

type ThemeType = typeof theme

declare module '@emotion/react' {
  export interface Theme extends ThemeType {}
}

// You are also able to use a 3rd party theme this way:
import '@emotion/react'
import { LibTheme } from 'some-lib'
import {theme} from "./src/styles/theme";

declare module '@emotion/react' {
  export interface Theme extends LibTheme {}
}