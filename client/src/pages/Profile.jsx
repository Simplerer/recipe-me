import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './pages.css';
import { useNavigate } from "react-router-dom";

function Profile({ user, setRecipe }) {

  console?.log(user);
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);
  const [userRecipes, setUserRecipes] = useState([]);
  const [userList, setUserList] = useState([]);

  console?.log(user)


  // on mount will run both functions to get all users and specific users recipes
  useEffect(() => {

    getRecipes();
    loadUsers();

  }, []);


  // gets all recipes saved to User's profile
  const getRecipes = async () => {

    await axios.get(`api/user/${user.id}`)
      .then(res => {
        console.log('userRecipes: ', res);
        noRepeats(res.data.recipes);
      })
      .catch(err => {
        console.error(err);
      });

  }

  // gives a list of all users of the site
  const loadUsers = async () => {

    await axios.get(`api/user`)
      .then(res => {
        console.log('allUsers: ', res.data);
        gatherUsers(res.data);
        setIsLoading(false);
      })
      .catch(err => {
        console.error(err);
      })

  }

  // takes info from loadUsers and returns only userNames   -------------  may need to add ID now that I think about it
  const gatherUsers = (people) => {
    const group = [];
    for (let person of people) {
      group.push(person.username)
    }
    setUserList(group);
  }


  // takes saved dishId to rehit api, populating the recipe page
  const gatherRecipe = async (id) => {
    try {
      await axios.get(`api/dish/${id}`)
        .then((res) => {
          setRecipe(res.data.data.recipe);
          navigate('/recipe')
        })
    } catch (err) {
      console.error(err);
    }
  }

  // takes recipe id to remove from database
  const deleteRecipe = async (id) => {

    try {
      await axios.delete(`api/recipe/${id}`)
      setUserRecipes((prevUserRecipes) => prevUserRecipes.filter(recipe => recipe.id !== id));
      console.log('deleted');
    } catch (err) {
      console.error(err);
    }

  }

  //sorts through recipe list, makes sure user has no doubles
  const noRepeats = (recipes) => {

    // self here is representing the array recipes, not each recipe
    const uniqueRecipes = recipes.filter((item, index, self) => {
      // Find the index of the first occurrence of the current recipe's dishId
      const firstIndex = self.findIndex(recipe => recipe.dishId === item.dishId);
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


  // reusable Item for recipes
  function Item({ recipes }) {

    // returns an array of false the same length of recipes
    const [isOpen, setIsOpen] = useState(recipes.map(() => false));
    const openDropdown = (index) => {

      // copy array and makes changes, the reset with new info
      const openStates = [...isOpen];
      openStates[index] = !openStates[index];
      setIsOpen(openStates);
    }

  

    return (
      <div id='profileRecipes'>
        {recipes.map((el, index) => (
          <div className={`profileItem ${isOpen[index] ? 'open' : ''}`} key={index}>
            <div className='profileItemInfo'>
              <div className='profileItemInfoTitle'>
                <div>{el.dishName}</div>
                <div className={`profileItemDropdownToggle ${isOpen[index] ? 'open' : ''}`} onClick={() => openDropdown(index)}>+</div>
              </div>
              <img src={el.image} alt='dish image' 
              className='profileItemInfoImage' />
            </div>
            <div className={`profileItemDropdownInfo ${isOpen[index] ? 'open' : ''}`}>
              <div>
                <button className='profileItemButton' onClick={() => gatherRecipe(el.dishId)}>Check It</button>
                <button className='profileItemButton' onClick={() => deleteRecipe(el.id)}>Chuck It</button>
              </div>
            </div>
          </div>
        ))
        }
      </div>
    )
  }

  return (
    <section id='profilePage'>
      <h1 className="sectionTitle">{user.username}'s Stuff</h1>
      <div id='profileStuff'>
        <div id='profileUserList'>
          {userList.map((el, index) => (
            <p key={index}>{el}</p>
          ))
          }
        </div>
        <Item recipes={userRecipes} />
      </div>
    </section >
  )

};

export default Profile;


