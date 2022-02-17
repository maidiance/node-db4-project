
exports.seed = function(knex) {
  return knex('ingredients').insert([
    { ingredient_name: 'olive oil' },
    { ingredient_name: 'spaghetti' },
    { ingredient_name: 'butter' },
    { ingredient_name: 'sugar' },
    { ingredient_name: 'flour' }
  ]);
};
