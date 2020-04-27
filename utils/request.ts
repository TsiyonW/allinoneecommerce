import ApolloClient from "apollo-client";
import { createHttpLink } from "apollo-link-http";

import { InMemoryCache } from "apollo-cache-inmemory";
const gql = require("graphql-tag");
const fetch = require('node-fetch');


const client = new ApolloClient({
  link: createHttpLink({ uri: "http://localhost:8000/graphql/", fetch}),
  cache: new InMemoryCache()
});


//to get search results 
export const getSearchResults = async(item: string) => {
    try{
        let search_result: any = await client.query({
        query: gql`query search($item: String!) {
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
              item: item
          }
      })
      console.log(search_result['data']['search'])
      return search_result;
    }catch(error){
        console.log(`Error: ${error}`)
    }
    
}

//to get saved items for a user
export const getItems = async(chat_id: String) => {
    try{
        let items = await client.query({
        query: gql`query mySavedItems($chatId:String!) {
            mySavedItems(chatId:$chatId){
                chatId
                item
                description
                unitPrice
                uri
                image
                site
            }
          }`,
          variables: {
              chatId: chat_id
          }
      })
    return items;
    }catch(error){
        console.log(`Error: ${error}`)
    }
}

//to get a specific user
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

// register new user
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
//remove exsisting user
export const removeUser = async(chat_id: string) =>{
    try{
        if(await getUser(chat_id)){
            console.log(chat_id)
            let remove = await client.mutate({
                mutation: gql`mutation removeUser($chatId: String!) {
                removeUser(chatId: $chatId){
                    chatId
                }
            }`,
            variables: {
                    chatId: chat_id
            }
            })
            return remove;
        }else{
            return "No account for this user use /start to get started"
        }
    }catch(error){
        console.log(`Error: ${error}`)
    }

}

//save an item
export const saveItem = async(chat_id: string, input: any) => {
    //saveItem(chatId:String!,input:newItemInput!)
    try{
        let ItemToBeSaved = await client.mutate({
        mutation: gql`mutation saveItem($chatId: String!,$input: newItemInput!) {
            saveItem(chatId: $chatId,input: $input){
                uri
                site
                description
                image
                unitPrice
                item
            }
          }`,
          variables: {
              chatId: chat_id,
              input: input
          }
      })
      return ItemToBeSaved
      
    }catch(error){
        console.log(`Error: ${error}`)
    }
}
//remove an item
export const removeItem = async(chat_id: string, id: number) => {
    try{
        let removeItem = await client.mutate({
        mutation: gql`mutation removeItem($chatId: String!,$id: ID!) {
            removeItem(chatId: $chatId,id: $id){
                id
                chatId
                uri
                site
                description
                image
                unitPrice
                item
            }
          }`,
          variables: {
              chatId: chat_id,
              id: id
          }
      })
      return removeItem
      
    }catch(error){
        console.log(`Error: ${error}`)
    }

}

//delete all saved items
export const emptySavedItem = async(chat_id: string) => {
    try{
        let emptyItems = await client.mutate({
        mutation: gql`mutation emptySavedItem($chatId: String!) {
            emptySavedItem(chatId: $chatId){
                id
                chatId
                uri
                site
                description
                image
                unitPrice
                item
            }
          }`,
          variables: {
              chatId: chat_id,
          }
      })
      return emptyItems
      
    }catch(error){
        console.log(`Error: ${error}`)
    }

}

