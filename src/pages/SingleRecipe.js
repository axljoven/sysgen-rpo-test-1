import React, { useState, useEffect } from 'react';
import { fetchRecipe, fetchSpecials } from './../services/fetch';
import { useParams } from 'react-router-dom';

const SingleRecipe = () => {
    const { uuid } = useParams();
    const [recipe, setRecipe] = useState(null);
    const [specials, setSpecials] = useState(null);

    // Get special ingredients thru and ID
    const getSpecialIngredient = (ingredientId) => {
        let output = false;
        if (specials !== null) {
            specials.filter(item => {
                if (item.ingredientId === ingredientId) {
                    output = item;
                }
            })
        }

        return output;
    }

    // Get Recipe and Specials data
    useEffect(() => {
        fetchRecipe(uuid, setRecipe, () => {
            fetchSpecials(setSpecials);
        });
    }, [])

    return (
        <div id="single-recipe" className="single-recipe container mx-auto px-8">
            {/* Banner image */}
            {recipe !== null && (
                <div
                    className="single-recipe_banner"
                    style={{ 'backgroundImage': `url('http://localhost:3001/${recipe.images.full}')` }}
                ></div>
            )}

            <article>
                {recipe !== null && (
                    <>
                        {/* Recipe Title and description */}
                        <header className="single-recipe_header">
                            <span className="single-recipe_label">Recipe</span>
                            <h1 className="single-recipe_title">{recipe.title}</h1>
                            <div className="single-recipe_desc">{recipe.description}</div>
                        </header>

                        {/* Servings / Prep and Cooking time */}
                        <div className="single-recipe_info grid grid-cols-3 gap-10">
                            <div>
                                <h2 className="single-recipe_label">Servings</h2>
                                <span>{recipe.servings} serving(s)</span>
                            </div>

                            <div>
                                <h2 className="single-recipe_label">Prep Time</h2>
                                <span>{recipe.prepTime} minute(s)</span>
                            </div>

                            <div>
                                <h2 className="single-recipe_label">Cooking Time</h2>
                                <span>{recipe.cookTime} minute(s)</span>
                            </div>
                        </div>

                        {/* Ingredients */}
                        {recipe.ingredients !== null && recipe.ingredients.length > 0 && (
                            <div className="single-recipe_ingredients mb-24">
                                {/* Heading */}
                                <h2 className="heading">Ingredients</h2>

                                {/* List */}
                                <ul className="single-recipe_list">
                                    {recipe.ingredients.map(item => {
                                        let special = getSpecialIngredient(item.uuid);
                                        return <li key={item.uuid}>

                                            {/* Item */}
                                            <div>{item.amount} {item.measurement} of {item.name}</div>

                                            {/* Special Ingredient */}
                                            {special && (
                                                <div className="special">
                                                    <div className="title">
                                                        <span className="type">{special.type} </span>
                                                        {special.title}
                                                    </div>
                                                    <div className="text">{special.text}</div>
                                                </div>
                                            )}
                                        </li>
                                    })}
                                </ul>
                            </div>
                        )}

                        {/* Directions */}
                        {recipe.directions !== null && recipe.directions.length > 0 && (
                            <div className="single-recipe_directions mb-24">
                                {/* Heading */}
                                <h2 className="heading">Directions</h2>
                                
                                {/* List */}
                                <ol className="single-recipe_list" type="i">
                                    {recipe.directions.map((item, id) => (
                                        <li key={id}>
                                            {item.optional && <span>[Optional] </span>}
                                            {item.instructions}
                                        </li>
                                    ))}
                                </ol>
                            </div>
                        )}
                        
                    </>
                )}
                
            </article>
        </div>
    )
}

export default SingleRecipe;