export const schemas = `
  type User{
    id:ID!
    chatId:String!
  }
  
  input NewUserInput{
    chatId:String!
  }

  type SavedItem{
    id:ID!
    user_id:ID!
    item:String!
    description:String
    unitPrice:String
    uri:String
    image:String
    site:String
    rating:String
    dateCreated:String

}

type newItemInput{
    user_id:ID!
    item:String!
    description:String
    unitPrice:String
    uri:String
    image:String
    site:String
    rating:String
    dateCreated:String
}


  type Query{
    users:[User]!
    userBychatId:User!
    mySavedItems:[SavedItem]!
    savedItem(id:ID!):SavedItem!
    search(item:String!):SavedItem
  }
  type Mutation{
    register(input:NewUserInput):User!
    removeUser(id:ID!):User
    saveItem(input:newItemInput!):SavedItem!,
    removeItem(id:ID!):SavedItem!,
    emptySavedItem(user_id:ID!):SavedItem!,
    
  }
  schema {
    query: Query
    mutation: Mutation
  }
  
`