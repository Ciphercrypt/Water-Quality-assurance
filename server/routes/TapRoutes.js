const express = require('express');
const router = express.Router();
const {addTapDetails,getTapDetails,getAllTapDetails}=require('../controllers/tapController');



router.post('/addTapDetails', addTapDetails);
router.get('/getTapDetails', getTapDetails );
router.get('/getAllTapDetails',getAllTapDetails);

module.exports = router