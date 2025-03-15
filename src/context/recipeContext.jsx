import { createContext, useReducer, useContext } from "react";
import recipeReducer from "../reducers/recipeReducer";

// Create Context
const RecipeContext = createContext();

// Initial State
const initialState = {
  recipes: [],       // Stores fetched recipes
  recipe: null,      // Stores single recipe details
  loading: false,    // Controls loading state
  error: null        // Stores errors
};

// Provider Component
export const RecipeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(recipeReducer, initialState);

  return (
    <RecipeContext.Provider value={{ ...state, dispatch }}>
      {children}
    </RecipeContext.Provider>
  );
};

// Custom Hook
export const useRecipeContext = () => {
  return useContext(RecipeContext);
};
