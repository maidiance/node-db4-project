const db = require('../data/db-config');

async function getRecipeById(recipe_id) {
    const result = await db('recipes as r')
        .leftJoin('steps as st', 'st.step_id', 'r.recipe_id')
        .where('r.recipe_id', recipe_id)
        .orderBy('st.step_number');
    console.log(result);
}

module.exports = {
    getRecipeById
}