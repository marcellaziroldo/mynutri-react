import { useEffect, useState } from 'react';

function Recipes() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('/recipes.json')
      .then((res) => res.json())
      .then((data) => setRecipes(data))
      .catch((err) => console.error('Error loading recipes:', err));
  }, []);

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Recipes</h2>
      {recipes.map((recipe) => (
        <div key={recipe.id} style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem', borderRadius:'2rem' }}>
          <h3>{recipe.name}</h3>
       

          <h4>Ingredients:</h4>
          <ul>
          {recipe.ingredients.map((item, idx) => (
  <li key={idx}>
    {item.quantity} {item.name} ({item.type})
  </li>
))}
          </ul>

          <h4>Steps:</h4>
          {Array.isArray(recipe.steps) ? (
            <ol>
              {recipe.steps.map((step, idx) => (
                <li key={idx}>{step}</li>
              ))}
            </ol>
          ) : (
            <p>{recipe.steps}</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default Recipes;



/*import React from "react";

export default function Recipes() {
  return (
    <div className="page-content">
      <h2>Healthy Recipes</h2>
      <p>Explore nutritious, easy-to-make meals that support your health journey.</p>

      <section className="card">
        <h3>Oatmeal Banana Pancakes</h3>
        <p>
          A fiber-rich breakfast option with natural sweetness and no added sugar.
        </p>
      </section>

      <section className="card">
        <h3>Quinoa Veggie Bowl</h3>
        <p>
          High-protein meal with fresh vegetables, olive oil, and whole grains.
        </p>
      </section>

      <section className="card">
        <h3>Grilled Chicken & Greens</h3>
        <p>
          Lean protein served with sautéed greens, garlic, and lemon. Simple and
          delicious.
        </p>
      </section>
    </div>
  );
}*/
