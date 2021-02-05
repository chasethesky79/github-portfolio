import { ListWrapper, ListItem, Label } from '../styled-components/styled-components'

export default function List({ items }) {
    return (
        <ListWrapper>
          {items.map(item => <ListItem key={item.label}><Label>{item.label}</Label>: {item.value}</ListItem>)}
        </ListWrapper>
    )
}