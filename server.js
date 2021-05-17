var express = require('express');

// Configuring dotenv to extract info from the .env file
require('dotenv').config();

var app = express();

// Extracting PORT from .env
var port = process.env.PORT || 3000;

app.listen(port);
console.log(`Listening to localhost:${port}`);
