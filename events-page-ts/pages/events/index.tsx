import { useRouter } from "next/router";
import EventSearch from "../../components/events/event-search";
import EventList from "../../components/events/EventList";
import { getAllEvents } from "../../api/eventEndpoints";

const HomeEvent = () => {
    const router = useRouter();
    const events = getAllEvents();

    const filteredEventSearchHandler = (year: string, month: string) => {
        const fullPath = `/events/${year}/${month}`;
        router.push(fullPath);
    }

    return <>
        <EventSearch onFilterEvent={filteredEventSearchHandler}></EventSearch>
        <EventList items={events!} ></EventList>
    </>
}

export default HomeEvent;