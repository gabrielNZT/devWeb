const express = require('express');
const router = express.Router();
const registerUserController = require('../controllers/registerUserControler');

router.get('/', registerUserController.renderPage);
router.get('/script', registerUserController.getScript);
router.post('/submit', registerUserController.submit);

module.exports = router;