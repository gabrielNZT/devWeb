const express = require('express');
const router = express.Router();
const registerController = require('../controllers/registerControler');

router.get('/', registerController.renderPage);
router.post('/submit', registerController.submit);

module.exports = router;