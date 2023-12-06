import {createSlice} from '@reduxjs/toolkit';


let cartSlice = createSlice({
    name : 'cart',
    initialState : {
        items : []
    },
    reducers : {
        addToCart : (state , action)=>{
            state.items.push(action.payload);

        },
        removeCart : (state , action) =>{
            state.items.pop();
        },
        clearCart : (state) =>{
            state.items = []
        }
    }
})

export const {addToCart , removeCart , clearCart} = cartSlice.actions;

export default cartSlice.reducer;