import { useRouter } from 'next/router'
import { Fragment } from 'react';

import EventList from '../../components/events/EventList';
import { getFilteredEvents } from '../../dummy-data';
import ResultsTitle from '../../components/events/results-title'

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

    const date = new Date(numYear, numMonth - 1)

    return (
        <Fragment>
            <ResultsTitle date={date} />
            <EventList items={filteredEvents} />
        </Fragment>
    )
}

export default FilteredEventsPage
