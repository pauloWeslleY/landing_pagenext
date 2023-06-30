import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    ::-webkit-scrollbar {
      width: 10px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: ${props => props.theme.colors.primary};
      border-radius: 10px;
    }

    ::-webkit-scrollbar-track {
      background-color: ${props => props.theme.colors.gray._900};
    }
  }

  body {
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }
`
