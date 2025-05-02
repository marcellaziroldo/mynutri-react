// Import Express:
const express = require("express");

// Import HTTP-CRUD-request handlers:
const {
  createNewRecipe,
  getAllRecipes,
  getRecipe,
  deleteRecipe,
  updateRecipe,
} = require("../controllers/recipeController");

// Assign express.Router() to variable 'router':
const recipeRouter = express.Router();

// Assign handlers to run on certain requests to router on certain paths:

// GET all recipes
recipeRouter.get("/", getAllRecipes);

// GET single recipe:
recipeRouter.get("/:id", getRecipe);

// POST (create) a new recipe:
recipeRouter.post("/", createNewRecipe);

// DELETE a recipe:
recipeRouter.delete("/:id", deleteRecipe);

// PATCH (update) a recipe:
recipeRouter.patch("/:id", updateRecipe);

// Export router:
module.exports = recipeRouter;
