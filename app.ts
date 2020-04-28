import { ApolloServer } from "apollo-server-express";
import express from "express";
import { schemas } from "./utils/schema";
import users from "./types/user/user.resolver";
import savedItem from "./types/saveditem/saveditem.resolver";
import search from "./types/search/search.resolver";
import { merge } from "lodash";
require("dotenv").config();
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());


(async () => {
  const server = new ApolloServer({
    typeDefs: schemas,
    resolvers: merge({}, users, savedItem, search),
    introspection: true,
  });

  server.applyMiddleware({ app });
  const port = process.env.PORT || 8000
  
  app.listen(port, function () {
    console.log(`Server ready at http://localhost:8000${server.graphqlPath}`);
  });

})();
