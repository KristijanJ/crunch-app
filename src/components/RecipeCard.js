import React, { Component } from "react";
import "../assets/styles/global.css";
import "../assets/styles/recipes.css";
import { Link } from "react-router-dom";

class RecipeCard extends Component {
  render() {
    return (
      <div className="recipe">
        <Link
          to={"/" + this.props.recipe.id}
          className="photo"
          style={{
            background: "url(" + this.props.recipe.photo + ")",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover"
          }}
        ></Link>
        <div className="title">
          <Link to={"/" + this.props.recipe.id}>{this.props.recipe.title}</Link>
        </div>
        <div className="description">{this.props.recipe.description}</div>
        <div className="details">
          <div className="rating">
            <i className="far fa-star"></i>
            <span>{this.props.recipe.rating}</span>
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
