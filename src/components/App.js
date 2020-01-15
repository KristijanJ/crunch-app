import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Axios from "axios";
import { connect } from "react-redux";
import { fetchRecipes } from "../store/actions/recipeActions";
import Home from "./Home";
import Recipe from "./Recipe";
import Test from "./Test";
import recipes from '../assets/recipes';

import "../assets/styles/global.css";

class App extends Component {
  componentDidMount() {
    Axios.get("https://api.spoonacular.com/recipes/search?query=chicken&apiKey=a8a78069d78b4d5d99564bbf6316dced")
      .then(res => {
        this.props.fetchRecipes(res.data.results);
      })
      .catch(error => console.error(error));
    // this.props.fetchRecipes(recipes.results);
  }

  render() {
    return (
      <Switch>
        <Route path="/test" render={() => <Test />} />
        <Route path="/:id" render={(props) => <Recipe {...props} />} />
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
