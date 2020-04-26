
exports.up = function(knex) {
    return knex.schema.table("saveditems", table => {
        table.foreign("chatId").references("users.chatId");
    });
};

exports.down = function(knex) {
    return knex.schema.table("saveditems", table => {
        table.dropForeign("chatId");
    });
};
