import React, { Component } from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { fetchRecipe } from "../store/actions/recipeActions";
// import Axios from "axios";
import { recipes } from "../assets/recipes";
import "../assets/styles/global.css";
import "../assets/styles/recipe.css";

class Recipe extends Component {
  decodeHtml = html => {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  };

  recipe = recipes.Result.find(
    recipe => recipe.Id === this.props.match.params.id
  );
  recipeImage = this.recipe.RecipeMetaRecords.find(
    record => record.Key === "recipe-image-large"
  );
  recipeDescription = this.decodeHtml(this.recipe.Description);
  recipeName = this.decodeHtml(this.recipe.Name);
  recipeSteps = this.recipe.RecipeSteps;
  recipeIngredients = this.recipe.Ingredients;

  render() {
    return (
      <>
        <Header />
        <div className="single-recipe-wrapper">
          <div className="single-recipe">
            <div className="left-side">
              <h1 className="recipe-title">{this.recipeName}</h1>
              <div
                className="photo"
                style={{
                  background: "url(" + this.recipeImage.Value + ")",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover"
                }}
              ></div>
              <div className="description">
                <h2>Description</h2>
                {this.recipeDescription}
              </div>
            </div>
            <div className="right-side">
              <div className="right-side-section">
                <h2 className="ingredients-title">Ingredients</h2>
                <div className="ingredients">
                  {this.recipeIngredients.map((ingredient, i) => (
                    <div key={i}>
                      <p className="ingredient">
                        {ingredient.Amount}
                      </p>
                      {ingredient.ExternalProduct !== null ? (
                        <p className="ingredient-description">
                          {ingredient.Unit} {this.decodeHtml(ingredient.ExternalProduct.Name)}
                        </p>
                      ) : (
                        <p className="ingredient-description">
                          {this.decodeHtml(ingredient.DescriptionFormatter)}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <div className="right-side-section">
                <h2 className="steps-title">Steps</h2>
                <div className="steps">
                  {this.recipeSteps.map((step, i) => (
                    <div key={i}>
                      <p className="step">Step {i + 1}</p>
                      <p className="step-description">
                        {this.decodeHtml(step.Description)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
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
