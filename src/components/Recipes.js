import React, { Component } from "react";
import RecipeCard from "./RecipeCard";
import "../assets/styles/global.css";
import "../assets/styles/recipes.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { connect } from "react-redux";
import { recipes } from '../assets/recipes';

class Recipes extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };
    console.log(recipes.Result);
    return (
      <div className="recipes-wrapper">
        <h2>Recipes</h2>

        <div className="recipes">
          {recipes.Result.length === 0 ? (
            <>
              <div className="loader">Loading...</div>
              <h2>Loading...</h2>
            </>
          ) : (
            <Slider {...settings}>
              {recipes.Result.map(recipe => (
                <RecipeCard key={recipe.Id} recipe={recipe} />
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
