
exports.up = function(knex) {
    return knex.schema.table("cart", table => {
        table.foreign("user_id").references("users.id");
    });
};

exports.down = function(knex) {
    return knex.schema.table("cart", table => {
        table.dropForeign("user_id");
    });
};
