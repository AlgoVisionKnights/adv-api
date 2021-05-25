const express = require('express');
const algorithmRoute = require('./routes/algorithms.routes');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
// const admin = require('firebase-admin');
// const serviceAccount = require('./ServiceAccount.json');

// admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });

// const db = admin.firestore();

// db.collection('algorithms')
// 	.get()
// 	.then((querySnapshot) => {
// 		querySnapshot.forEach((doc) => {
// 			console.log(`${doc.id} => ${doc.data().AlgorithmName}`);
// 		});
// 	});

// Configuring dotenv to extract info from the .env file
require('dotenv').config();

// Extracting PORT from .env
const port = process.env.PORT || 5000;
app.use(cors());

// This allows to parse the body passed in the req.body object.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Route to manage algorithms
app.use('/algorithms', algorithmRoute);

app.listen(port);
console.log(`Listening to http://localhost:${port}`);
