import React, { useState } from "react";
import Dropdowns from "./Dropdowns";
import axios from 'axios';


function Search({ setData, isLoading }) {

  const [search, setSearch] = useState({
    query: null,
    ingAmount: null,
    cuisineType: null,
    mealType: null
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    isLoading(true)

    axios.post(`http://localhost:3001/axios/dish`, { ...search }).then((res) => {
      setData(res.data.data)
      isLoading(false)
      setSearch({
        query: null,
        ingAmount: null,
        cuisineType: null,
        mealType: null
      })
    })
  }
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setSearch({ ...search, [name]: value })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Query Parameter"
          name="query"
          onChange={handleOnChange} />
        <input
          type="text"
          placeholder="Ingredient Amounts"
          name="ingAmount"
          onChange={handleOnChange} />
        <Dropdowns handleChange={handleOnChange}/>
        <button
          type="submit"
          style={{ margin: '2%', backgroundColor: 'orange' }} >Search</button>
      </form>
    </div>
  )


}

function NewFetch() {

  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)

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
          <div key={index}>
            <h3>{item.recipe.label}</h3>
            <ul>
              <li>{item.recipe.calories}</li>
              <li>{item.recipe.cuisineType[0]}</li>
              <li>{item.recipe.dishType[0]}</li>
              <li>{item.recipe.mealType[0]}</li>
              <li>{item.recipe.yield}</li>
              <li>{item.recipe.uri.split('_').pop()}</li>
            </ul>
            <h2>Ingredients</h2>
            <ul>
              {item.recipe.ingredientLines.map((item, index) => {
                return (
                  <li key={index}>{item}</li>
                )
              })}
            </ul>
            <img src={item.recipe.image}></img>
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