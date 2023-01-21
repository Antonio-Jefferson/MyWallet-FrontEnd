import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import InformationUser from "../context/auth";

export default function NewExit() {
    const {user} = useContext(InformationUser)
    const navegation = useNavigate()
    const [exit, setExit] = useState({
        value: "",
        description: "",
        type: "exit"
    })
    const headers = {
        headers: { Authorization: `Bearer ${user.token}` }
      };
    const hendlEnxitForm = (e, key)=>{
        setExit({...exit, [key]: e.target.value})
    }

    const sendExitForm = async (e)=>{
        e.preventDefault()
        try {
            const url = "http://localhost:5000/wallet"
            await axios.post(url, exit, headers)
            navegation('/home')
        } catch (error) {
            alert('ERROR: ' + error.response.data.message)
        }
    }
    return (
        <ConteinerExit>
        Nova saída
        <Form onSubmit={(e)=> sendExitForm(e)}>
            <input 
            type={"number"}
             placeholder="Valor" 
             value={exit.value}
             onChange={(e)=> hendlEnxitForm(e, "value")}
             />
            <input 
            type={"text"} 
            placeholder="Descrição" 
            value={exit.description}
             onChange={(e)=> hendlEnxitForm(e, "description")}
            />
            <button type="submit">Salvar saída</button>
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