import Event from "../../Models/Event";
import EventItem from "./EventItem";

const EventList = (props: {items:Event[]}) => {
    return <ul>
        {props.items.map(event => <EventItem 
                                id={event.id} 
                                date={event.date} 
                                title={event.title} 
                                description={event.description} 
                                image= {event.image} 
                                isFeatured={event.isFeatured} 
                                location={event.location} 
                                key={event.id}
                                /> )}    
    </ul>
}

export default EventList;