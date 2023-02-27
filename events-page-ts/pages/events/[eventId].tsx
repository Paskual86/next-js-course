import {EventDetail as EventDetailComponent} from "../../components/events/EventDetail";
import { getAllEvents, getEventById } from "../../api/eventEndpoints";
import Event from "../../Models/Event";
import { GetStaticPropsContext } from "next";
import Head from "next/head";
import Comments from "../../components/input/comments";

const EventDetail = (props : {event: Event}) => {
    const { event: eventDetail } = props;

    return <> 
     <Head>
        <title>{eventDetail.title}</title>
        <meta
          name='description'
          content={eventDetail.description}
        />
      </Head>
        { eventDetail && <EventDetailComponent event={eventDetail} ></EventDetailComponent>}
        { !eventDetail && <p>Not Event Found</p>}
        <Comments event={eventDetail} />
    </>
}

export default EventDetail;

export async function getStaticProps(context: GetStaticPropsContext) {
    const id = context.params!.eventId;
    const event = await getEventById(String(id));

    if (!event){
        return {
            notFound: true
        }
    }

    return {
        props: {
            event: event
        }
    }
}

export async function getStaticPaths() {    
    const eventIds = (await getAllEvents()).map(event => event.id);
    const pathsWithParams = eventIds.map(id => ({params: {eventId:String(id)}}));
    return {
        paths:[...pathsWithParams],
        fallback: true
    }
}