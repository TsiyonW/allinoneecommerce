import { SavedItemDB } from "./SavedItem";

const { Model } = require("objection");
const knex = require("../config/knex");

Model.knex(knex);
export module UserDB {
  export class User extends Model {
    static get tableName() {
      return "users";
    }
    static get relationMappings() {
      const SavedItem = require("./SavedItem");
      return {
        saveditem: {
          relation: Model.HasManyRelation,
          modelClass: SavedItem,
          join: {
            from: "users.id",
            to: "saveditems.user_id",
          },
        },
      };
    }
  }
}
