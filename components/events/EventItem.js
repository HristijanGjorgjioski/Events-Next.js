import Link from 'next/link'

const EventItem = ({ item }) => {
    const { title, image, date, location, id } = item

    const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    })

    const formattedAdress = location.replace(', ', '\n')

    return (
        <li>
            <img src="" alt="" />
            <div>
                <div>
                    <h2>{title}</h2>
                    <div>
                        <time>{humanReadableDate}</time>
                    </div>
                    <div>
                        <adress>{formattedAdress}</adress>
                    </div>
                </div>
                <div>
                    <Link href="/">Explore Event</Link>
                </div>
            </div>
        </li>
    )
}

export default EventItem
