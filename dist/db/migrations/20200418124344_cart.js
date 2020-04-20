"use strict";
exports.up = function (knex) {
    return knex.schema.createTable("cart", function (table) {
        table.increments("id").primary();
        table.decimal("quantity", 8, 2);
        table.string("description");
        table.string("measurementUnit");
        table.decimal("unitPrice", 8, 2);
        table.string("item");
        table.jsonb("image");
        table.string("site");
        table.timestamp("dateCreated").defaultTo(knex.fn.now());
    });
};
exports.down = function (knex) {
    return knex.schema.dropTable("cart");
};
