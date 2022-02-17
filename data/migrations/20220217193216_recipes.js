
exports.up = function(knex) {
    return knex.schema
      .createTable('recipes', tbl => {
        tbl.increments('recipe_id');
        tbl.string('recipe_name', 128).notNullable().unique();
        tbl.string('created_at', 256).notNullable();
      })
      .createTable('steps', tbl => {
          tbl.increments('step_id');
          tbl.integer('step_number', 128).notNullable();
          tbl.string('step_instructions', 256);
          tbl.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('recipe_id')
            .inTable('recipes')
            .onDelete('CASCADE');
      })
      .createTable('ingredients', tbl => {
          tbl.increments('ingredient_id');
          tbl.string('ingredient_name', 128).notNullable();
      })
      .createTable('steps_ingredients', tbl => {
          tbl.integer('step_id')
            .unsigned()
            .notNullable()
            .references('step_id')
            .inTable('steps');
          tbl.integer('ingredient_id')
            .unsigned()
            .notNullable()
            .references('ingredient_id')
            .inTable('ingredients');
          tbl.decimal('quantity')
            .unsigned()
            .notNullable()
          tbl.primary(['step_id', 'ingredient_id'])
      });
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('steps_ingredients')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('steps')
    .dropTableIfExists('recipes')
};
