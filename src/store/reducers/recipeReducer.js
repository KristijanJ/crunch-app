const initState = {
  recipes: [],
  recipe: null
};

const recipeReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_RECIPES":
      return {
        ...state,
        recipes: action.payload
      };

    case "FETCH_RECIPE":
      return {
        ...state,
        recipe: action.payload
      };

    default:
      return state;
  }
};

export default recipeReducer;
