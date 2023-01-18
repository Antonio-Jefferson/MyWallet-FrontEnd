import styled from "styled-components"

export default function Header(){
    return  (
        <Logo>MyWallet</Logo>
    )
}

const Logo = styled.h1`
    margin-top: 60px;
    font-size: 32px;
    font-weight: 400;
    font-family: 'Saira Stencil One', cursive;
    color: var(--white);
`