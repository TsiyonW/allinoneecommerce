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
Model.knex(knex);
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(User, "tableName", {
        get: function () {
            return 'users';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User, "relationMappings", {
        get: function () {
            var EcommerceAccount = require('./EcommerceAccount');
            return {
                ecommerceAccount: {
                    relation: Model.HasManyRelation,
                    modelClass: EcommerceAccount,
                    join: {
                        from: 'users.id',
                        to: 'ecommerceaccounts.user_id'
                    }
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    return User;
}(Model));
module.exports = User;
