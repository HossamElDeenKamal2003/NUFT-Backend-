const express = require('express');
const router = express.Router();
const {addInfo , getInfo } = require('../controller/internationaldormsinfo');
router.post('/adddorms',addInfo);
router.get('/getdorms', getInfo);

module.exports = router;