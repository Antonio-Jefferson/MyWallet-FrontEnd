import styled from "styled-components"
import CardTransaction from "./CardTransaction"

export default function ListTransaction({ transactions, total }) {
    console.log(transactions)
    
    return (
        <List>
            <ul>
                {transactions.map((item)=> <CardTransaction item={item}/> )}
            </ul>
            <BalanceUser>
                <p>Saldo</p>
                <span style={total > 0 ? { color: 'green' } : { color: 'red' }}>{total.toFixed(2)}</span>
            </BalanceUser>
        </List>
    )
}

const List = styled.div`
    width: 326px;
    height: 446px;
    background-color: var(--white);
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 8px;
`
const BalanceUser = styled.div`
    display: flex;
    justify-content: space-between;
    p{
        font-family: 'Raleway';
        font-weight: 700;
        font-size: 17px;
    }
`
