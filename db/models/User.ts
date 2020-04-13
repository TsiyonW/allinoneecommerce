Model.knex(knex)

class User extends Model{
    static get tableName(){
        return 'users';
    }
    static get relationMappings(){
        const EcommerceAccount = require('./EcommerceAccount')
        return {
            ecommerceAccount:{
                relation: Model.HasManyRelation,
                modelClass: EcommerceAccount,
                join:{
                    from: 'users.id',
                    to: 'ecommerceaccounts.user_id'
                }
            }
        }
    }
}

module.exports = User;