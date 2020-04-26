import { SavedItemDB } from '../../db/models/SavedItem'

// return all the items saved by user
export const mySavedItems = async(_:any, args:any,ctx:any)=>{
    return await SavedItemDB.SavedItem.query().where('chatId', '=',args.chatId)
   
}

//get specific item in the saved using id
export const savedItem = async(_:any, args:any,ctx:any)=>{
    return await SavedItemDB.SavedItem.query().findById(args.id)
}

// add item to saved items
const saveItem = async(_:any, args:any,ctx:any)=>{
  return await  SavedItemDB.SavedItem.query().insert({...args.input})

}
// removes item from the saved
const removeItem = async(_:any, args:any,ctx:any)=>{
  return await SavedItemDB.SavedItem.query().deleteById(args.id)
}

// remove all saved items
const emptySavedItem = async(_:any, args:any,ctx:any)=>{
  return await SavedItemDB.SavedItem.query().delete().where('chatId', '=',args.chatId)
}

export default {
    Query: {
      mySavedItems,
      savedItem
    },
    Mutation: {
      saveItem,
      removeItem,
      emptySavedItem,
    }
}