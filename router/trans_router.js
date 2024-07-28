const express = require('express');
const router = express.Router();
const {addInfo , getInfo } = require('../controller/transprotation');
router.post('/addtrans',addInfo);
router.get('/gettrans', getInfo);

module.exports = router;