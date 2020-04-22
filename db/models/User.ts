import { CartDB } from "./Cart";

const { Model } = require('objection')
const knex = require("../config/knex")

Model.knex(knex)
export module UserDB{
    export class User extends Model{
        static get tableName(){
            return 'users';
        }
        static get relationMappings(){
            const EcommerceAccount = require('./EcommerceAccount')
            const Cart = require('./Cart')
            return {
                ecommerceAccount:{
                    relation: Model.HasManyRelation,
                    modelClass: EcommerceAccount,
                    join:{
                        from: 'users.id',
                        to: 'ecommerceaccounts.user_id'
                    }
                },
                cart:{
                    relation: Model.HasManyRelation,
                    modelClass: Cart,
                    join:{
                        from:'users.id',
                        to:'cart.user_id'
                    }
                }
            }
        }
    }

}
