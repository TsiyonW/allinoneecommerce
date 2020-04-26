import { ApolloServer } from 'apollo-server-express'
import express from 'express'
import { schemas } from './utils/schema'
import users from './types/user/user.resolver'
import savedItem from './types/saveditem/saveditem.resolver'
import search from './types/search/search.resolver'
import { merge } from 'lodash'
import { BotService } from './utils/common';
require('dotenv').config();
const bodyParser = require('body-parser');
let bot = require('./utils/common')

const app = express();
app.use(bodyParser.json());
//let bot = new BotService();

( async()=>{
  BotService.startBot();
  const server = new ApolloServer({
    typeDefs: schemas,
    resolvers: merge({}, users, savedItem, search),
    
  })

  server.applyMiddleware({app})

  app.listen({port:8000}, function(){
    console.log(`Server ready at http://localhost:8000${server.graphqlPath}`)
  });
  
  // app.post('/' + bot.token, function (req, res) {
  //  // console.log(bot.token)
  //   bot.processUpdate(req.body);
  //   res.sendStatus(200);
  // });

})()

