import React, { Component } from "react";
import RecipeCard from "./RecipeCard";
import "../assets/styles/global.css";
import "../assets/styles/recipes.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Recipes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: [
        {
          id: 1,
          title: "Classic Green Bean Casserole",
          description:
            "It's a dish everyone's expecting on the holidays, but it's so easy to make, you can serve any day.",
          rating: "4.1 | 21 reviews",
          photo:
            "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        },
        {
          id: 2,
          title: "Mom’s Zucchini Bread",
          description:
            "What makes this meatloaf so tasty is the addition of a can of tomato soup. Served with roasted potatoes and carrots, this dish is comfort food at it's best.",
          rating: "4.1 | 21 reviews",
          photo:
            "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        },
        {
          id: 3,
          title: "Pepperoni Pizza",
          description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et nesciunt laudantium necessitatibus quaerat optio labore? Excepturi reiciendis, explicabo quod placeat eligendi est cupiditate id sapiente neque commodi cum. Eum, quia!",
          rating: "4.1 | 21 reviews",
          photo:
            "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        }
      ]
    };
  }

  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: true
    };
    return (
      <div className="recipes-wrapper">
        <h2>Recipes</h2>

        <div className="recipes">
          <Slider {...settings}>
            <RecipeCard recipe={this.state.recipes[0]} />
            <RecipeCard recipe={this.state.recipes[1]} />
            <RecipeCard recipe={this.state.recipes[2]} />
            <RecipeCard recipe={this.state.recipes[0]} />
            <RecipeCard recipe={this.state.recipes[1]} />
            <RecipeCard recipe={this.state.recipes[2]} />
          </Slider>
        </div>
      </div>
    );
  }
}

export default Recipes;
