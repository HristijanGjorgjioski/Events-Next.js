import EventList from '../components/events/EventList';
import { getFeaturedEvents } from '../dummy-data';

const HomePage = () => {
    const feauturedEvents = getFeaturedEvents();

    return (
        <div>
            <EventList items={feauturedEvents} />
        </div>
    );
};

export default HomePage;
