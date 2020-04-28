"use strict";
exports.up = function (knex) {
    return knex.schema.table("saveditems", function (table) {
        table.foreign("chatId").references("users.chatId");
    });
};
exports.down = function (knex) {
    return knex.schema.table("saveditems", function (table) {
        table.dropForeign("chatId");
    });
};
