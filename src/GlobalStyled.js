import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
    *{
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
    }
    :root{
        --primary:#8C11BE;
        --buttons: #a328d6;
        --white: #fff;
        --black: #000;
        --green: #03ac00;
        --red: #c70000;
    }
`
export default GlobalStyled;