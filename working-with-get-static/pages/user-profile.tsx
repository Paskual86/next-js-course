import { GetServerSidePropsContext } from 'next';
import React from 'react'

export default function UserProfilePage(props:{username:string}) {
  return (
    <h1>{props.username}</h1>
  )
}


export async function getServerSideProps(context: GetServerSidePropsContext) {
    const {params, req, res } = context;
    console.log(req) // This blong to node JS
    console.log(res) // This blong to node JS
    return {
        props: {
            username: 'Pablo'
        }
    }
}