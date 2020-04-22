import { ApolloServer } from 'apollo-server'
import { schemas } from './utils/schema'
import users from './types/user/user.resolver'
import accounts from './types/ecommerceaccount/ecommerceaccount.resolver'
import cart from './types/cart/cart.resolver'
import { merge } from 'lodash'

( async()=>{

  const server = new ApolloServer({
    typeDefs: schemas,
    resolvers: merge({}, users,cart, accounts)
    
  })

const {url} = await server.listen({port:8000})
console.log(`server ready at ${url}`)

})()