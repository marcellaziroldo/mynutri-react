import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1>MyNutri</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/nutrition">Nutrition Guide</Link></li>
        <li><Link to="/recipes">Recipes</Link></li>
        <li><Link to="/subscribe">Subscribe</Link></li>
      </ul>
    </nav>
  );
}
