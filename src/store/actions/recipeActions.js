export const fetchRecipes = data => ({
  type: "FETCH_RECIPES",
  payload: data
});

export const fetchRecipe = recipe => ({
  type: "FETCH_RECIPE",
  payload: recipe
});

export const setLoading = payload => ({
  type: "SET_LOADING",
  payload: payload
});