import React, { Component } from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { fetchRecipe } from "../store/actions/recipeActions";
import "../assets/styles/global.css";
import "../assets/styles/recipe.css";
import Axios from "axios";

class Recipe extends Component {
  componentDidMount() {
    Axios.get(
      "https://api.spoonacular.com/recipes/" +
        this.props.match.params.id +
        "/information?apiKey=a8a78069d78b4d5d99564bbf6316dced"
    )
      .then(res => this.props.fetchRecipe(res.data))
      .catch(error => console.error(error));
  }

  render() {
    return (
      <>
        <Header {...this.props} />
        {this.props.recipe ? (
          <div className="single-recipe-wrapper">
            <div className="single-recipe">
            {/* LEFT SIDE */}
              <div className="left-side">
                <h1 className="recipe-title">{this.props.recipe.title}</h1>
                <div className="photo" style={{background: "url(" + this.props.recipe.image + ")"}}></div>
                <div className="description">
                  <p>You can prepare this meal in <span className="orange">{this.props.recipe.readyInMinutes}</span> minutes.</p>
                  <p>Once done, you will be able to enjoy <span className="orange">{this.props.recipe.servings}</span> beautiful servings.</p>
                  <p>The Health Score of the meal is <span className="orange">{this.props.recipe.healthScore}</span>.</p>
                </div>
              </div>
              {/* RIGHT SIDE */}
              <div className="right-side">
                <div className="right-side-section">
                  <h2 className="ingredients-title">Ingredients</h2>
                  <div className="ingredients">
                    {this.props.recipe.extendedIngredients.map((ingredient, i) => (
                      <p key={i}>
                        <span className="orange">{ingredient.amount} {ingredient.unit}</span>{" "}
                        <span>{ingredient.originalName}</span>
                      </p>))}
                  </div>
                </div>
                <div className="right-side-section">
                {this.props.recipe.analyzedInstructions.length > 0 && <h2 className="instructions-title">How to make it</h2>}
                  <div className="instructions">
                    {this.props.recipe.analyzedInstructions.length > 0 && 
                      this.props.recipe.analyzedInstructions[0].steps.map((instruction, i) => (
                      <p key={i}>
                        <span className="orange">{instruction.number}. </span>
                        <span>{instruction.step}</span>
                      </p>))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div style={{ textAlign: "center", paddingTop: 120 }}>
            <div className="loader">Loading...</div>
            <h2>Loading...</h2>
          </div>
        )}
      </>
    );
  }
}

const mapStateToProps = state => ({
  recipes: state.recipeReducer.recipes,
  recipe: state.recipeReducer.recipe
});

const mapDispatchToProps = dispatch => ({
  fetchRecipe: recipe => dispatch(fetchRecipe(recipe))
});

export default connect(mapStateToProps, mapDispatchToProps)(Recipe);
