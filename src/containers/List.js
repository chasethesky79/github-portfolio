import styled from 'styled-components';

const ListWrapper = styled.ul`
list-style: none;
text-align: left;
padding: 0px;
`
const ListItem = styled.li`
display: flex;
justify-content: space-between;
`
const Label = styled.span`
 font-weight: bold;
`
export default function List({ items }) {
    return (
        <ListWrapper>
          {items.map(item => <ListItem key={item.label}><Label>{item.label}</Label>: {item.value}</ListItem>)}
        </ListWrapper>
    )
}