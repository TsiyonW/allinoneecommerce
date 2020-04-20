"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var gql = require('graphql-tag').gql;
exports.userSchema = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    type User{\n        id:ID!\n        phoneNo:String!\n    }\n    type Query{\n        user:User!\n        users:[User]!\n    }\n    input NewUserInput{\n        phoneNo:String!\n    }\n    type Mutation{\n        register(input:NewUserInput):User!\n        removeUser(id:ID!):User\n    }\n"], ["\n    type User{\n        id:ID!\n        phoneNo:String!\n    }\n    type Query{\n        user:User!\n        users:[User]!\n    }\n    input NewUserInput{\n        phoneNo:String!\n    }\n    type Mutation{\n        register(input:NewUserInput):User!\n        removeUser(id:ID!):User\n    }\n"])));
var templateObject_1;
