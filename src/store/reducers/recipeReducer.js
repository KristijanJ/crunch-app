const initState = {
  recipes: [],
  recipe: null,
  isLoading: true,
};

const recipeReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_RECIPES":
      return {
        ...state,
        recipes: action.payload,
      };

    case "FETCH_RECIPE":
      return {
        ...state,
        recipe: action.payload
      };

    case "SET_LOADING":
      return {
        ...state,
        isLoading: action.payload
      };

    default:
      return state;
  }
};

export default recipeReducer;
