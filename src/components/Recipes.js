// PACKAGES
import React, { Component } from "react";
import Slider from "react-slick";
import { connect } from "react-redux";
import Axios from "axios";

// COMPONENTS
import RecipeCard from "./RecipeCard";
import Header from "./Header";

// REDUX
import { fetchRecipes, setLoading } from "../store/actions/recipeActions";
import { fetchRecipe } from "../store/actions/recipeActions";

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
        dots: true,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

class Recipes extends Component {
  constructor(props) {
    super(props);
    this.state = { query: props.location.pathname.replace("/", "") };
    this.locationPath = props.location.pathname.replace("/", "");
  }

  componentDidMount() {
    if (this.props.isLoading) {
      this.fetchTheRecipes();
    }
    this.props.fetchRecipe(null);
  }
  componentDidUpdate() {
    this.locationPath = this.props.location.pathname.replace("/", "");
    if (this.locationPath !== this.state.query && !this.props.isLoading) {
      this.fetchTheRecipes();
      this.setState({ query: this.props.location.pathname.replace("/", "") });
    }
  }

  fetchTheRecipes() {
    this.props.setLoading(true);
    Axios.get(
      "https://api.spoonacular.com/recipes/search?query=" +
        this.locationPath +
        "&number=10&apiKey=a8a78069d78b4d5d99564bbf6316dced",
    )
      .then((res) => {
        this.props.fetchRecipes(res.data.results);
        this.props.setLoading(false);
      })
      .catch((error) => console.error(error));
  }

  render() {
    return (
      <>
        <Header {...this.props} type="home" />
        <div className="recipes-wrapper">
          <h2>Recipes</h2>
          <div className="recipes">
            {this.props.isLoading ? (
              <div style={{ textAlign: "center" }}>
                <div className="loader">Loading...</div>
                <h2>Loading...</h2>
              </div>
            ) : this.props.recipes.length === 0 ? (
              <div style={{ textAlign: "center" }}>
                <h2>No recipes found...</h2>
              </div>
            ) : (
              <Slider {...settings}>
                {this.props.recipes.map((recipe) => (
                  <RecipeCard key={recipe.id} recipe={recipe} {...this.props} />
                ))}
              </Slider>
            )}
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  recipes: state.recipeReducer.recipes,
  isLoading: state.recipeReducer.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  fetchRecipes: (recipes) => dispatch(fetchRecipes(recipes)),
  fetchRecipe: (recipe) => dispatch(fetchRecipe(recipe)),
  setLoading: (payload) => dispatch(setLoading(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Recipes);
