import { useEffect, useState } from 'react';
import axios from 'axios';

function Recipes() {
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = async () => {
    try {
      const {data} = await axios.get('http://localhost:3001/recipe');
      setRecipes(data);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
};

  useEffect(() => {
    fetchRecipes()
  }, []);

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Recipes</h2>
      {recipes.map((recipe) => (
        <div key={recipe.id} style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem', borderRadius:'2rem' }}>
          <h3>{recipe.name}</h3>
       

          <h4>Ingredients:</h4>
          {Array.isArray(recipe.ingredients) ? (
            <ul>
              {recipe.ingredients.map((ingredient, idx) => (
                <li key={idx}>{ingredient}</li>
              ))}
            </ul>
          ) : (
            <p>{recipe.ingredients}</p>
          )}

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
