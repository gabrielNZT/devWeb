const express = require('express');
const router = express.Router();
const stylesController = require('../controllers/stylesControler');

router.get('/', stylesController.getStyles);

module.exports = router;