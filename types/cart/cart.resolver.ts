import { CartDB } from '../../db/models/Cart'

// return all the items in the cart
export const myCart = async(_:any, args:any,ctx:any)=>{
    const cartItems = await CartDB.Cart.query()
                                .where('user_id', '=',ctx.user.id)
    return cartItems;
}

//get specific item in the cart using id
export const cart = async(_:any, args:any,ctx:any)=>{
    const cartItem = await CartDB.Cart.query().findById(args.id)
    return cartItem
}
// add item to cart
const addToCart = async(_:any, args:any,ctx:any)=>{
  return await  CartDB.Cart.query().insert({...args.input, user_id:ctx.user.id})

}
// removes item from the cart
const removeFromCart = async(_:any, args:any,ctx:any)=>{

  return await CartDB.Cart.query().deleteById(args.id)
}
// remove all items from the cart
const emptyCart = async(_:any, args:any,ctx:any)=>{

  return await CartDB.Cart.query().delete().where('user_id', '=',args.user_id)
}
// update items from cart /updating the quantity of items to add to a cart/
const updateCart = async(_:any, args:any,ctx:any)=>{
  return await CartDB.Cart.query().patchAndFetchById(args.id,args.input )

}
export default {
    Query: {
      myCart,
      cart
    },
    Mutation: {
      addToCart,
      removeFromCart,
      emptyCart,
      updateCart
    }
}