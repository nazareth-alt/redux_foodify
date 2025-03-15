const recipeReducer = (state, action) => {
    switch (action.type) {
      case "LOADING":
        return { ...state, loading: true, error: null };
  
      case "FETCH_SINGLE_RECIPE_SUCCESS":
        return { ...state, recipe: action.payload, loading: false };
  
      case "ERROR":
        return { ...state, error: action.payload, loading: false };
  
      default:
        return state;
    }
  };
  
  export default recipeReducer;
  