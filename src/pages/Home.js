import { AiOutlineExport, AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import styled from "styled-components";
export default function Home() {
    return (
        <ConteinerHome>
            <HeaderHome>
                Olá, Fulano
                <AiOutlineExport color="#fff" width={23} height={24} />
            </HeaderHome>
            <List>
                <p>Não há registros de entrada ou saída</p>
            </List>
            <Cards>
                <div>
                    <AiOutlinePlusCircle color="#fff"/>
                    <p>Nova <br/>
                        entrada</p>
                </div>
                <div>
                    <AiOutlineMinusCircle color="#fff"/>
                    <p>Nova <br/>
                        saida</p>
                </div>
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
