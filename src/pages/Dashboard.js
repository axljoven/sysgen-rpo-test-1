import React, { useState, useEffect } from 'react';
import RecipeList from '../components/RecipeList';
import { fetchRecipes } from './../services/fetch';

const Dashboard = () => {
    const [recipes, setRecipes] = useState(null);
    useEffect(() => {
        fetchRecipes(setRecipes);
    }, [])
    
    return (
        <div id="dashboard-page" className="container mx-auto px-8">
            <div className="grid grid-cols-3 gap-x-10">
                {/* Recipe List */}
                <div className="col-span-1">
                    <h2 className="heading">Recipes</h2>
                    <RecipeList recipes={recipes} />
                </div>

                {/* CRU Form section */}
                <div className="col-span-2">
                    <h2 className="heading">Add New Recipe</h2>
                    
                    {/* Form */}
                    <div className="grid grid-cols-2 gap-x-10">

                        {/* Info and ingredients */}
                        <div>
                            <form className="form">
                                <div className="form-section info mb-20">
                                    {/* title */}
                                    <div className="form-group">
                                        <label htmlFor="recipe-title">Title</label>
                                        <input type="text" id="recipe-title" name="recipe-title" placeholder="Title" />
                                    </div>
                                    
                                    {/* description */}
                                    <div className="form-group">
                                        <label htmlFor="recipe-desc">Description</label>
                                        <input type="text" id="recipe-desc" name="recipe-desc" placeholder="Description" />
                                    </div>

                                    {/* servings, prep time and cooking time */}
                                    <div className="grid grid-cols-3 gap-x-6">
                                        <div className="form-group">
                                            <label htmlFor="recipe-servings">Servings</label>
                                            <input type="text" id="recipe-servings" name="recipe-servings" placeholder="e.g. 1" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="recipe-prep-time">Prep Time</label>
                                            <input type="text" id="recipe-prep-time" name="recipe-prep-time" placeholder="e.g. 5" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="recipe-cooking-time">Cooking Time</label>
                                            <input type="text" id="recipe-cooking-time" name="recipe-cooking-time" placeholder="e.g. 5" />
                                        </div>
                                    </div>
                                </div> {/* info section */}

                                <div className="form-section ingredients">
                                    <h3 className="form-heading">Ingredients</h3>

                                    {/* Name, amount and measurement */}
                                    <div className="ingredient">
                                        <div className="form-group">
                                            <label htmlFor="ingredient-name">Name</label>
                                            <input type="text" id="ingredient-name" name="ingredient-name" placeholder="e.g. Sugar" />
                                        </div>
                                        <div className="grid grid-cols-3 gap-x-6">
                                            <div className="form-group col-span-1">
                                                <label htmlFor="ingredient-amount">Amount</label>
                                                <input type="text" id="ingredient-amount" name="ingredient-amount" placeholder="e.g. 1" />
                                            </div>
                                            <div className="form-group  col-span-2">
                                                <label htmlFor="ingredient-measurement">Measurement</label>
                                                <input type="text" id="ingredient-measurement" name="ingredient-measurement" placeholder="e.g. cup" />
                                            </div>
                                        </div>
                                    </div> {/* ingredient */}
                                </div> {/* ingredient section */}

                            </form>
                        </div>

                        {/* Directions */}
                        <div>
                            <form className="form">
                                <div className="form-section directions">
                                    <h3 className="form-heading">Instructions</h3>

                                    {/* Name, amount and measurement */}
                                    <div className="direction form-group">
                                        <input type="text" id="recipe-instruction" name="recipe-instruction" placeholder="e.g. Mix the flour" />
                                        <div className="inline">
                                            <input type="checkbox" id="recipe-optional" name="recipe-optional" />
                                            <label htmlFor="recipe-optional">Optional</label>
                                        </div>
                                    </div>
                                    <div className="direction form-group">
                                        <input type="text" id="recipe-instruction" name="recipe-instruction" placeholder="e.g. Mix the flour" />
                                        <div className="inline">
                                            <input type="checkbox" id="recipe-optional" name="recipe-optional" />
                                            <label htmlFor="recipe-optional">Optional</label>
                                        </div>
                                    </div>
                                    <div className="direction form-group">
                                        <input type="text" id="recipe-instruction" name="recipe-instruction" placeholder="e.g. Mix the flour" />
                                        <div className="inline">
                                            <input type="checkbox" id="recipe-optional" name="recipe-optional" />
                                            <label htmlFor="recipe-optional">Optional</label>
                                        </div>
                                    </div>
                                </div> {/* directions section */}
                            </form>
                        </div>



                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;