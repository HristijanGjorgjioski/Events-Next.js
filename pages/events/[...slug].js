import { useRouter } from 'next/router'
import { getFilteredEvents } from '../../dummy-data';

const FilteredEventsPage = () => {
    const router = useRouter()

    const filterData = router.query.slug;

    if(!filterData) {
        return <p className='center'>Loading...</p>
    }

    const filterdYear = filterData[0]
    const numYear = +filterdYear
    
    const filterdMonth = filterData[1]
    const numMonth = +filterdMonth

    if(isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numYear < 2021 || numMonth < 1 || numMonth > 12) {
        return <p>Invalid filter. Adjust your values</p>
    }

    const filteredEvents = getFilteredEvents({ year: numYear, month: numMonth })

    if(!filteredEvents || filteredEvents.length === 0) {
        return <p>No events found</p>
    }

    return (
        <div>
            Filtered Events Page
        </div>
    )
}

export default FilteredEventsPage
