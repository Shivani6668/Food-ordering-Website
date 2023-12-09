import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },

  reducers: {
    addItem: (state, action) => {
      const Itemindex = state.items.findIndex(
        (data) => data.id === action.payload.id
      );
   

      if (Itemindex >= 0) {
        state.items[Itemindex].qnty += 1;
      } else {
        const temp = { ...action.payload, qnty: 1 };
        state.items = [...state.items, temp];
      }

      // state.items = [...state.items,action.payload]

      // state.items.push(action.payload)
    },

    removeItem: (state, action) => {
      //   state.items.pop();

      const data = state.items.filter((ele) => ele.id !== action.payload);
      state.items = data;
 
     },

     removeSingle: (state,action)=>{
      const item_Dec = state.items.findIndex(
        (data) => data.id === action.payload.id
      );
     
      if(state.items[item_Dec].qnty >=1){
        state.items[item_Dec].qnty -=1
      }
     
    },
    clearCart: (state, action) => {
      return { items: [] };
    },
  },
});

export const { addItem, removeItem, clearCart, removeSingle } = cartSlice.actions;
export default cartSlice.reducer;
