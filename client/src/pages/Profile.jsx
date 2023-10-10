import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import axios from 'axios';
import './pages.css';

function Profile({ user, setRecipe }) {

  console?.log(user);

  const [isLoading, setIsLoading] = useState(true);
  const [userRecipes, setUserRecipes] = useState([]);

  console?.log(user)

  useEffect(() => {

    axios.get(`api/user/${user.id}`)
      .then(res => {
        console.log(res);
        clearRepeats(res.data.recipes);
        setIsLoading(false);
      })
      .catch(err => {
        console.error(err);
      })

  }, []);

  const clearRepeats = (recipes) => {

    const uniqueRecipes = recipes.filter((recipe, index, self) => {
      // Find the index of the first occurrence of the current recipe's dishId
      const firstIndex = self.findIndex(r => r.dishId === recipe.dishId);
      // Check if the current index is the same as the first index
      // If they are the same, it means it's the first occurrence and should be included
      return index === firstIndex;
    });

    setUserRecipes(uniqueRecipes);
  }


  if (isLoading) {
    return (
      <h1>Loading <span> .</span><span> .</span><span> .</span></h1>
    )
  }

  return (
    <section id='profilePage'>
      <h2>Hey!</h2>
      <h3>{user.username}</h3>
      <button onClick={() => console.log(userInfo)}>Console Info</button>
      <div id='profileRecipes'>
        {userRecipes.map((el, index) => (
          <NavLink
            to='/recipe'
            onClick={() => setRecipe(el)} key={index}>
            <div>
              <div>{el.dishName}</div>
            </div>
          </NavLink>
        ))}
      </div>
    </section>
  )

};

export default Profile;

// Here is what I need, build out looks
// add delete functionality for user
// add multiple deletion for admin, get rid of all test repeats
// add ability to remove from list on recipe page?
// go back and design layout at 100% zoom, got some space issues
// add breakpoints

// test run functionality and look for anything that doesn't work everytime: fix

// heroku load up
