import Link from "next/link";
import Event from "../../Models/Event";

const EventItem = (props: Event) => {
    const {id, image, title, location, date} = props;

    const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    const formattedAddress = location.replace(', ', '\n');

    const exploreLink = `/events/${id}`;
    return (
        <li>
            <img src={`/${image}`} alt = {title}></img>

            <div>
                <div>
                    <h2>{title}</h2>
                    <div>
                        <time>{humanReadableDate}</time>
                    </div>
                    <div>
                        <address>{formattedAddress}</address>
                    </div>
                </div>
                <div>
                    <Link href={exploreLink}>Explore Event</Link>
                </div>
            </div>

        </li>
    )
}

export default EventItem;