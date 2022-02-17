const db = require('../data/db-config');

async function getRecipeById(recipe_id) {
    const result = await db('recipes as r')
        .leftJoin('steps as st', 'st.step_id', 'r.recipe_id')
        .where({ recipe_id });
    console.log(result);
}

module.exports = {
    getRecipeByIds
}