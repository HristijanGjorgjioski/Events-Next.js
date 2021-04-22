import React from 'react'

const EventsSearch = () => {
    return (
        <form>
            <div>
                <div>
                    <label htmlFor="year">Year</label>
                    <select id='year'>
                        <option>2021</option>
                        <option>2022</option>
                    </select>
                </div>
            </div>
        </form>
    )
}

export default EventsSearch
