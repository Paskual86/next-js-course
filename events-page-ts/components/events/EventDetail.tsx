import Image from "next/image";
import Event from "../../Models/Event";
import AddressIcon from "../icons/address-icon";
import DateIcon from "../icons/date-icon";

const EventDetail = (props: {event: Event}) => {
    const {id, image, title, location, date, description} = props.event;

    const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    const formattedAddress = location.replace(', ', '\n');

    return <>
            <h1 className="block text-5xl font-extrabold uppercase text-black text-center mt-2">{title}</h1>
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden mt-2 mb-2" >
                <div>
                    <Image src={`/${image}`} alt = {title} className="h-256 w-256 object-cover" width={500} height={500}></Image>
                </div>
                <div className="p-2" >
                    <div className="grid grid-cols-4 auto-rows-min">
                        <div className="grid grid-row flex justify-end">
                            <div className="h-6 w-6 mr-2">
                                <DateIcon />
                            </div>
                        </div>
                        <div className="col-span-3">
                            <time>{humanReadableDate}</time>
                        </div>
                    </div>
                    <div className="grid grid-cols-4 auto-rows-min">
                        <div className="grid grid-row flex justify-end">
                            <div className="h-6 w-6 mr-2">
                                <AddressIcon />
                            </div>
                        </div>
                        <div className="col-span-3">
                            <address>{formattedAddress}</address>
                        </div>
                        
                    </div>
                </div>
            </div>
            <p className="mt-2 text-slate-500 text-center">{description}</p>
    </>
}

export { EventDetail };