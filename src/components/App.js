import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Axios from "axios";
import { connect } from "react-redux";
import { fetchRecipes } from "../store/actions/recipeActions";
import Home from "./Home";
import Recipe from "./Recipe";
import Test from "./Test";
import recipes from "../assets/recipes";

import "../assets/styles/global.css";

class App extends Component {
  componentDidMount() {
    // Axios({
    //   method: "get",
    //   url: "https://services.campbells.com/api/Recipes//recipe",
    //   mode: "no-cors",
    //   headers: {
    //     "Access-Control-Allow-Origin": "*",
    //     "X-Api-Key": "39c8192811033a1a01b553bf2a645aa4", // THE! API key
    //     Accept: "application/json"
    //   }
    // }).then(res => console.log(res));

    // fetch("https://services.campbells.com/api/Recipes/recipe", {
    //   method: "GET",
    //   mode: "no-cors",
    //   headers: {
    //     "Access-Control-Allow-Origin": "*",
    //     "X-Api-Key": "39c8192811033a1a01b553bf2a645aa4", // THE! API key
    //     Accept: "application/json"
    //   }
    // })
    //   .then(res => console.log(res))
    //   // .then(data => {
    //   //   console.log(data);
    //   // })
    //   .catch(err => {
    //     console.log("Error!");
    //     console.log(err);
    //   });
  }

  render() {
    return (
      <Switch>
        <Route path="/test" render={() => <Test />} />
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
