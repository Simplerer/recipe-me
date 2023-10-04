import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from 'axios';
import './pages.css';


function Peruse({ data, isLoading, setRecipe, user }) {

  const [index, setIndex] = useState(0);

  console?.log(data)
  console?.log(user)


  if (isLoading) {
    return <h2>Loading...</h2>
  }

  return (
    <>
      <section id="recipePage">
        {data.length > 0 &&
          <NavLink
            to='/recipe'
            onClick={setRecipe(data[index].recipe)}>
            <div className="outerBox">
              <div className="recipeCard">
                <h3 className="recipeTitle">{data[index].recipe.label}</h3>
                <div className="imageHolder">
                  <img className="recipeImage" src={data[index].recipe.image} />
                </div>
                <div className="cardBottom">
                  <p>{(data[index].recipe.cuisineType[0].slice(0, 1).toUpperCase()) + data[index].recipe.cuisineType[0].slice(1)} cuisine</p>
                  <p>Enjoy for {data[index].recipe.mealType[0]}</p>
                  <p>Feeds up to {data[index].recipe.yield}</p>
                  <div hidden
                    name='recipeID'>
                    {data[index].recipe.uri.split('_').pop()}
                  </div>
                </div>
              </div>
            </div>
          </NavLink>
        }
        {data.length > 0 && index < data.length - 1
          ? (
            <>
              <div className="nextBtnBox" onClick={() => setIndex(index + 1)}>
                <img src="/src/assets/images/arrow-right.ico" />
              </div>
            </>
          )
          :
          (
            <>
              <div className="searchBox"></div>
              <NavLink to='/search'>
                <button className="searchButton"></button>
              </NavLink>
              <p className="nextBtnText">Search Again?</p>
            </>
          )}
        {data.length > 0
          ?
          <>
            <div className="lastBtnBox" onClick={() => setIndex(index - 1)}>
              <img src="\src\assets\images\arrow-left.ico" />
            </div>
          </>
          :
          <></>
        }
      </section>
    </>
  )
}

export default Peruse;

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