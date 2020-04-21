import { ApolloServer } from 'apollo-server-express'
import express from 'express'
import { schemas } from './utils/schema'
import users from './types/user/user.resolver'
import accounts from './types/ecommerceaccount/ecommerceaccount.resolver'
import cart from './types/cart/cart.resolver'
import { merge } from 'lodash'
import { BotService } from './utils/common';

const app = express();
//let bot = new BotService();

( async()=>{
  BotService.startBot();
  const server = new ApolloServer({
    typeDefs: schemas,
    resolvers: merge({}, users,cart, accounts)
    
  })

  server.applyMiddleware({app})

  app.listen({port:3000}, function(){
    console.log(`Server ready at http://localhost:3000${server.graphqlPath}`)
  });
  

})()

