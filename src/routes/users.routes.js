const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersControler');

router.get('/', usersController.renderPage);
router.get('/script', usersController.getScript)

module.exports = router;