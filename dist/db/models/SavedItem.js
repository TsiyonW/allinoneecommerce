"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Model = require("objection").Model;
var knex = require("../config/knex");
Model.knex(knex);
var SavedItemDB;
(function (SavedItemDB) {
    var SavedItem = /** @class */ (function (_super) {
        __extends(SavedItem, _super);
        function SavedItem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(SavedItem, "tableName", {
            get: function () {
                return "saveditems";
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SavedItem, "relationMappings", {
            get: function () {
                var User = require("./User");
                return {
                    user: {
                        relation: Model.BelongsToOneRelation,
                        modelClass: User,
                        join: {
                            from: "saveditems.user_id",
                            to: "users.id",
                        },
                    },
                };
            },
            enumerable: true,
            configurable: true
        });
        return SavedItem;
    }(Model));
    SavedItemDB.SavedItem = SavedItem;
})(SavedItemDB = exports.SavedItemDB || (exports.SavedItemDB = {}));
