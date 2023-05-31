import React, { useState } from "react";
import Search from '../components/Search';
import './pages.css';


function NewFetch({ user, loggedIn }) {

  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  console?.log(data)

  if (isLoading) {
    return <h2>Loading...</h2>
  }


  return (
    <>
      {loggedIn &&
        <h1>{user.username}</h1>}
      <section id="recipePage">
        <div>
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
        </div>
      </section>
      <Search isLoading={setIsLoading} setData={setData} />
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


  // refer to array of objects to pull one recipe at a time when an arrow is clicked
  // data is loaded and ready
  // like swiper.js but build my way
  // load data[0] --


  //    left and right buttons
  // keep and save tender recipes!!!