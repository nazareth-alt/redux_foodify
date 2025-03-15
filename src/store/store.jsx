import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "./favoriteSlice";
// import Favorites from "../components/recipes/Favorites";

const store = configureStore({
    reducer : {
       favorites: favoriteReducer,
    }
})

export default store;