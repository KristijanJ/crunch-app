import React, { Component } from "react";
import "../assets/styles/global.css";
import "../assets/styles/recipes.css";
import { Link } from "react-router-dom";

class RecipeCard extends Component {

  decodeHtml = (html) => {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  }

  recipeRating = this.props.recipe.RecipeMetaRecords.find(record => record.Key === "user-rating")
  recipeImage = this.props.recipe.RecipeMetaRecords.find(record => record.Key === "recipe-image-large")
  recipeDescription = this.decodeHtml(this.props.recipe.Description);
  recipeName = this.decodeHtml(this.props.recipe.Name);

  render() {
    return (
      <div className="recipe">
        <Link
          to={"/" + this.props.recipe.Id}
          className="photo"
          style={{
            background: "url(" + this.recipeImage.Value + ")",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover"
          }}
        ></Link>
        <div className="title">
          <Link to={"/" + this.props.recipe.Id}>{this.recipeName}</Link>
        </div>
        <div className="description">{this.recipeDescription}</div>
        <div className="details">
          <div className="rating">
            <i className="far fa-star orange"></i>
            <span>{parseFloat(this.recipeRating.Value).toFixed(2)}</span>
          </div>
          <div className="bookmark">
            <i className="far fa-bookmark"></i>
          </div>
        </div>
        <Link className="lets-cook-btn" to={"/" + this.props.recipe.Id}>Let's Cook!</Link>
      </div>
    );
  }
}

export default RecipeCard;
