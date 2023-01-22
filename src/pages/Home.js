import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AiOutlineExport, AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ListTransaction from "../components/ListTransaction";
import InformationUser from "../context/auth";

export default function Home() {
    const { user } = useContext(InformationUser)
    const [transactions, setTransactions] = useState([]);
    const [grandTotal, setGrandTotal] = useState(0)
    const headers = {
        headers: { Authorization: `Bearer ${user.token}` }
      };
    useEffect(() => {
        async function getUserTransaction() {
            try {
                const url = 'http://localhost:5001/wallet'
                const promise = await axios.get(url, headers)
                console.log(promise.data);
                setTransactions(promise.data);
                balance(promise.data)
            } catch (error) {
                alert('Ops! Ocorreu erro! Tente novamente!');
            }
        } 
        getUserTransaction();
    }, []);
    function balance(dados){
        let entrace = 0;
        let exit = 0;
        let GrandTotal
        dados.map((e)=> {
            if(e.type === "entrace"){
                entrace = entrace +  Number(e.value)
            }else{
               exit = exit + Number(e.value)
            }
            GrandTotal  = entrace - exit
            setGrandTotal(GrandTotal)
        })

    }
    return (

        <ConteinerHome>
            <HeaderHome>
                <span>Olá, {user.name}</span>
                <Link to={"/"}><AiOutlineExport color="#fff" width={23} height={24} /></Link>
            </HeaderHome>
            {transactions.length > 0 ? <ListTransaction transactions={transactions}  total={grandTotal} /> : <List>Não há registros de <br />
                entrada ou saída</List>}
            <Cards>
                <Link to={"/nova-entrada"}>
                    <div>
                        <AiOutlinePlusCircle color="#fff" />
                        <p>Nova <br />
                            entrada</p>
                    </div>
                </Link>
                <Link to={"/nova-saida"}>
                    <div>
                        <AiOutlineMinusCircle color="#fff" />
                        <p>Nova <br />
                            saida</p>
                    </div>
                </Link>
            </Cards>
        </ConteinerHome>
    )
}

const ConteinerHome = styled.div`
    width:375px;
    padding: 24px;
    display: flex;
    flex-direction:column;
`
const HeaderHome = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 22px;
    font-family: 'Raleway';
    font-weight: 700;
    font-size: 26px;
    color: var(--white);
`
const List = styled.div`
    width: 326px;
    height: 446px;
    background-color: var(--white);
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    p{
        background-color: #fff;
        font-family: 'Raleway';
        font-weight: 400;
        font-size: 20px;
        color: #868686;
    }
`
const Cards = styled.div`
    display: flex;
    gap: 15px;
    div{
        width: 155px;
        height: 114px;
        padding: 10px;
        background: #A328D6;
        border-radius: 5px;
        margin: 13px 0px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        p{
            background: #A328D6;
            color: var(--white);
        }
    }

`
