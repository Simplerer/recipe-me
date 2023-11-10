import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import './pages.css';
import leftArrow from "/src/assets/images/arrow-left.ico"
import rightArrow from "/src/assets/images/arrow-right.ico";
import caret from "/src/assets/images/arrow.svg";


function Peruse({ data, setRecipe, user }) {

  const [index, setIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  console?.log(data)
  console?.log(user)

  useEffect(() => {
    data.length > 0 ? setIsLoading(false) : setIsLoading(true);
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  return (
    <section id="recipePage">
      <NavLink
        to='/recipe'
        onClick={() => setRecipe(data[index].recipe)}>
        <div className="outerBox">
          <div className="recipeCard">
            <h3 className="recipeTitle">{data[index].recipe.label}</h3>
            <div className="imageHolder">
              <img className="recipeImage" src={data[index].recipe.image} />
              <div className="recipeImageCover"></div>
            </div>
            <div className="cardBottom">
              <p>Feeds up to {data[index].recipe.yield}</p>
              <div hidden
                name='recipeID'>
                {data[index].recipe.uri.split('_').pop()}
              </div>
            </div>
          </div>
        </div>
      </NavLink>
      {data.length > 0
        ?
        <>
          <NavLink to='/search'>
            <div className="searchBox">
              <img src={caret} alt="caret" />
              <p>Search Again</p>
              <img src={caret} alt="caret" />
            </div>
          </NavLink>
        </>
        :
        <>
          <NavLink to='/search'>
            <div className="searchBox noResults">
              <img src={caret} alt="caret" />
              <p>No Results!</p>
              <img src={caret} alt="caret" />
            </div>
          </NavLink></>
      }
      {data.length > 0 && index < data.length - 1
        ?
        <>
          <div className="nextBtnBox" onClick={() => setIndex(index + 1)}>
            <img src={rightArrow} alt="navigation arrow" />
          </div>
        </>
        :
        <></>
      }
      {data.length > 0 && index > 0
        ?
        <>
          <div className="lastBtnBox" onClick={() => setIndex(index - 1)}>
            <img src={leftArrow} alt="navigation arrow" />
          </div>
        </>
        :
        <></>
      }
    </section>
  )
}

export default Peruse;