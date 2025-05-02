import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./pages/home";
import NutritionGuide from "./pages/nutritionguide";
import Recipes from "./pages/recipes";
import Subscribe from "./pages/subscribe";
import Admin from "./pages/admin";
import Register from "./pages/register";
import RecipesAdmin from "./pages/recipesadmin";

export default function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nutrition" element={<NutritionGuide />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/subscribe" element={<Subscribe />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/register" element={<Register />} />
          <Route path="/recipesadmin" element={<RecipesAdmin />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  )};



  