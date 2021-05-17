const express = require('express');
const algorithmRoute = require('./routes/algorithm.route');
const app = express();

// Configuring dotenv to extract info from the .env file
require('dotenv').config();

// Extracting PORT from .env
const port = process.env.PORT || 3000;

app.use('/algorithms', algorithmRoute);

app.listen(port);
console.log(`Listening to http://localhost:${port}`);
