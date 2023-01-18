import { Link } from "react-router-dom";
import styled from "styled-components";

export default function NewExit() {
    return (
        <ConteinerExit>
        Nova saída
        <Form>
            <input type={"number"} placeholder="Valor" />
            <input type={"text"} placeholder="Descrição" />
            <Link to={"/home"}><button type="submit">Salvar saída</button></Link>
        </Form>
    </ConteinerExit>
)
}

const Form = styled.form`
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
const ConteinerExit = styled.div`
    width:375px;
    height: 100vh;
    padding: 24px;
    display: flex;
    flex-direction:column;
    justify-content: flex-start;
    font-family: 'Raleway';
    font-weight: 700;
    font-size: 26px;
    color: var(--white);
    p{
        text-align: none;
        color:var(--white);
    }   

`