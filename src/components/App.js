// PACKAGES
import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

// COMPONENTS
import Home from "./Home";
import Recipe from "./Recipe";
import Recipes from "./Recipes";

// STYLES
import "../assets/styles/global.css";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/:query/:id" render={props => <Recipe {...props} />} />
        <Route path="/:query" render={(props) => <Recipes {...props} />} />
        <Route path="/" render={(props) => <Home {...props} />} />
      </Switch>
    );
  }
}

export default App;
