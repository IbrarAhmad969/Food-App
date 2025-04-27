import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: [], // initial state for data
    reducers: {
        Add_Item: (state, action)=>{
            let existsItem = state.find((item)=>item.id===action.payload.id)
            if(existsItem){
                return state.map((item)=>(item.id===action.payload.id? {...item, qty: item.qty+1} : item))
            }
            else{
                state.push(action.payload) // argument passed ... 
            }
        },
        remove_Item: (state, action)=>{
            return state.filter((item)=>item.id!==action.payload)
        },

        IncrementQuantity: (state, action)=>{
            return state.map((item)=> item.id===action.payload? {...item, qty: item.qty+1} : item)
        },
        DecrementQuantity: (state, action)=>{
            return state.map((item)=> item.id===action.payload? {...item, qty: item.qty-1} : item)
        },


    }
})

export const {Add_Item, remove_Item, IncrementQuantity, DecrementQuantity} = cartSlice.actions
export default cartSlice.reducer