const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsControler');

router.get('/', productsController.renderPage);
router.get('/script', productsController.getScript);
router.get('/dark', productsController.changeDarkMode)

module.exports = router;