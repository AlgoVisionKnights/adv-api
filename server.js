var express = require('express');

// Configuring dotenv to extract info from the .env file
require('dotenv').config();

var app = express();
var port = process.env.PORT || 3000;

app.listen(port);
console.log(`Listening to port: ${port}`);
