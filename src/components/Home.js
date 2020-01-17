// PACKAGES
import React, { Component } from "react";
import { connect } from "react-redux";

// REDUX
import { fetchRecipe } from "../store/actions/recipeActions";

// COMPONENTS
import Header from "./Header";
import Recipes from "./Recipes";

class Home extends Component {
  componentDidMount() {
    this.props.fetchRecipe(null);
  }

  render() {
    return (
      <>
        <Header />
        <Recipes />
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchRecipe: recipe => dispatch(fetchRecipe(recipe))
});

export default connect(null, mapDispatchToProps)(Home);
