const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginControler');

router.get('/', loginController.renderPage);
router.post('/submit', loginController.submit);

module.exports = router;