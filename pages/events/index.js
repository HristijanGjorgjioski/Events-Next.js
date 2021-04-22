import { getAllEvents } from '../../dummy-data'

const AllEventsPage = () => {
    const events = getAllEvents()

    return (
        <div>
            All Events
        </div>
    )
}

export default AllEventsPage
