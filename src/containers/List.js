import { ListWrapper, ListItem, Label , TitleStyle } from '../styled-components/styled-components'

export default function List({ title, items }) {
    return (
        <>
        <TitleStyle>{title}</TitleStyle>
        <ListWrapper>
          {items.map(item => <ListItem key={item.label}><Label>{item.label}</Label>: {item.value}</ListItem>)}
        </ListWrapper>
        </>
    )
}