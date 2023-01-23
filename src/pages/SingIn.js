import axios from "axios";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header"
import InformationUser from "../context/auth";

export default function SingIn() {
    const { setUser } = useContext(InformationUser);
    const navegation = useNavigate()
    const [infUser, setInfUser] = useState({
        email: "",
        password: ""
    })

    const hendleLogin = (e, key) => {
        setInfUser({ ...infUser, [key]: e.target.value })
    }

    const singInForm = async (e) => {
        e.preventDefault()

        try {
            const url = "https://mywallet-api-jcbx.onrender.com/sing-in";
            const promise = await axios.post(url, infUser)
            setUser(promise.data)
            navegation("/home")
        } catch (error) {
            alert('ERROR: ' + error.response.data.message)
        }
    }
    return (
        <ConteinerSingIn>
            <Header />
            <FormSingIn onSubmit={(e) => singInForm(e)}>
                <input
                    type={"email"}
                    placeholder="Email"
                    value={infUser.email}
                    required
                    onChange={(e) => hendleLogin(e, 'email')}
                />
                <input
                    type={"password"}
                    placeholder="Senha"
                    value={infUser.password}
                    required
                    onChange={(e) => hendleLogin(e, 'password')}
                />
                <button type="submit">Entrar</button>
            </FormSingIn>
            <Link to={"/cadastro"}>Primeira vez? Cadastre-se!</Link>
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