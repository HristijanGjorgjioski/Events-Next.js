import classes from '../../styles/event-item.module.css';
import Button from '../ui/button';
import DateIcon from '../icons/date-icon'
import AdressIcon from '../icons/address-icon'
import ArrowRightIcon from '../icons/arrow-right-icon'

const EventItem = ({ item }) => {
    const { title, image, date, location, id } = item

    const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    })

    const formattedAdress = location.replace(',', '\n')

    const exploreLink = `/events/${id}`

    return (
        <li className={classes.item}>
            <img src={'/' + image} alt={title} />
            <div className={classes.content}>
                <div className={classes.summary}>
                    <h2>{title}</h2>
                    <div className={classes.date}>
                        <DateIcon />
                        <time>{humanReadableDate}</time>
                    </div>
                    <div className={classes.address}>
                        <AdressIcon />
                        <address>{formattedAdress}</address>
                    </div>
                </div>
                <div className={classes.actions}>
                    <Button link={exploreLink}>
                        <span>Explore Event</span>
                        <span className={classes.icon}><ArrowRightIcon /></span>
                    </Button>
                </div>
            </div>
        </li>
    )
}

export default EventItem
