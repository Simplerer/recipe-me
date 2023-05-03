import React, { useEffect, useState } from "react"
import axios from 'axios'


export function NewFetch() {

  const [data, setdata] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {

    axios.get('http://localhost:3001/try').then((res) => {
      setdata(res.data)
      setIsLoading(false)

    })

  }, [])
  console?.log(data)

  if (isLoading) {
    return <h2>Loading...</h2>
  }


  return (
    <>
    <h1>Hey!</h1>
    <p>{data.mama}</p>
    <p>{data.papa}</p>
    <p>{data.baby}</p>
    </>
  )



}