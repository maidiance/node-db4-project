const db = require('../data/db-config');

async function getRecipeById(recipe_id) {
    const result = await db('recipes as r')
        .leftJoin('steps as st', 'st.recipe_id', 'r.recipe_id')
        .where('r.recipe_id', recipe_id)
        .orderBy('st.step_number');
    if(result.length < 1){
        return null;
    }
    const recipe = {
        recipe_id: result[0].recipe_id,
        recipe_name: result[0].recipe_name,
        created_at: result[0].created_at,
        steps: []
    }
    for(let [index, step] of result.entries()) {
        const ingredients = await db('steps_ingredients as si')
        .leftJoin('ingredients as i', 'si.ingredient_id', 'i.ingredient_id')
        .where('si.step_id', step.step_id)
        .orderBy('si.step_id');
        
        recipe.steps.push({
            step_id: step.step_id,
            step_number: step.step_number,
            step_instructions: step.step_instructions,
            ingredients: []
        });

        if (ingredients == []) {
            // empty ingredients
        } else {
            ingredients.forEach( item => {
                recipe.steps[index].ingredients.push({
                    ingredient_id: item.ingredient_id,
                    ingredient_name: item.ingredient_name,
                    quantity: item.quantity
                })
            });
        }
    }
    return recipe;
}

module.exports = {
    getRecipeById
}