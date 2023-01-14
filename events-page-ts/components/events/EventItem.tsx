import Image from "next/image";
import Link from "next/link";
import Event from "../../Models/Event";

const EventItem = (props: Event) => {
    const {id, image, title, location, date, description} = props;

    const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    const formattedAddress = location.replace(', ', '\n');

    const exploreLink = `/events/${id}`;
    return (
        <li className="m-2">
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl" >
                <div className="md:flex" >
                    <div className="md:shrink-0" >
                        <Image src={`/${image}`} alt = {title} className="h-48 w-full object-cover md:h-full md:w-48" width={200} height={200}></Image>
                    </div>
                    <div className="p-8" >
                        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold" >
                            <figcaption className="font-medium">
                                <div className="text-sky-500 dark:text-sky-400">
                                    <Link href={exploreLink}>Explore Event</Link>
                                </div>
                            </figcaption>
                        </div> 
                        <h2 className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{title}</h2>
                        <p className="mt-2 text-slate-500">{description}</p>
                        <div>
                            <time>{humanReadableDate}</time>            
                        </div>
                        <div>
                            <address>{formattedAddress}</address>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default EventItem;