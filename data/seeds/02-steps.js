
exports.seed = function(knex) {
  return knex('steps').insert([
    { step_number: 1, step_instructions: 'Put a large saucepan on medium heat', recipe_id: 1 },
    { step_number: 2, step_instructions: 'Add 1 tbsp of olive oil', recipe_id: 1 },
    { step_number: 3, step_instructions: 'Add spaghetti', recipe_id: 1 },
    { step_number: 1, step_instructions: 'Make the dough', recipe_id: 2 },
    { step_number: 2, step_instructions: 'Form the cookies', recipe_id: 2 },
    { step_number: 3, step_instructions: 'Bake', recipe_id: 2 },
    { step_number: 4, step_instructions: 'Rest', recipe_id: 2 }
  ]);
};
