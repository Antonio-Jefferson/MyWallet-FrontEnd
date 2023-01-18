import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header"
export default function SingIn() {
    return (
        <ConteinerSingIn>
            <Header />
            <FormSingIn>
                <input type={"email"} placeholder="Email" />
                <input type={"password"} placeholder="Senha" />
                <Link to={"/home"}><button type="submit">Entrar</button></Link>
            </FormSingIn>
            <Link to={"/cadastro"}><p>Primeira vez? Cadastre-se!</p></Link>
        </ConteinerSingIn>
    )
}

const FormSingIn = styled.form`
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin: 24px 0px 36px 0px;
    input{
        width:326px;
        height: 58px;
        padding: 17px 15px;
        background-color: #fff;
        border: none;
        border-radius: 5px;
    }
    ::placeholder{
        font-family: 'Raleway';
        font-weight: 400;
        font-size: 20px;
    }
    button{
        width:326px;
        height: 46px;
        border: none;
        background-color: var(--buttons);
        font-family: 'Raleway';
        font-weight: 700;
        font-size: 20px;
        color: var(--white);
        border-radius: 5px;
    }
`
const ConteinerSingIn = styled.div`
    text-align: center;
    p{
        text-align: none;
        color:var(--white);
    }

`