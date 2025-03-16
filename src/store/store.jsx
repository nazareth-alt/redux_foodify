import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "./favoriteSlice";
import authReducer from '../store/authSlice';

const store = configureStore({
    reducer : {
       favorites: favoriteReducer,
       auth: authReducer,  // Add the auth slice to the store
    }
})

export default store;