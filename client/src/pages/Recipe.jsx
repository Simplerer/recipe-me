import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from 'axios';

function Recipe({ recipe, user, loggedIn }) {

    console.log(recipe);

    const [recipeSaved, setRecipeSaved] = useState(false);

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
        };

        try {
            const data = await axios.post('api/recipe', { ...createRecipe });
            console.log('Success!');

            const { user } = data;
            console.log(user);

            setRecipeSaved(true);
            setTimeout(() => {
                setRecipeSaved(false);
            }, 2000);

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
    const openRecipe = (url) => {
        window.open(url, "_blank");
    }

    const vowels = ['a', 'e', 'i', 'o', 'u'];

    return (
        <section id="singleRecipe">
            <div id="singleRecipeInner">
                {loggedIn &&
                    <button onClick={saveRecipe} id="saveRecipeBtn" title="Add to Profile">+</button>
                }
                <div id="singleRecipeImageContainer">
                    <img src={recipe.image} id="singleRecipeImage" />
                    <div id="singleRecipeImageCover"></div>
                </div>
                <div className="singleRecipeRight">
                    <h2>{recipe.label}</h2>
                    <div className="singleRecipeInformation">
                        <button className="singleRecipeBtn button"
                            onClick={() => { showModal('mealDetails') }}>Meal Details</button>
                        <button className="singleRecipeBtn button"
                            onClick={() => { showModal('ingredients') }}>Ingredient List</button>
                        <button className="singleRecipeBtn button"
                            onClick={() => { openRecipe(recipe.url) }}>Go To</button>
                    </div>
                </div>
            </div>
            <div id="singleRecipeBottom">
                <button onClick={goBack} className="button">Back</button>
                <NavLink to="/search"><button className="button">Just Search</button></NavLink>
            </div>
            {modal !== null && (
                <div className="singleRecipeBackdrop" onClick={closeModal}></div>
            )}
            {modal === 'mealDetails' && (
                <div className="singleRecipeModal mealDetails">
                    <h3>Details</h3>
                    <p>Calories: <span>{recipe.calories.toFixed(2)}</span></p>
                    <p>Serves: <span>{recipe.yield}</span></p>
                    <p>{vowels.includes(recipe.cuisineType[0].slice(0, 1)) ? 'An' : 'A'} <span>{recipe.cuisineType[0]}</span> dish</p>
                    <span>For <span>{recipe.mealType[0]}</span></span>
                </div>
            )}
            {modal === 'ingredients' && (
                <div className="singleRecipeModal ingredients">
                    <h3>Ingredients</h3>
                    <ul id="singleRecipeIngredients" className={recipe.ingredientLines.length > 10 ? 'longList' : ''}>
                        {recipe.ingredientLines.map((el, index) => (
                            <li key={index} className="singleRecipeIngredient">{el}</li>
                        ))}
                    </ul>
                </div>
            )}
            {recipeSaved && (
                <div>
                    <div className="singleRecipeBackdrop" onClick={closeModal}></div>
                    <div id="recipeSavedMessage">Recipe Saved!</div>
                </div>
            )
            }
        </section>
    )

};

export default Recipe;