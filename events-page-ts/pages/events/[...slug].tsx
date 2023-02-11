import Link from "next/link";
import { useRouter } from "next/router";
import EventList from "../../components/events/EventList";
import ErrorAlert from "../../components/UI/error-alert";
import ResultsTitle from "../../components/UI/results-title";
import { getFilteredEvents } from "../../api/eventEndpoints";

const EventsFiltered = () => {
    const router = useRouter();

    const filteredData = router.query.slug;

    if (!filteredData){
        return <p>Loading...</p>
    }

    const filteredYear = filteredData[0];
    const filteredMonth = filteredData[1];

    const numYear = +filteredYear;
    const numMonth = +filteredMonth;

    if (isNaN(numYear)  || isNaN(numMonth) || numYear >= 2030 || numYear< 2021 || numMonth<1 || numMonth>12) {
        return <ErrorAlert>
            <p className="mb-2">Invalid Filter. Please adjust your values!!!</p>
            <Link href='/events' className='border border-green-500 bg-green-500 text-white rounded-md px-4 py-1 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline' >Show all events</Link>
        </ErrorAlert>
        
    }

    const filteredEvents = getFilteredEvents({
        year: numYear,
        month: numMonth
    });

    if (!filteredEvents || filteredEvents.length === 0) {
        return <ErrorAlert>
                    <p className="mb-2">No Events found for the chosen filter!!!</p>
                    <Link href='/events' className='border border-green-500 bg-green-500 text-white rounded-md px-4 py-1 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline' >Show all events</Link>
                </ErrorAlert>;
    }

    return <>
        <ResultsTitle date={`${filteredYear}-${filteredMonth}-01`} ></ResultsTitle>
        <EventList items={filteredEvents}></EventList>
    </>
    
}

export default EventsFiltered;