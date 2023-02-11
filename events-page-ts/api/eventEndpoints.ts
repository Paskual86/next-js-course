import { DUMMY_EVENTS } from "../dummy-data";
import { databases } from "../firebase/realtimedatabase";
import DateFilter from "../Models/DateFilter";
import { ref, child, get } from "firebase/database";
const WORK_WITH_DUMMY_DATA = true;

export function getFeaturedEvents() {
    if (WORK_WITH_DUMMY_DATA) return DUMMY_EVENTS.filter((event) => event.isFeatured);
  }
  
  export function getAllEvents() {
    if (WORK_WITH_DUMMY_DATA) return DUMMY_EVENTS;
    else{
        const dbRef = ref(databases);
        get(child(dbRef, `events`)).then((snapshot) => {
            if (snapshot.exists()) {
              console.log(snapshot.val());
            } else {
              console.log("No data available");
            }
          }).catch((error) => {
            console.error(error);
          });
    }
  }
  
  export function getFilteredEvents(dateFilter: DateFilter) {
    const { year, month } = dateFilter;
  
    if (WORK_WITH_DUMMY_DATA) {
        let filteredEvents = DUMMY_EVENTS.filter((event) => {
            const eventDate = new Date(event.date);
            
            return (
                eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
            );
        });
        return filteredEvents;
    }
  }
  
  export function getEventById(id: string) {
    if (WORK_WITH_DUMMY_DATA) {
        return DUMMY_EVENTS.find((event) => event.id === id);
    }

  }