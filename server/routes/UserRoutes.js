const express = require('express');
const router = express.Router();
const {addUser,userLogin,getUser}=require('../controllers/userController');

router.post('/login', userLogin);
router.post('/addUser', addUser );
router.get('/getUser',getUser);

module.exports = router