import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducer/userReducer";
let initialState = {

};

const store = configureStore({
    reducer: {
        user: userReducer


    },  // it can use multiple reducer and combine itself
    preloadedState: initialState
});

export default store;