import Image from "next/image";
import Link from "next/link";
import Event from "../../Models/Event";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";
import DateIcon from "../icons/date-icon";

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
                        <h2 className="block mt-1 text-lg leading-tight font-medium uppercase text-indigo-500">{title}</h2>
                        <p className="mt-2 text-slate-500">{description}</p>
                        <div>
                            <div className="h-6 w-6" >
                                <DateIcon />
                            </div>
                            
                            <time>{humanReadableDate}</time>            
                        </div>
                        <div>
                            <div className="h-6 w-6" >
                                <AddressIcon />
                            </div>
                            <address>{formattedAddress}</address>
                        </div>
                        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold" >
                            <figcaption className="font-medium">
                                <div className="text-sky-500 dark:text-sky-400">
                                    <Link href={exploreLink}>Explore Event</Link>
                                </div>
                                
                            </figcaption>
                        </div> 
                    </div>
                </div>
            </div>
        </li>
    )
}

export default EventItem;