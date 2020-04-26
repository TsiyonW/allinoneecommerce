export const schemas = `
  type User{
    id:ID!
    chatId:String!
  }
  
  input NewUserInput{
    chatId:String!
  }

  type SavedItem{
    id:ID
    chatId:String
    item:String!
    description:String
    unitPrice:String
    uri:String
    image:String
    site:String
    rating:String
    dateCreated:String

}

input newItemInput{
    chatId:String!
    item:String!
    description:String
    unitPrice:String
    uri:String
    image:String
    site:String
    rating:String
}


  type Query{
    users:[User]!
    userBychatId(chatId:String!):User!
    mySavedItems(chatId:String!):[SavedItem]!
    savedItem(chatId:String,id:ID!):SavedItem!
    search(item:String!):[SavedItem]
  }
  type Mutation{
    register(input:NewUserInput):User!
    removeUser(chatId:String!):User
    saveItem(chatId:String!,input:newItemInput!):SavedItem!,
    removeItem(chatId:String!,id:ID!):SavedItem!,
    emptySavedItem(chatId:String!):SavedItem!,
  }
  schema {
    query: Query
    mutation: Mutation
  }
  
`