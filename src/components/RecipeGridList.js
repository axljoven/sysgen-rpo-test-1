import React from 'react';
import RecipeCard from './RecipeCard';

const RecipeGridList = ({ recipes }) => {
    return (
        <div className="list recipe-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-10 gap-y-24">
            {recipes.map(recipe => (
                <RecipeCard 
                    key={recipe.uuid} 
                    id={recipe.uuid}
                    title={recipe.title} 
                    desc={recipe.description} 
                    image={recipe.images.medium} 
                />
            ))}
        </div>
    )
}

export default RecipeGridList;