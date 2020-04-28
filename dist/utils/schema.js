"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schemas = "\n  type User{\n    id:ID!\n    chatId:String!\n  }\n  \n  input NewUserInput{\n    chatId:String!\n  }\n\n  type SavedItem{\n    id:ID\n    chatId:String\n    item:String!\n    description:String\n    unitPrice:String\n    uri:String\n    image:String\n    site:String\n    rating:String\n    dateCreated:String\n\n}\n\ninput newItemInput{\n    chatId:String!\n    item:String!\n    description:String\n    unitPrice:String\n    uri:String\n    image:String\n    site:String\n    rating:String\n}\n\n\n  type Query{\n    users:[User]!\n    userBychatId(chatId:String!):User!\n    mySavedItems(chatId:String!):[SavedItem]!\n    savedItem(chatId:String,id:ID!):SavedItem!\n    search(item:String!):[SavedItem]\n  }\n  type Mutation{\n    register(input:NewUserInput):User!\n    removeUser(id:ID!):User\n    saveItem(chatId:String!,input:newItemInput!):SavedItem!,\n    removeItem(chatId:String!,id:ID!):SavedItem!,\n    emptySavedItem(chatId:String!):SavedItem!,\n  }\n  schema {\n    query: Query\n    mutation: Mutation\n  }\n  \n";
