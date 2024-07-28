const express = require('express');
const router = express.Router();
const {add_Links,getLinks} = require('../controller/linksController');
router.post('/add_links', add_Links);
router.get('/get_links', getLinks);
module.exports = router;