const express = require('express');
const router = express.Router();
const editUserController = require('../controllers/editUserControler');

router.get('/', editUserController.renderPage);
router.get('/script', editUserController.getScript);
router.post('/submit', editUserController.submit);

module.exports = router;