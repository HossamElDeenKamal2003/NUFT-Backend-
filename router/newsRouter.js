const express = require('express');
const router = express();
const {addNews, getNews} = require('../controller/newsController');

router.post('/addNews', addNews);
router.get('/getNews', getNews);
module.exports = router;