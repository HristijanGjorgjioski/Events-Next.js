import EventItem from "./EventItem"

import classes from '../../styles/event-list.module.css';

const EventList = ({ items }) => {
    return (
        <ul className={classes.list}>
            {items.map((item) => (
                <EventItem key={item.id} item={item} />
            ))}
        </ul>
    )
}

export default EventList
