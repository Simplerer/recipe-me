import { NavLink } from "react-router-dom";

function Recipe({ recipe }) {

  console.log(recipe);

  return (
    <section id="singleRecipe">
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
            <>
              <li key={index}>{el}</li>
            </>
          ))}
        </ul>
        <div>
          <h3>For the recipe</h3>
          <img src={recipe.images.THUMBNAIL.url} />
          <p>Click Me</p>
        </div>
      </div>
      <NavLink to="/search">Click ME!</NavLink>
    </section>
  )

};

export default Recipe;