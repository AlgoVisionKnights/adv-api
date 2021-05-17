const express = require('express');
const router = express.Router();
const algorithmController = require('../controllers/algorithm.controller');

router.get('/getAlgorithm');

module.exports = router;
