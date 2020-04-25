const { Model } = require('objection')
const knex = require("../config/knex")
Model.knex(knex)


export module SavedItemDB{
    export class SavedItem extends Model{
        static get tableName(){
            return 'saveditems';
        }

        static get relationMappings(){
            const User = require('./User')
            return{
                user:{
                    relation:Model.BelongsToOneRelation,
                    modelClass:User,
                    join:{
                        from:'saveditems.user_id',
                        to:'users.id'
                    }
                }
            }
        }
    
    }
    
    }