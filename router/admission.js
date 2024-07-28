const express = require('express');
const router = express.Router();
const { postAdmission, getAdmission  } = require('../controller/admissionStatus');
router.post('/add', postAdmission);
router.get('/get', getAdmission);

module.exports = router;