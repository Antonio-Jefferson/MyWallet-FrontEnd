import Header from "../components/Header"
import styled from "styled-components"
import { useState } from "react"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
export default function SingUp() {
    const navegation = useNavigate()
    const [registration, setRegistration] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const registerAccount = (e, key) => {
        setRegistration({ ...registration, [key]: e.target.value })
    }

    const posInformationUser = async (e) => {
        e.preventDefault()
        try {
            const url = "http://localhost:5000/sing-up"
            await axios.post(url, registration)
            navegation("/")  
        } catch (error) {
            alert(error.message)
        }
    }

    return (
        <ConetinerSingUp>
            <Header />
            <FormSingUp onSubmit={(e) => posInformationUser(e)}>
                <input
                    type={"text"}
                    placeholder={"Nome"}
                    value={registration.name}
                    onChange={(e) => registerAccount(e, 'name')}
                    required
                />
                <input
                    type={"email"}
                    placeholder={"Email"}
                    value={registration.email}
                    onChange={(e) => registerAccount(e, 'email')}
                    required
                />
                <input
                    type={"password"}
                    placeholder={"Senha"}
                    value={registration.password}
                    onChange={(e) => registerAccount(e, 'password')}
                    required
                />
                <input
                    type={"password"}
                    placeholder={"confirmar senha"}
                    value={registration.confirmPassword}
                    onChange={(e) => registerAccount(e, 'confirmPassword')}
                    required
                />
                <button type="submit">Cadastrar</button>
            </FormSingUp>
            <Link to={"/"}><p>Já possui conta? Faça login!</p></Link>
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