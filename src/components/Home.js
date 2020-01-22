// PACKAGES
import React, { Component } from "react";
import { connect } from "react-redux";

// REDUX
import { fetchRecipe } from "../store/actions/recipeActions";
import { fetchRecipes } from "../store/actions/recipeActions";

// COMPONENTS
import Header from "./Header";

// STYLE
import "../assets/styles/home.css";

class Home extends Component {
  componentDidMount() {
    this.props.fetchRecipe(null);
    this.props.fetchRecipes([]);
  }

  render() {
    return (
      <>
        <Header type="home" {...this.props} />
        <div className="landing-wrapper">
          <div className="landing-content">
            <h1>WELCOME!</h1>
            <h3>Start by searching for some recipes above</h3>
          </div>
        </div>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchRecipe: recipe => dispatch(fetchRecipe(recipe)),
  fetchRecipes: recipe => dispatch(fetchRecipes(recipe))
});

export default connect(null, mapDispatchToProps)(Home);
