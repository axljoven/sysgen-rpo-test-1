import React from 'react';
import RecipeListItem from './RecipeListItem';

const RecipeList = ({ recipes }) => {
    return (
        <div className="list recipe-list">
            {recipes !== null && (
                recipes.map(recipe => (
                    <RecipeListItem
                        key={recipe.uuid} 
                        id={recipe.uuid}
                        title={recipe.title} 
                        desc={recipe.description} 
                        image={recipe.images.small} 
                    />
                ))
            )}
        </div>
    )
}

export default RecipeList;