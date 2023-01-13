import EventList from "../components/events/EventList";
import { getFeaturedEvents } from "../dummy-data";

const HomePage = () => {
    const featureEvents = getFeaturedEvents();

    return <div>
        <EventList items={featureEvents} ></EventList>
    </div>
}

export default HomePage;