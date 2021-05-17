const express = require('express');

// Configuring dotenv to extract info from the .env file
require('dotenv').config();

const app = express();

// Extracting PORT from .env
const port = process.env.PORT || 3000;

app.listen(port);
console.log(`Listening to http://localhost:${port}`);
