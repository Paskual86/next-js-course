import { GetServerSidePropsContext } from 'next'
import React from 'react'

export default function UserIdPage(props:{id:string}) {
  return (
    <div>{props.id}</div>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const {params} = context;
    const userId = params!.uid;

    return {
        props: {
            id: `userid-${userId}`,
        }
    }
}