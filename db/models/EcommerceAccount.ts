const { Model } = require('objection')
const knex = require("../config/knex")
Model.knex(knex)

class EcommerceAccount extends Model{
    static get tableName(){
        return 'ecommerceaccounts';
    }
    
    static get relationMappings(){
        const User = require('./User')
        return{
            user:{
                relation:Model.BelongsToOneRelation,
                modelClass:User,
                join:{
                    from:'ecommerceaccounts.user_id',
                    to:'users.id'
                }
            }
        }
    }
}

module.exports = EcommerceAccount;