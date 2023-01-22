import Link from "next/link"
import classes from './main-header.module.css'
const MainHeader = () => {
    return <header className={classes.header}>
        <div className="title text-2xl font-black text-teal-500">
            <Link href="/">Next Event</Link>
        </div>
        <nav className={classes.navigation} >
            <ul>
                <li>
                    <Link href='/events'>Browse all Events</Link>
                </li>
            </ul>
        </nav>
    </header>
}

export default MainHeader;