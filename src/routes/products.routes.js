const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsControler');

router.get('/', productsController.renderPage);

module.exports = router;