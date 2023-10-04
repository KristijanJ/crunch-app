// PACKAGES
import React from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

// COMPONENTS
import Home from "./Home";
import Recipe from "./Recipe";
import Recipes from "./Recipes";

// STYLES
import "../assets/styles/global.css";

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Routes>
      <Route
        path="/:query/:id"
        element={<Recipe location={location} navigate={navigate} />}
      />
      <Route
        path="/:query"
        element={<Recipes location={location} navigate={navigate} />}
      />
      <Route
        path="/"
        element={<Home location={location} navigate={navigate} />}
      />
    </Routes>
  );
};

export default App;
