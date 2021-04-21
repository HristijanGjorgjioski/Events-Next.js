import EventItem from "./EventItem"

const EventList = ({ items }) => {
    return (
        <div>
            <ul>
                {items.map((item) => (
                    <li><EventItem item={item} /></li>
                ))}
            </ul>
        </div>
    )
}

export default EventList
