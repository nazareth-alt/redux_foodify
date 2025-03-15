export const startFetchSingleRecipe = (dispatch, id) => {
    dispatch({ type: "FETCH_RECIPE_REQUEST" });
  
    const appId = "051b1017";
    const appKey = "1f5df7a0b617229008922db3009c4c86";
  
    // Ensure id is valid before making the request
    if (!id) {
      dispatch({ type: "FETCH_RECIPE_FAILURE", payload: "Invalid recipe ID" });
      return;
    }
  
    // Fetch the recipe data using async/await
    const fetchRecipe = async () => {
      try {
        const response = await fetch(
          `https://api.edamam.com/api/recipes/v2/${id}?type=public&app_id=${appId}&app_key=${appKey}`
        );
        
        const data = await response.json();
  
        // Check if there's an error in the response
        if (data.error) {
          dispatch({ type: "FETCH_RECIPE_FAILURE", payload: data.error });
        } else if (data.recipe) {
          dispatch({ type: "FETCH_RECIPE_SUCCESS", payload: data.recipe });
        } else {
          dispatch({ type: "FETCH_RECIPE_FAILURE", payload: "Recipe not found" });
        }
      } catch (error) {
        // Catch network or other errors
        dispatch({ type: "FETCH_RECIPE_FAILURE", payload: `An error occurred: ${error.message}` });
      }
    };
  
    fetchRecipe();
  };
  