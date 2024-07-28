const express = require('express');
const router = express.Router();
const {addInternationalFacility,deleteFacility,getAllfacilities} = require('../controller/internationalController');
router.post('/addInternational', addInternationalFacility);
router.get('/getInternational',getAllfacilities)
router.delete('/deleteIntrnational',deleteFacility);

module.exports = router