import React, { Component } from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { fetchRecipe } from "../store/actions/recipeActions";
import "../assets/styles/global.css";
import "../assets/styles/recipe.css";
import { recipe } from '../assets/recipes/recipe';

class Recipe extends Component {
  componentDidMount() {
    this.props.fetchRecipe(recipe);
  }

  render() {
    this.props.recipe && console.log(this.props.recipe.analyzedInstructions[0].steps)
    return (
      <>
        <Header />
        {this.props.recipe && 
          <div className="single-recipe-wrapper">
          <div className="single-recipe">
            <div className="left-side">
            <h1 className="recipe-title">{this.props.recipe.title}</h1>
              <div
                className="photo"
                style={{
                  background: "url(" + this.props.recipe.image + ")",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover"
                }}
              ></div>
              <div className="description">
                  <p>Minutes: {this.props.recipe.readyInMinutes}</p>
                  <p>Servings: {this.props.recipe.servings}</p>
                  <p>Health Score: {this.props.recipe.healthScore}</p>                  
              </div>
            </div>
            <div className="right-side">
              <div className="right-side-section">
                <h2 className="ingredients-title">Ingredients</h2>
                <div className="ingredients">
                  {this.props.recipe.extendedIngredients.map((ingredient, i) => <p key={i}>{ingredient.originalString}</p>)}
                </div>
              </div>
              <div className="right-side-section">
                <h2 className="instructions-title">How to make it</h2>
                <div className="instructions">
                  {this.props.recipe.analyzedInstructions[0].steps.map((instruction, i) => (
                    <p key={i}>
                      <span className="orange">{instruction.number}. </span>
                      <span>{instruction.step}</span>
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        }
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    recipes: state.recipeReducer.recipes,
    recipe: state.recipeReducer.recipe
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchRecipe: recipe => dispatch(fetchRecipe(recipe))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Recipe);
