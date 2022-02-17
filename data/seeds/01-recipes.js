
exports.seed = function(knex) {
  return knex('recipes').insert([
    { recipe_name: 'Spaghetti Bolognese', created_at: '2021-01-01 08:23:19.120' },
    { recipe_name: 'Sugar Cookies', created_at: '2020-11-19 15:30:11.225' }
  ]);
};
