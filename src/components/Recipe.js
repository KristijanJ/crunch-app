import React, { Component } from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { fetchRecipe } from "../store/actions/recipeActions";
import Axios from "axios";
import recipes from "../assets/recipes";

class Recipe extends Component {
  componentDidMount() {
    console.log("NEW FETCH PERFORMED");
    Axios.get(
      "https://api.spoonacular.com/recipes/" +
        this.props.match.params.id +
        "/information?apiKey=a8a78069d78b4d5d99564bbf6316dced"
    )
      .then(res => {
        console.log(res.data)
        this.props.fetchRecipe(res.data);
      })
      .catch(error => console.error(error));
  }

  render() {
    return (
      <>
        <Header />
        <h1>Recipe no {this.props.match.params.id}</h1>
        <p>{this.props.recipe && this.props.recipe.title}</p>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    recipes: state.recipeReducer.recipes,
    recipe: state.recipeReducer.recipe
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchRecipe: recipe => dispatch(fetchRecipe(recipe))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Recipe);
