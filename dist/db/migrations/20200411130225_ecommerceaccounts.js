"use strict";
exports.up = function (knex) {
    return knex.schema.createTable("ecommerceaccounts", function (table) {
        table.increments("id").primary();
        table.string("email");
        table.string("username");
        table.string("site").notNullable();
        table.string("password");
        table.integer("user_id").unsigned();
    });
};
exports.down = function (knex) {
    return knex.schema.dropTable("ecommerceaccounts");
};
