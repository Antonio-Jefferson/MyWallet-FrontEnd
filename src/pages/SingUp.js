import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header"
export default function SingUp() {
    return (
        <ConetinerSingUp>
        <Header />
        <FormSingUp>
            <input type={"text"} placeholder="Nome" />
            <input type={"email"} placeholder="Email" />
            <input type={"password"} placeholder="Senha" />
            <input type={"password"} placeholder="Confirmar senha" />
            <button type="submit">Cadastrar</button>
        </FormSingUp>
        <Link to={"/"}><p>Já tem uma conta? Entre agora!</p></Link>
    </ConetinerSingUp>
)
}

const FormSingUp = styled.form`
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
const ConetinerSingUp = styled.div`
text-align: center;
p{
    text-align: none;
    color:var(--white);
}

`