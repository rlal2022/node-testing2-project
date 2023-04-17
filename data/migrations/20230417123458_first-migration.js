/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("cars", (cars) => {
    cars.increments("id");
    cars.string("make", 32).notNullable().unique();
    cars.string("model", 32).notNullable();
    cars.integer("year", 4).notNullable();
    cars.string("color", 32);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("cars");
};
