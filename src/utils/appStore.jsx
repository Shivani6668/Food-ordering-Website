const { configureStore } = require("@reduxjs/toolkit");
import cartReducer from "../utils/slice/cartSlice"
const appStore = configureStore({
    reducer:{
        cart: cartReducer,

    },
})

export default appStore;