import React, { Component } from "react";
import RecipeCard from "./RecipeCard";
import "../assets/styles/global.css";
import "../assets/styles/recipes.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { connect } from "react-redux";

class Recipes extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };
    return (
      <div className="recipes-wrapper">
        <h2>Recipes</h2>

        <div className="recipes">
          {this.props.recipes.length === 0 ? (
            <>
              <div className="loader">Loading...</div>
              <h2>Loading...</h2>
            </>
          ) : (
            <Slider {...settings}>
              {this.props.recipes.map(recipe => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            </Slider>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    recipes: state.recipeReducer.recipes
  };
};

export default connect(mapStateToProps)(Recipes);
