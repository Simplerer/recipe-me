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
        noRepeats(res.data.recipes);
        setIsLoading(false);
      })
      .catch(err => {
        console.error(err);
      })

  }, []);

  const deleteRecipe = async (id) => {

    try {
      await axios.delete(`api/recipe/${id}`)
      setUserRecipes((prevUserRecipes) => prevUserRecipes.filter(recipe => recipe.id !== id));
      console.log('deleted');
    } catch (err) {
      console.error(err);
    }

  }

  const noRepeats = (recipes) => {

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
      <button onClick={() => console.log(userRecipes)}>Console Info</button>
      <div id='profileRecipes'
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
        {userRecipes.map((el, index) => (
          <div style={{ display: 'flex', gap: '20px', padding: '5px' }}>
            <NavLink
              to='/recipe'
              onClick={() => setRecipe(el)} key={index}>
              <div>{el.dishName}</div>
            </NavLink>
            <button
              onClick={() => deleteRecipe(el.id)}
              style={{ display: 'grid', placeContent: 'center', padding: '5px 10px' }}>Delete This!</button>
            <p>{el.id}</p>
          </div>
        ))}
      </div>
    </section>
  )

};

export default Profile;

// Here is what I need, build out looks
// go back and design layout at 100% zoom, got some space issues
// add breakpoints

// test run functionality and look for anything that doesn't work everytime: fix

// heroku load up
