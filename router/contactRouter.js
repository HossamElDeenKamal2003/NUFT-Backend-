const express = require('express');
const contactController = require('../controller/contactController');

const router = express.Router();

router.post('/add', contactController.addContact);
router.get('/get', contactController.getContact);

module.exports = router;
