import styled from "styled-components"
//style={t.type === 'entrada' ? { color: 'green' } : { color: 'red' }}
export default function ListTransaction(){
    return(
        <List>
            <ul>
                <Li>
                    <div>
                        <p>
                            23/03
                        </p>
                        <span>comprar comida</span>
                    </div>
                    <span>valor</span>
                </Li>
            </ul>
            <BalanceUser>
                <p>Saldo</p>
                <span>valor do saldo</span>
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
const Li = styled.li`
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
    div{
        display: flex;
        gap: 5px;
        span{
            font-family: 'Raleway';
            font-weight: 400;
            font-size: 16px;
        }
        p{
            font-family: 'Raleway';
            font-weight: 400;
            font-size: 16px;
            color: #C6C6C6;
        }
    }
`