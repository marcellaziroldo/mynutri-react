// Import Mongoose:
const mongoose = require("mongoose");

// Import data model for recipes objects:
const Recipe = require("../models/recipeModel");

// get all recipes:
const getAllRecipes = async (req, res) => {
  // use .find() method on Recipe data schema to fetch all recipe objects:
  // leave obj in .find() blank, as all recipes are being fetched
  const allRecipes = await Recipe.find({});

  /* Set HTTP status to 200 (ok) & convert response to JSON. The result is
  an object in JSON that contains info on all recipes */
  res.status(200).json(allRecipes);
};

/* get a single recipe by their id (unique property added to each recipe object
   upon its creation in MongoDB */
const getRecipe = async (req, res) => {
  // Get id from request parameters:
  const { id } = req.params;

  /* If id is not a valid MongoDB ObjectId, set HTTP status to 400 (bad 
     request) and return error message in JSON form */
  if (!mongoose.Types.ObjectId.isValid(id)) {
     return res.status(400).json({ error: "Bad request (invalid id)" });
  }

  /* assign recipe to document in DB that has id that matches the 
     id defined in this method: */
  const recipe = await Recipe.findById(id);

  /* If no recipe id in database matches id from the request parameter,
     set HTTP status to 404 and return error message in JSON form */
  if (!recipe) {
    return res.status(404).json({ error: "Recipe doesn't exist" });
  }

  /* If a recipe object (document) has an id that matches id in the 
     request parameters, set HTTP status to 200 & return that recipe object in
     JSON format */
  res.status(200).json(recipe);
};

// create new recipe
const createNewRecipe = async (req, res) => {
  // Destructure all recipe-object properties from request body:
  const {
    name,
    ingredients,
    steps,
  } = req.body;

  // Try creating new recipe document in recipes collection in DB
  /* If successful, set HTTP status to 200 & return the newly created recipe
     document in JSON format. If it fails, set HTTP status to 400 
     (bad request) & return error message in JSON format. */
  try {
    const recipe = await Recipe.create({
        name,
        ingredients,
        steps,
    });
    res.status(200).json(recipe);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a recipe:
const deleteRecipe = async (req, res) => {
  // Get recipe document from request parameters by its id:
  const { id } = req.params;

  /* If id is not a valid MongoDB ObjectId, set HTTP status to 400 (bad 
     request) and return error message in JSON form */
  if (!mongoose.Types.ObjectId.isValid(id)) {
     return res.status(400).json({ error: "Bad request (invalid id)" });
  }

  /* Use the findOneAndDelete() method to delete recipe document with
     id that matches id in request parameters */
  const recipe = await Recipe.findOneAndDelete({ _id: id });

  /* If no recipe id in database matches id from the request parameter,
     set HTTP status to 404 and return error message in JSON form */
  if (!recipe) {
    return res.status(404).json({ error: "Recipe doesn't exist" });
  }

  /* If a recipe object (document) has an id that matches id in the 
     request parameters, set HTTP status to 200 & return that recipe object in
     JSON format. The recipe document will no longer exist in the DB. */
  res.status(200).json(recipe);
};

// Update a recipe document:
const updateRecipe = async (req, res) => {
  // Get recipe document from request parameters by its id:
  const { id } = req.params;

  /* If id is not a valid MongoDB ObjectId, set HTTP status to 400 (bad 
     request) and return error message in JSON form */
  if (!mongoose.Types.ObjectId.isValid(id)) {
     return res.status(400).json({ error: "Bad request (invalid id)" });
  }

  /* Use the .findOneAndUpdate() method to get a particular recipe document,
     then update its values. */
  /* 2nd argument in .findOneAndUpdate() is an object containing the 
     properties to be updated, along with their updated values */
  /* 3rd argument will return the updated recipe object after a 
     successful request */
  const recipe = await Recipe.findOneAndUpdate({ _id: id }, { ...req.body }, 
    { new: true });

  /* If no recipe id in database matches id from the request parameter,
     set HTTP status to 404 and return error message in JSON form */
  if (!recipe) {
    return res.status(404).json({ error: "Recipe doesn't exist" });
  }

  /* If a recipe object (document) has an id that matches id in the 
     request parameters, set HTTP status to 200 & return that recipe object in
     JSON format. The updated version of the recipe document 
     will now be in the place of the old version in the DB. */
  res.status(200).json(recipe);
};

// Export the controllers:
module.exports = {
  createNewRecipe,
  getAllRecipes,
  getRecipe,
  deleteRecipe,
  updateRecipe,
};
