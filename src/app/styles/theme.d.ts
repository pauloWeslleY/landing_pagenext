import 'styled-components'
import theme from './theme'

export type Theme = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {
    colors: {
      black: string
      white: string
      primary: string
      red: string
      zinc: {
        _950: string
        _900: string
        _800: string
        _700: string
        _600: string
        _500: string
        _400: string
        _300: string
        _200: string
        _100: string
        _50: string
      }
      gray: {
        _950: string
        _900: string
        _800: string
        _700: string
        _600: string
        _500: string
        _400: string
        _300: string
        _200: string
        _100: string
        _50: string
      }
      blue: {
        _950: string
        _900: string
        _800: string
        _700: string
        _600: string
        _500: string
        _400: string
        _300: string
        _200: string
        _100: string
        _50: string
      }
    }
  }
}
