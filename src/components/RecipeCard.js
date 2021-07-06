import React from 'react';
import { Link } from 'react-router-dom';

const RecipeCard = ({ id, title, desc, image }) => {
    return (
        <article className="card recipe-card">
            {/* Thumbnail */}
            <div 
                className="recipe-card_thumbnail" 
                style={{'backgroundImage': `url('http://localhost:3001/${image}')`}}
            >
                {/* Overlay */}
                <div className="recipe-card_overlay">
                    <div className="recipe-card_overlay_inner">
                        <Link to={`/recipes/${id}`}>
                            <span>View Recipe</span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Title */}
            <h1 className="recipe-card_title">
                <Link to={`/recipes/${id}`}>{title}</Link>
            </h1>

            {/* Description */}
            <div className="recipe-card_description">{ desc }</div>
        </article>
    )
}

export default RecipeCard;