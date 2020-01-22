import React, { Component } from "react";
import "../assets/styles/global.css";
import "../assets/styles/recipes.css";
import { Link } from "react-router-dom";

class RecipeCard extends Component {
  render() {
    const query = this.props.match.params.query;
    const id = this.props.recipe.id;

    return (
      <div className="recipe">
        <Link
          to={`/${query}/${id}`}
          className="photo"
          style={{background:"url(https://spoonacular.com/recipeImages/"+this.props.recipe.image +")"}}
        ></Link>
        <div className="title">
          <Link to={`/${query}/${id}`}>{this.props.recipe.title}</Link>
        </div>
        <div className="details">
          <div className="readyInMinutes">
            <i className="far fa-clock orange"></i>{" "}
            {this.props.recipe.readyInMinutes}<span>mins</span>
          </div>
          <div className="servings">
            <i className="fas fa-utensils orange"></i>{" "}
            {this.props.recipe.servings}{" "}
            {this.props.recipe.servings === 1 ? <span>dish</span> : <span>dishes</span>}
          </div>
        </div>
        <Link className="lets-cook-btn" to={`/${query}/${id}`}>
          Let's Cook!
        </Link>
      </div>
    );
  }
}

export default RecipeCard;
