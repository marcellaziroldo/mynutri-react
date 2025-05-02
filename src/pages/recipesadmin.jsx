import { useEffect, useState } from 'react';
import axios from 'axios';

function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const [formData, setFormData] = useState({ name: '', ingredients: '', steps: '' });
  const [editingId, setEditingId] = useState(null);

  const fetchRecipes = async () => {
    try {
      const { data } = await axios.get('http://localhost:3001/recipe');
      setRecipes(data);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      name: formData.name,
      ingredients: formData.ingredients.split(',').map((i) => i.trim()),
      steps: formData.steps.split(',').map((s) => s.trim()),
    };

    try {
      if (editingId) {
        // UPDATE
        await axios.put(`http://localhost:3001/recipe/${editingId}`, payload);
        setEditingId(null);
      } else {
        // CREATE
        await axios.post('http://localhost:3001/recipe', payload);
      }
      setFormData({ name: '', ingredients: '', steps: '' });
      fetchRecipes();
    } catch (error) {
      console.error('Error submitting recipe:', error);
    }
  };

  const handleEdit = (recipe) => {
    setEditingId(recipe._id);
    setFormData({
      name: recipe.name,
      ingredients: Array.isArray(recipe.ingredients) ? recipe.ingredients.join(', ') : recipe.ingredients,
      steps: Array.isArray(recipe.steps) ? recipe.steps.join(', ') : recipe.steps,
    });
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/recipe/${id}`);
      fetchRecipes();
    } catch (error) {
      console.error('Error deleting recipe:', error);
    }
  };

  return (
    <div style={{ padding: '1rem', border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem', borderRadius:'2rem' }}>
      <h2>{editingId ? 'Edit Recipe' : 'Add a New Recipe'}</h2>
      <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
        <input
          type="text"
          name="name"
          value={formData.name}
          placeholder="Recipe name"
          onChange={handleChange}
          required
          style={{ display: 'block', marginBottom: '0.5rem' }}
        />
        <textarea
          name="ingredients"
          value={formData.ingredients}
          placeholder="Ingredients (comma-separated)"
          onChange={handleChange}
          required
          style={{ display: 'block', marginBottom: '0.5rem', width: '100%' }}
        />
        <textarea
          name="steps"
          value={formData.steps}
          placeholder="Steps (comma-separated)"
          onChange={handleChange}
          required
          style={{ display: 'block', marginBottom: '0.5rem', width: '100%' }}
        />
        <button type="submit">{editingId ? 'Update' : 'Add'} Recipe</button>
      </form>

      <h2>Recipes</h2>
      {recipes.map((recipe) => (
        <div
          key={recipe._id}
          style={{
            border: '1px solid #ccc',
            padding: '1rem',
            marginBottom: '1rem',
            borderRadius: '1rem',
          }}
        >
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

          <button onClick={() => handleEdit(recipe)} style={{ marginRight: '0.5rem' }}>Edit</button>
          <button onClick={() => handleDelete(recipe._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default Recipes;