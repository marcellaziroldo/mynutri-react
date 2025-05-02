const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());
app.use(cors());

// MIDDLEWARE
app.use(express.json()); // if any request has data that it sends to the server, this attaches it to request object, so we can access it in request handler

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// ROUTES

const loginRouter = require('./routes/login');
const recipeRouter = require('./routes/recipe');

app.use("/login", loginRouter);
app.use("/recipe", recipeRouter);



// Connect to Mongoose:
mongoose
  .connect('mongodb://127.0.0.1:27017/mynutri')
  .then(() => {
    // Listen for requests only after connecting to DB
    app.listen('3001', () => {
      console.log(`Connected to DB & listening on port 3001!`);
    });
  })
  .catch((error) => console.log(error));
