"use client"

import { useState } from "react"

export default function Page(){
    const[loading, setLoading] = useState()
    const[error, setError] = useState()
    const [data, setData] = useState(null)
    const loadData = async()=>{
        setLoading(true)
        setError(false)
        setData(null)
    }

    try{
        const res = await fetch("https://jsonplaceholder.typicode.com/posts/1")
        if(!res.ok){
            throw new Error ("Data did'nt fetched")
        }
        const result = await res.json()
        setData(result)
    } catch(err){
        setError(true)
    } finally{
        setLoading(false)
    }
    return(
        <div>
            <div>
      <h1>Mini Project: Data Loader</h1>

      <button onClick={loadData}>
        Load Data
      </button>

      {loading && <p>Loading...</p>}
      {error && <p>Oops! Error aa gaya 😢</p>}

      {data && (
        <div>
          <h3>{data.title}</h3>
          <p>{data.body}</p>
        </div>
      )}
    </div>
        </div>
    )
}