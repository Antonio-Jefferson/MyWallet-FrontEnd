import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import InformationUser from "../context/auth";

export default function NewEntrace() {
    const navegation = useNavigate()
    const {user} = useContext(InformationUser)
    const [entrace, setEntrace] = useState({
        value: "",
        description: "",
        type: "entrace"
    })

    const hendleForm = (e, key)=>{
        setEntrace({...entrace, [key]: e.target.value})
    }
    const headers = {
        headers: { Authorization: `Bearer ${user.token}` }
      };
    const sendForm = async (e)=>{
        e.preventDefault()
        try {
            const url = "https://mywallet-api-jcbx.onrender.com/wallet"
            await axios.post(url, entrace, headers)
            navegation('/home')
        } catch (error) {
            alert('ERROR: ' + error.response.data.message)
        }
    }
    return (
        <ConteinerEntrace>
            Nova entrada
            <Form onSubmit={(e)=> sendForm(e)}>
                <input 
                type={"number"} 
                placeholder="Valor" 
                value={entrace.value}
                onChange={(e)=> hendleForm(e, "value")}
                required
                />
                <input 
                type={"text"} 
                placeholder="Descrição" 
                value={entrace.description}
                onChange={(e)=> hendleForm(e, "description")}
                required
                />
                <button type="submit">Salvar entrada</button>
            </Form>
        </ConteinerEntrace>
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
}
`
const ConteinerEntrace = styled.div`
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