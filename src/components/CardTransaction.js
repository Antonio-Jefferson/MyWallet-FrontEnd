import styled from "styled-components"
export default function CardTransaction({item}){
    return (
        <Li>
            <div>
                <p>
                    {item.date}
                </p>
                <span>{item.description}</span>
            </div>
            <span style={item.type === 'entrace' ? { color: 'green' } : { color: 'red' }}>{item.value}</span>
        </Li>
    )
}

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