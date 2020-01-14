import React, { Component } from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { fetchRecipe } from "../store/actions/recipeActions";
import recipes from '../assets/recipes';

class Recipe extends Component {
  componentDidMount() {
    if (this.props.recipes.length > 0) {
      console.log('NO NEW FETCH PERFORMED')
      this.props.fetchRecipe(this.props.recipes[this.props.match.params.id - 1]);
    } else {
      console.log('NEW FETCH PERFORMED')
      this.props.fetchRecipe(recipes[this.props.match.params.id - 1]);
    }
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
