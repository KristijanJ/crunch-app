import React, { Component } from "react";
import Header from "./Header";
import Recipes from "./Recipes";
import { connect } from "react-redux";
import { fetchRecipe } from "../store/actions/recipeActions";

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
