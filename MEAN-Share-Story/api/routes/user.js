const express = require('express');
const router = express.Router();
const jwt = require('jwt-simple');

const userController = require('../controllers/user');

router.post('/login', userController.loginController);

router.post('/register',userController.registerController);



module.exports=router;
