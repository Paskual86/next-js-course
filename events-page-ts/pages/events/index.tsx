import { useRouter } from "next/router";
import EventSearch from "../../components/events/event-search";
import EventList from "../../components/events/EventList";
import { getAllEvents } from "../../api/eventEndpoints";
import { useState } from "react";
import Event from "../../Models/Event";

const HomeEvent = () => {
    const router = useRouter();

    const [events, setEvents] = useState<Event[]>([]);
    
    // This code is not correct, but in this point i decided to perform in this way. It is necessary call to getStaticProps
    getAllEvents().then(response => {setEvents(response)});

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