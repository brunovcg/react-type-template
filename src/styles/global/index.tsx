import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

    :root {
        --white: #fff;
        --black: #000;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
    }

    body {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    a {
        text-decoration: none;
    }

    button {
      cursor: pointer;
    }
`
