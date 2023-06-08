import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import './pages.css';


function NewFetch({ data, isLoading, holder, setHolder }) {

  const [index, setIndex] = useState(0);
  const [basketNum, setBasketNum] = useState(0)

  console?.log(data)

  const basket = async () => {
    let x = data[index];
      const recipe = {
        name: x.recipe.label,
        id: x.recipe.uri.split('_').pop()
      }

      await holder ? setHolder([...holder, recipe]) : setHolder([recipe])
      setBasketNum(basketNum++)
  }


  if (isLoading) {
    return <h2>Loading...</h2>
  }

  return (
    <>
      <section id="recipePage">
        {data.length > 0 &&

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
        }
        {data.length > 0 && index < data.length - 1
          ? (
            <>
              <div className="nextBtnBox"></div>
              <button onClick={() => setIndex(index + 1)}
                className="nextBtn"></button>

              <p className="nextBtnText">Another!</p>
            </>
          )
          :
          (
            <>
              <div className="nextBtnBox"></div>
              <NavLink to='/search'>
                <button className="nextBtn"></button>
              </NavLink>
              <p className="nextBtnText">Search Again?</p>
            </>
          )}
        {data.length > 0 && index > 0
        ?
          <>
            <div className="lastBtnBox"></div>
            <button onClick={() => setIndex(index - 1)}
              className="lastBtn"></button>

            <p className="lastBtnText">Back!</p>
          </>
          :
          <></>
        }
        {data.length > 0 &&
          <>
            <div className="saveBtnBox"></div>
            <button onClick={basket} className="saveBtn"></button>

            <p className="saveBtnText">Save It!</p>
          </>
        }
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


  // refer to array of objects to pull one recipe at a time when an arrow is clicked
  // data is loaded and ready
  // like swiper.js but build my way
  // load data[0] --


  //    left and right buttons
  // keep and save tender recipes!!!