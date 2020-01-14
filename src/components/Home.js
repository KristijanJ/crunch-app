import React, { Component } from "react";
import Header from "./Header";
import Recipes from "./Recipes";

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <Recipes />
      </>
    );
  }
}

export default Home;
