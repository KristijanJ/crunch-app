import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Axios from "axios";
import { connect } from "react-redux";
import { fetchRecipes } from "../store/actions/recipeActions";
import Home from "./Home";
import Recipe from "./Recipe";
import "../assets/styles/global.css";
import { recipes } from '../assets/recipes/recipes';

class App extends Component {
  componentDidMount() {
    this.props.fetchRecipes(recipes.results);
  }

  render() {
    return (
      <Switch>
        <Route path="/:id" render={props => <Recipe {...props} />} />
        <Route path="/" render={() => <Home />} />
      </Switch>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchRecipes: recipes => dispatch(fetchRecipes(recipes))
  };
};

export default connect(null, mapDispatchToProps)(App);
