import React from "react";

export default function Home() {
  return (
    <div className="home">
      <section className="hero">
        <img src="/images/hero-image.png" alt="food-image"></img>
        <h2>Our Mission</h2>
        <p>
          MyNutri offers nutrition guidance for individuals with chronic conditions
          like obesity, high blood pressure, and diabetes. Improve your health, even
          without a personal dietitian.
        </p>
      </section>
      <section className="cards">
        <div className="card">
          <h3>Nutrition Evaluation Tools</h3>
          <p>Check your weight classification and get helpful information.</p>
          <a href="/nutrition">Go to Guide</a>
        </div>
        <div className="card">
          <h3>Recipes</h3>
          <p>Healthy and delicious recipes for your daily meals.</p>
          <a href="/recipes">Explore Recipes</a>
        </div>
        <div className="card">
          <h3>Subscribe</h3>
          <p>Save your favorites and track your evaluations.</p>
          <a href="/subscribe">Subscribe Now</a>
        </div>
      </section>
    </div>
  );
}
