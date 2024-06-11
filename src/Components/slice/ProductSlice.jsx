import { createSlice } from '@reduxjs/toolkit'

export const ProductSlice = createSlice({
  name: 'product',
  initialState: {
    cartItem: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [],
  },
  reducers: {
    addTocart: (state,actions) => {
      let findProduct = state.cartItem.findIndex((item)=>item.id == actions.payload.id
    )
   if(findProduct !== -1){
      state.cartItem[findProduct] .qun += 1
      localStorage.setItem("cart",JSON.stringify(state.cartItem))
   }else{
        state.cartItem = [...state.cartItem,actions.payload]
        localStorage.setItem("cart",JSON.stringify(state.cartItem))
   }
  },
  productIncrement: (state,actions)=>{
    state.cartItem[actions.payload].qun += 1
    localStorage.setItem("cart",JSON.stringify(state.cartItem))
  },
  productDecrement: (state,actions)=>{
    if(state.cartItem[actions.payload].qun > 1){
      state.cartItem[actions.payload].qun -= 1
    localStorage.setItem("cart",JSON.stringify(state.cartItem))
    }
  },
  removeproduct:(state,actions)=>{
    state.cartItem.splice(actions.payload, 1)
    localStorage.setItem("cart",JSON.stringify(state.cartItem))
  }

  },
})
export const { addTocart,productIncrement,productDecrement,removeproduct } = ProductSlice.actions

export default ProductSlice.reducer