import React, { useState, useEffect } from 'react';
import RecipeGridList from './../components/RecipeGridList';
import axios from 'axios';

const Recipes = () => {
    const [hasError, setHasError] = useState(false);
    const [recipes, setRecipes] = useState(null);
    
    useEffect(() => {
        axios.get('http://localhost:3001/recipes')
            .then((response) => {
                setRecipes(response.data);
            })
            .catch(e => {
                console.log('Error:', e);
                setRecipes(null);
                setHasError(true);
            });
    }, []);

    return (
        <div id="recipes-page" className="container mx-auto px-8">
            {hasError && (
                <span>Couldn't load data. Please try again</span>
            )}

            {(recipes !== null && recipes.length > 0) && (
                <RecipeGridList recipes={recipes} />
            )}
        </div>
    )
}

export default Recipes;