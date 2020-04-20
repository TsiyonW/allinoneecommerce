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
var Model = require('objection').Model;
var knex = require("../config/knex");
Model.knex(knex);
var CartDB;
(function (CartDB) {
    var Cart = /** @class */ (function (_super) {
        __extends(Cart, _super);
        function Cart() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(Cart, "tableName", {
            get: function () {
                return 'carts';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Cart, "relationMappings", {
            get: function () {
                var User = require('./User');
                return {
                    user: {
                        relation: Model.BelongsToOneRelation,
                        modelClass: User,
                        join: {
                            from: 'cart.user_id',
                            to: 'users.id'
                        }
                    }
                };
            },
            enumerable: true,
            configurable: true
        });
        return Cart;
    }(Model));
    CartDB.Cart = Cart;
})(CartDB = exports.CartDB || (exports.CartDB = {}));
