import { createSlice } from "@reduxjs/toolkit";

const initialState = { favorites: [] }; // Use an object with a key

const favoriteSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    add: (state, action) => {
      state.favorites.push(action.payload);
    },
    remove: (state, action) => {
      state.favorites = state.favorites.filter(recipe => recipe.uri !== action.payload);
    }
  }
});

export const { add, remove } = favoriteSlice.actions;
export default favoriteSlice.reducer;
