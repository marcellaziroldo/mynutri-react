const { type } = require('@testing-library/user-event/dist/type');
const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    ingredients: {
        type: Array,
        required: true,
    },
    steps: {
        type: Array,
        required: true,
    }
})

module.exports = mongoose.model("Recipe", RecipeSchema);
