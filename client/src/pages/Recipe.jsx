import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from 'axios';

function Recipe({ recipe, user, loggedIn }) {

    console.log(recipe);

    const [modal, setModal] = useState(null);

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
            const data = await axios.post('api/recipe', { ...createRecipe })
            console.log('Success!')

            const { user } = data
            console.log(user)

            // navigate('/search');
        } catch (err) {
            console.error(err);
        }
    }

    const goBack = () => {
        window.history.back();
    }

    const showModal = (modalName) => {
        setModal(modalName);
    }

    const closeModal = () => {
        setModal(null);
    }


    return (
        <section id="singleRecipe">
            <div id="singleRecipeInner">
                <div id="singleRecipeImageContainer">
                    <img src={recipe.image} id="singleRecipeImage" />
                    <div id="singleRecipeImageCover"></div>
                </div>
                <div className="singleRecipeRight">
                    <h2>{recipe.label}</h2>
                    <div className="singleRecipeInformation">
                        <button className="singleRecipeBtn button"
                            onClick={() => {showModal('mealDetails')}}>Meal Details</button>
                        <button className="singleRecipeBtn button"
                            onClick={() => {showModal('ingredients')}}>Ingredient List</button>
                        <button className="singleRecipeBtn button"
                            onClick={() => {showModal('goTo')}}>Go To</button>
                    </div>
                </div>
            </div>
            <div id="singleRecipeBottom">
                <button onClick={goBack} className="button">Back</button>
                <NavLink to="/search"><button className="button">Just Search</button></NavLink>
                {/* {loggedIn &&
                    <button onClick={saveRecipe}>Add to User File</button>
                } */}
            </div>
            {modal !== null && (
                <div id="singleRecipeBackdrop" onClick={closeModal}></div>
            )}
            {modal === 'mealDetails' && (
                <div className="singleRecipeModal mealDetails">
                    <p>{recipe.calories} Calories</p>
                    <p>Serves: {recipe.yield}</p>
                    <p>A {recipe.cuisineType[0]} dish</p>
                    <p>For {recipe.mealType[0]}</p>
                </div>
            )}
            {modal === 'ingredients' && (
                <div className="singleRecipeModal ingredients">
                    <ul id="singleRecipeIngredients">
                        {recipe.ingredientLines.map((el, index) => (
                            <li key={index}>{el}</li>
                        ))}
                    </ul>
                </div>
            )}
            {modal === 'goTo' && (
                <div className="singleRecipeModal goTo">
                    <iframe src={recipe.url}></iframe>
                </div>
            )}
        </section>
    )

};

export default Recipe;

{/* <iframe
                    src={recipe.url}
                    onMouseEnter={showMe}></iframe> */}