const express = require('express');
const router = express.Router();
const assetsController = require('../controllers/assetsControler');

router.get('/background.jpg', assetsController.getBackground);

module.exports = router;