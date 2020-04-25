import { UserDB } from '../../db/models/User';

//get all users
const users = async(_:any, args:any,ctx:any)=>{
    const users = await UserDB.User.query();
    return users;
}

// get user by phone number
const userBychatId = async(_:any, args:any,ctx:any)=>{
    const user = await UserDB.User.query().where('chatId','=',args.chatId);
    return user;
}

// registers user
const register = async(_:any, args:any,ctx:any)=>{
  return await  UserDB.User.query().insert({...args.input})

}

// removes user
const removeUser = async(_:any, args:any,ctx:any)=>{
  return await UserDB.User.query().deleteById(args.id)

}
export default {
    Query: {
      users,
      userBychatId
    },
    Mutation: {
      register,
      removeUser
    }
}