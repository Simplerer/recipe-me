import { NavLink } from "react-router-dom";
import axios from 'axios';

function Recipe({ recipe, user, loggedIn }) {

  console.log(recipe);

  const saveRecipe = async () => {

    let createRecipe = {
      dishName: recipe.label,
      dishId: recipe.uri.split('_').pop(),
      image: recipe.image,
      cuisineType: recipe.cuisineType[0],
      dishType: recipe.dishType[0],
      mealType: recipe.mealType[0],
      user_id: user.id
    }

    try {
debugger
    const data =  await axios.post('api/recipe', { ...createRecipe })
      console.log('Success!')

      const { user } = data
      console.log(user)

      // navigate('/search');
    } catch (err) {
      console.error(err);
    }
  }



  return (
    <section id="singleRecipe">
      <div id="singleRecipeBackground"></div>
      <div id="singleRecipeContentTop">
        <img src={recipe.image} id="singleRecipeImage" />
        <div id="singleRecipeTopRight">
          <h1>{recipe.label}</h1>

          <h2>~Meal Details~</h2>
          <ul>
            <li>{recipe.calories} Calories</li>
            <li>Serves: {recipe.yield}</li>
            <li>A {recipe.cuisineType[0]} dish</li>
            <li>For {recipe.mealType[0]}</li>
          </ul>

        </div>
      </div>
      <div id="singleRecipeContentBotom">
        <h2>Major Ingredients</h2>
        <ul  id="singleRecipeIngredients">
          {recipe.ingredientLines.map((el, index) => (
              <li key={index}>{el}</li>
          ))}
        </ul>
        <div>
          <h3>For the recipe</h3>
          <img src={recipe.images.THUMBNAIL.url} />
          <p>Click Me</p>
        </div>
      </div>
      <NavLink to="/search">Click ME!</NavLink>
      {loggedIn && 
      (<button onClick={saveRecipe}>Add to User File</button>)
      }
    </section>
  )

};

export default Recipe;