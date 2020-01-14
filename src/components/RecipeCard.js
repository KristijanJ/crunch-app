import React, { Component } from "react";
import "../assets/styles/global.css";
import "../assets/styles/recipes.css";
import { Link } from "react-router-dom";

class RecipeCard extends Component {
  render() {
    const {
      id,
      image,
      title,
      readyInMinutes,
      servings
    } = this.props.recipe;

    return (
      <div className="recipe">
        <Link
          to={"/" + id}
          className="photo"
          style={{
            background: "url(https://spoonacular.com/recipeImages/"+image+")",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover"
          }}
        ></Link>
        <div className="title">
          <Link to={"/" + id}>{title}</Link>
        </div>
        <div className="description">
          
        </div>
        <div className="details">
          <div className="calories">
            <span>{readyInMinutes} </span>
            <span className="orange">mins</span>
          </div>
          <div className="bookmark">
            <i className="far fa-bookmark"></i>
          </div>
        </div>
      </div>
    );
  }
}

export default RecipeCard;
