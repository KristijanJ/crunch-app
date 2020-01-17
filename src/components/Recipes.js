// PACKAGES
import React, { Component } from "react";
import Slider from "react-slick";
import { connect } from "react-redux";

// COMPONENTS
import RecipeCard from "./RecipeCard";

// STYLES
import "../assets/styles/global.css";
import "../assets/styles/recipes.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

class Recipes extends Component {
  render() {
    return (
      <div className="recipes-wrapper">
        <h2>Recipes</h2>
        <div className="recipes">
          {this.props.recipes.length === 0 ? (
            <div style={{ textAlign: "center" }}>
              <div className="loader">Loading...</div>
              <h2>Loading...</h2>
            </div>
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

const mapStateToProps = state => ({
  recipes: state.recipeReducer.recipes
});

export default connect(mapStateToProps)(Recipes);
