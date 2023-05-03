import React, { useEffect, useState } from "react"
import axios from 'axios'


function Search({ setData, isLoading }) {

  const [search, setSearch] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    isLoading(true)
    console.log(search)
    axios.get(`http://localhost:3001/fetch/${search}`).then((res) => {
      setData(res.data.data)
      isLoading(false)
    })
  }
  const handleOnChange = (e) => {
    setSearch(e.target.value)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Recipe Search"
          name="search"
          onChange={handleOnChange} />
        <button
          type="submit"
          style={{ margin: '2%' }} >Search</button>
      </form>
    </div>
  )


}

function NewFetch() {

  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  // useEffect(() => {

  //   axios.get('http://localhost:3001/fetch').then((res) => {
  //     setData(res.data.data)
  //     setIsLoading(false)

  //   })

  // }, [])
// const showMe = (e) => {
//   console.log(`right over ${e.target.name}`)
// }

  console?.log(data)

  if (isLoading) {
    return <h2>Loading...</h2>
  }


  return (
    <>
      <h1>Hey</h1>
      <Search isLoading={setIsLoading} setData={setData} />
      {data.map((item, index) => {
        return (
          <div key={item.index}>
            <h3>{item.recipe.label}</h3>
            {/* <iframe 
            src={item.recipe.url}
            onMouseEnter={showMe}></iframe> */}
          </div>
        )
      })}
    </>
  )
}

export default NewFetch;