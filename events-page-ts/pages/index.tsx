import EventList from "../components/events/EventList";
import { getFeaturedEvents } from "../api/eventEndpoints";
import Event from "../Models/Event";
import Head from "next/head";
import NewsletterRegistration from "../components/input/newsletter-registration";

const HomePage = (props:{events:Event[]}) => {
    if (!props.events){
        return <p>Loading</p>
    }
    return <>
        <Head>
            <title>NextJS Events</title>
            <meta
            name='description'
            content='Find a lot of great events that allow you to evolve...'
            />
        </Head>
        <NewsletterRegistration />
        <EventList items={props.events!} ></EventList>
    </>
}

export default HomePage;

export async function getStaticProps() {
    const featureEvents = await getFeaturedEvents();
    return {
        props:{
            events: featureEvents
        }
    }
}