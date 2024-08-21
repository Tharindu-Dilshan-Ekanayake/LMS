require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

const app = express();

console.log("MongoDB URL:", process.env.REACT_APP_MONGO_URL); // Debug line to check if the URL is correctly loaded

mongoose
  .connect(process.env.REACT_APP_MONGO_URL)
  .then(() => console.log('Database connected'))
  .catch((err) => console.log('Database not connected', err));

// Middleware
app.use(express.json()); // For parsing application/json
app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded
app.use(cookieParser());

// Router setup
app.use('/user', require('./routes/userRoutes'))
app.use('/', require('./routes/authRoutes'))

const port = 8000;

// Starting the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
