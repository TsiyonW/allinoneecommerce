import { EcommerceAccountDB } from '../../db/models/EcommerceAccount'

// get user's accounts
const accounts = async(_:any, args:any,ctx:any)=>{
    const accounts = await EcommerceAccountDB.EcommerceAccount.query().where('user_id','=',ctx.user.id)
    // console.log(accounts);
    return accounts;
}

// get an account using id
const accountById = async(_:any, args:any,ctx:any)=>{
    const account = await EcommerceAccountDB.EcommerceAccount.query().findById(args.id)
    return account;
}

// get an account using sitename
const accountBySite = async(_:any, args:any,ctx:any)=>{
    const account = await EcommerceAccountDB.EcommerceAccount.query().where('user_id','=',ctx.user.id)
    return account;
}

// adds new account
const addAccount = async(_:any, args:any,ctx:any)=>{
  return await EcommerceAccountDB.EcommerceAccount.query().insert({...args.input, user_id:ctx.user.id})
}

// updates account's parameters like password change
const updateAccount = async(_:any, args:any,ctx:any)=>{
 return await EcommerceAccountDB.EcommerceAccount.query().patchAndFetchById(args.id,args.input )
}

// delete account
const deleteAccount = async(_:any, args:any,ctx:any)=>{
 return await EcommerceAccountDB.EcommerceAccount.query().deleteById(args.id)
}

export default {
    Query: {
      accounts,
      accountById,
      accountBySite
    },
    Mutation: {
      addAccount,
      updateAccount,
      deleteAccount
    }
}