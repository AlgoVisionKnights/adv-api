const express = require('express');
const router = express.Router();
const algorithmController = require('../controllers/algorithms.controller');

router.post('/getAlgorithm', algorithmController.getAlgorithm);

module.exports = router;
