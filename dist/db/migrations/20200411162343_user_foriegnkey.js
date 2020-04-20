"use strict";
exports.up = function (knex) {
    return knex.schema.table("ecommerceaccounts", function (table) {
        table.foreign("user_id").references("users.id");
    });
};
exports.down = function (knex) {
    return knex.schema.table("ecommerceaccounts", function (table) {
        table.dropForeign("user_id");
    });
};
