import { createSlice } from "@reduxjs/toolkit";

// Load favorites from localStorage (if available)
const loadFavorites = () => {
  const savedFavorites = localStorage.getItem("favorites");
  return savedFavorites ? JSON.parse(savedFavorites) : [];
};

const favoriteSlice = createSlice({
  name: "favorites",
  initialState: {
    favorites: loadFavorites(),
  },
  reducers: {
    addToFavorites: (state, action) => {
      // Prevent duplicates
      if (!state.favorites.some((recipe) => recipe.id === action.payload.id)) {
        state.favorites.push(action.payload);
        localStorage.setItem("favorites", JSON.stringify(state.favorites)); // Save to localStorage
      }
    },
    removeFromFavorites: (state, action) => {
      state.favorites = state.favorites.filter(
        (recipe) => recipe.id !== action.payload
      );
      localStorage.setItem("favorites", JSON.stringify(state.favorites)); // Update localStorage
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoriteSlice.actions;
export default favoriteSlice.reducer;

