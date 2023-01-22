import Link from 'next/link';
import classes from './results-title.module.css';

function ResultsTitle(props:{date:string}) {
  const { date } = props;

  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });

  return (
    <section className={classes.title}>
      <h1 className='mb-2'>Events in {humanReadableDate}</h1>
      <Link href='/events' className='border border-green-500 bg-green-500 text-white rounded-md px-4 py-1 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline' >Show all events</Link>
    </section>
  );
}

export default ResultsTitle;
