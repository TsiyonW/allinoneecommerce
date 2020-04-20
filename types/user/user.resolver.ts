import { UserDB } from '../../db/models/User';

//get all users
const users = async(_:any, args:any,ctx:any)=>{
    const users = await UserDB.User.query();
    return users;
}

// get user by phone number
const userByPhoneNo = async(_:any, args:any,ctx:any)=>{
    const user = await UserDB.User.query().where('phoneNo','=',args.phoneNo);
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
      userByPhoneNo
    },
    Mutation: {
      register,
      removeUser
    }
}