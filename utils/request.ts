import ApolloClient from "apollo-client";
import { createHttpLink } from "apollo-link-http";

import { InMemoryCache } from "apollo-cache-inmemory";
const gql = require("graphql-tag");
const fetch = require('node-fetch');


//   type Mutation{
//     register(input:NewUserInput):User!
//     removeUser(chatId:String!):User
//     saveItem(chatId:String!,input:newItemInput!):SavedItem!,
//     removeItem(chatId:String!,id:ID!):SavedItem!,
//     emptySavedItem(chatId:String!):SavedItem!,

const client = new ApolloClient({
  link: createHttpLink({ uri: "http://localhost:8000/graphql/", fetch}),
  cache: new InMemoryCache()
});

export const getSearchResults = async(search_query: string) => {
    try{
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

export const getUser = async(chat_id: string) =>{
    try{
        
        let user = await client.query({
        query: gql`query userBychatId($chatId: String!) {
            userBychatId(chatId: $chatId){
                chatId
            }
          }`,
          variables: {
              chatId: chat_id
          }
      })
      return user;
    }catch(error){
        console.log(`Error: ${error}`)
    }

}
export const register = async(chat_id: string) =>{
    //input:NewUserInput
    try{
        if(await getUser(chat_id)){
            return "already registered"
        }else{
            let newUser = await client.mutate({
                mutation: gql`mutation register($input: NewUserInput!) {
                register(input: $input){
                    chatId
                }
            }`,
            variables: {
                input : {
                    chatId: chat_id
                }
            }
        })
        return newUser;
        }
    }catch(error){
        console.log(`Error: ${error}`)
    }

    
        

}
export const removeUser = async() =>{

}
// export const saveItem = async() => {
//     try{
//         let search_result = await client.mutate({
//         mutation: gql`mutation saveItem($item:String!) {
//             search(item:$item){
//                 uri
//                 site
//                 description
//                 image
//                 unitPrice
//                 item
//             }
//           }`,
//           variables: {
//               item: search_query
//           }
//       })
      
//     }catch(error){
//         console.log(`Error: ${error}`)
//     }
// }

// export const removeItem = async() => {}
// export const viewSite = async() => {}




// 
