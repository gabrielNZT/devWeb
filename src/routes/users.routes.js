const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersControler');

router.get('/', usersController.renderPage);
router.get('/script', usersController.getScript);
router.get('/dark', usersController.changeDarkMode);

module.exports = router;