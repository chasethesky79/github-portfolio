export default function List({ items }) {
    return (
        <ul>
        {items.map(item => <li key={item.label}><strong>{item.label}</strong>: {item.value}</li>)}
        </ul>
    )
}