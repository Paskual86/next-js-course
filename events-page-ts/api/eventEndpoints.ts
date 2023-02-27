import { DUMMY_EVENTS } from "../dummy-data";
import { databases } from "../firebase/realtimedatabase";
import DateFilter from "../Models/DateFilter";
import { ref, child, get } from "firebase/database";
import Event from "../Models/Event";

const WORK_WITH_DUMMY_DATA = false;

async function _getAllEvents():Promise<Event[]> {
  const dbRef = ref(databases);
  const events = await get(child(dbRef, `events`));
  if (events.exists()){
    var obj = events.val()
    let result:  Event[] = [];
    for (let key in obj){
      result.push({
        id: key,
        date: obj[key].date,
        description: obj[key].description,
        title: obj[key].title,
        image: obj[key].image,
        isFeatured: obj[key].isFeatured,
        location: obj[key].location
      })
    }
    return result;
  }else{
    return [];
  }
}

export async function getFeaturedEvents() {
    if (WORK_WITH_DUMMY_DATA) return DUMMY_EVENTS.filter((event) => event.isFeatured);
    else {
          return (await _getAllEvents()).filter((event) => event.isFeatured);
        }
  }
  
  
  export async function getAllEvents() {
    if (WORK_WITH_DUMMY_DATA) return DUMMY_EVENTS;
    else{
        return await _getAllEvents();
    }
  }
  
  export async function getFilteredEvents(dateFilter: DateFilter) {
    const { year, month } = dateFilter;
    const eventsData = WORK_WITH_DUMMY_DATA ? DUMMY_EVENTS : await _getAllEvents();
    let filteredEvents = eventsData.filter((event) => {
        const eventDate = new Date(event.date);
        
        return (
            eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
        );
    });
    return filteredEvents;
}
  
  export async function getEventById(id: string) {
    const eventsData = WORK_WITH_DUMMY_DATA ? DUMMY_EVENTS : await _getAllEvents();
    return eventsData.find((event) => event.id === id);
  }