export const schemas = `
  type User{
    id:ID!
    phoneNo:String!
  }
  
  input NewUserInput{
    phoneNo:String!
  }
  type Cart{
    id:ID!
    user_id:ID!
    site:String!
    item:String!
    image:String
    unitPrice:Float!
    description:String!
    quantity:Int!
    measurementUnit:String!

  }
  input NewCartItemInput{
    user_id:ID!
    site:String!
    item:String!
    image:String
    unitPrice:Float!
    description:String!
    quantity:Int!
    measurementUnit:String!
  }

  input UpdateCartInput{
    quantity:Int!
  }


  type EcommerceAccount{
    id: ID!
    email:String!
    username:String!
    site:String!
    password:String!
    user_id:Int!
  }

  input NewAccountInput{
    email:String!
    username:String!
    site:String!
    password:String!
    user_id:Int!
  }

  input UpdateAccountInput{
    email:String
    username:String
    password:String
  }

  type Query{
    accounts:[EcommerceAccount]
    accountById(id:ID):EcommerceAccount
    accountBySite(site: String):EcommerceAccount
    users:[User]!
    userByPhoneNo:User!
    myCart:[Cart]
    cart:Cart
  }
  type Mutation{
    addAccount(input: NewAccountInput!):EcommerceAccount!
    updateAccount(id:ID!, input: UpdateAccountInput!):EcommerceAccount!
    deleteAccount(id:ID!):EcommerceAccount
    addToCart(input:NewCartItemInput!):Cart!
    removeFromCart(id:ID!):Cart
    emptyCart(user_id:ID!):[Cart]
    updateCart(id:ID!, input:UpdateCartInput):Cart!
    register(input:NewUserInput):User!
    removeUser(id:ID!):User
  }
  schema {
    query: Query
    mutation: Mutation
  }
  
`