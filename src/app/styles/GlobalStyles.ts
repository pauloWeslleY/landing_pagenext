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
      background-color: ${props => props.theme.colors.blue._500};
      border-radius: 10px;
    }

    ::-webkit-scrollbar-track {
      background-color: ${props => props.theme.colors.zinc._200};
    }
  }

  body {
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }

  button {
    cursor: pointer;
  }
`
