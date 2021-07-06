import axios from 'axios';

/**
 * Fetch all recipes
 * @param {function} _setState // useState function where we'll store the data
 * @param {*} _callback   
 */
const fetchRecipes = (_setState, _callback = false) => {
    axios.get(`http://localhost:3001/recipes/`)
        .then(response => {
            // Save data if available
            if (
                response.status >= 200 &&
                response.status <= 299 &&
                response.data
            ) {
                _setState(response.data);

                if (_callback) {
                    _callback();
                }
            }
        }).catch(e => {
            console.log('Error fetching recipes:', e);
        });
}

/**
 * Fetch recipe data by ID
 * @param {int} _id            // Recipe ID (uuid)
 * @param {function} _setState // useState function where we'll store the data
 * @param {*} _callback   
 */
const fetchRecipe = (_id, _setState, _callback = false) => {
    axios.get(`http://localhost:3001/recipes/${_id}`)
        .then(response => {
            // Save data if available
            if (
                response.status >= 200 &&
                response.status <= 299 &&
                response.data
            ) {
                _setState(response.data);

                if (_callback) {
                    _callback();
                }
            }
        }).catch(e => {
            console.log('Error fetching recipe:', e);
        });
}

/**
 * Get all specials data
 * @param {function} _setState // useState function where we'll store the data
 * @param {function} _callback
 */
const fetchSpecials = (_setState, _callback = false) => {
    axios.get(`http://localhost:3001/specials/`)
        .then(response => {
            // Save data if available
            if (
                response.status >= 200 &&
                response.status <= 299 &&
                response.data.length > 0
            ) {
                _setState(response.data);

                if (_callback) {
                    _callback();
                }
            }
        }).catch(e => {
            console.log('Error fetching specials:', e)
        })
}

export {
    fetchRecipe, 
    fetchRecipes,
    fetchSpecials
}