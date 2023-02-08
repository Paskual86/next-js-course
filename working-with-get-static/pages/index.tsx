//import path from 'path'; // belong to Node 
//import fs from 'fs/promises';
import dataFile from '../data/dummy-backend.json';


import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { GetStaticProps } from "next";
import { Products } from '@/Models/Products';
import Link from 'next/link';
export default function Home(props: {products: Products[]}) {
  const {products} = props
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <ul>
          {products.map(mp => (<li key={mp.id}>
            <Link href={`/products/${mp.id}`}>{mp.title}</Link></li>))}
        </ul>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  //const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
  //const jsonData = await fs.readFile(filePath);
  //const data = JSON.parse(jsonData);
  const data = dataFile;

  return {
    props: {
      products: data.products,
    },
    revalidate: 10,
    //notFound: true,
    /*redirect: {
      destination:'/no-data'
    }*/
  }
}