const { Model } = require('objection')
const knex = require("../config/knex")
Model.knex(knex)


export module CartDB{
    export class Cart extends Model{
        static get tableName(){
            return 'carts';
        }

        static get relationMappings(){
            const User = require('./User')
            return{
                user:{
                    relation:Model.BelongsToOneRelation,
                    modelClass:User,
                    join:{
                        from:'cart.user_id',
                        to:'users.id'
                    }
                }
            }
        }
    
    }
    
    }