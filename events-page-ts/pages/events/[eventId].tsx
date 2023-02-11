import { useRouter } from "next/router";
import {EventDetail as EventDetailComponent} from "../../components/events/EventDetail";
import { getEventById } from "../../api/eventEndpoints";

const EventDetail = () => {
    const router = useRouter();
    const eventDetail = getEventById(String(router.query.eventId));
    return <div> 
        { eventDetail && <EventDetailComponent event={eventDetail} ></EventDetailComponent>}
        { !eventDetail && <p>Not Event Found</p>}
    </div>
}

export default EventDetail;