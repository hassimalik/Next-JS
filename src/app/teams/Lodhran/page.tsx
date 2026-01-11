"use client"
import {useParams} from "next/navigation";
import {use} from "react"
type PageProps = {
    params: {teamId:string}
}
export default function page({params}:PageProps){
    const {teamId} = use(Promise.resolve(params))
    return(
        <h1>{teamId}</h1>
    )
}