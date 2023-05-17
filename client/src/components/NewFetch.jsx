import React, { useState } from "react";
import Dropdowns from "./Dropdowns";
import axios from 'axios';
import './recipe.css';


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

    axios.post(`api/dish`, { ...search }).then((res) => {
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
    <div className="searchBar">
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
        <Dropdowns handleChange={handleOnChange} />
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
      <section id="recipePage">
        {data.map((item, index) => {
          return (
            <div key={index} className="outerBox">
              <div className="recipeCard">
                <h3 className="recipeTitle">{item.recipe.label}</h3>
                <div className="imageHolder">
                  <img className="recipeImage" src={item.recipe.image} />
                </div>
                <div className="cardBottom">
                  <p>{(item.recipe.cuisineType[0].slice(0, 1).toUpperCase()) + item.recipe.cuisineType[0].slice(1)} cuisine</p>
                  <p>Enjoy for {item.recipe.mealType[0]}</p>
                  <p>Feeds up to {item.recipe.yield}</p>
                  <div hidden
                    name='recipeID'>
                    {item.recipe.uri.split('_').pop()}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </section>
    </>
  )
}

export default NewFetch;

//  calories, dishtype, 
{/* <h2>Ingredients</h2>
  <ul>
  {item.recipe.ingredientLines.map((item, index) => {
      return (
        <li key={index}>{item}</li>
      )
    })}
  </ul> */}
{/* <iframe 
  src={item.recipe.url}
  onMouseEnter={showMe}></iframe> */}