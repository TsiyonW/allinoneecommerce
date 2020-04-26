import ApolloClient from "apollo-client";
import { createHttpLink } from "apollo-link-http";

import { InMemoryCache } from "apollo-cache-inmemory";
const gql = require("graphql-tag");
const fetch = require('node-fetch');




const client = new ApolloClient({
  link: createHttpLink({ uri: "http://localhost:8000/graphql/", fetch}),
  cache: new InMemoryCache()
});

export const getSearchResults = async(search_query: string) => {
    try{
        console.log(search_query, "hcns");
        let search_result = await client.query({
        query: gql`query search($item:String!) {
            search(item:$item){
                uri
                site
                description
                image
                unitPrice
                item
            }
          }`,
          variables: {
              item: search_query
          }
      })
      
    }catch(error){
        console.log(`Error: ${error}`)
    }
    
}
// export const saveItem = async() => {}
// export const getItems = async() => {}
// export const removeItem = async() => {}
// export const viewSite = async() => {}




// 
