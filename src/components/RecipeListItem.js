import React from 'react';

const RecipeListItem = ({ id, image, title, desc }) => {
    return (
        <div className="recipe-list-item">
            {/* Small thumbnail image */}
            <div 
                className="recipe-list-item_thumbnail" 
                style={{ 'backgroundImage': `url('http://localhost:3001/${image}')`}}
            ></div>

            {/* Title and description */}
            <div className="recipe-list-info">
                <div className="recipe-list-item_title">{ title }</div>
                <div className="recipe-list-item_desc">{ desc }</div>
            </div>
        </div>
    )
}

export default RecipeListItem;