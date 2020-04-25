
exports.up = function(knex) {
    return knex.schema.createTable("saveditems", table=>{
        table.increments("id").primary()
        table.string("item")
        table.string("description")
        table.string("unitPrice")
        table.string("url")
        table.string("image")
        table.string("site")
        table.string("rating")
        table.timestamp("dateCreated").defaultTo(knex.fn.now())
    })
  };
  
  exports.down = function(knex) {
      return knex.schema.dropTable("saveditems")
  };
  