import EventList from "../components/events/EventList";
import { getFeaturedEvents } from "../api/eventEndpoints";
import Event from "../Models/Event";

const HomePage = (props:{events:Event[]}) => {
    if (!props.events){
        return <p>Loading</p>
    }
    return <div>
        <EventList items={props.events!} ></EventList>
    </div>
}

export default HomePage;

export async function getStaticProps() {
    const featureEvents = await getFeaturedEvents();
    console.log('getStaticProps');
    console.log(featureEvents);
    return {
        props:{
            events: featureEvents
        }
    }
}