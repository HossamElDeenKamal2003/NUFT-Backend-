const express = require('express');
const router = express.Router();
const { signUp, signIn, getAllUsers } = require('../controller/users'); // Adjust the path as needed

router.post('/signup', signUp);
router.post('/signin', signIn);
router.get('/getallusers', getAllUsers)
module.exports = router;
