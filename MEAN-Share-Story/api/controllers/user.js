const bcrypt = require('bcrypt-nodejs');
const User = require('../models/User');
const jwt = require('jwt-simple');
var JWT_SECRET='hi';

const registerController = function(req,res){
  console.log('register user');
  var username=req.body.username;
  var name=req.body.name || null;
  var password=req.body.password;
  User.create({
    username:username,
    name:name,
    password:bcrypt.hashSync(password,bcrypt.genSaltSync(10))
  },function(err,user){
    if(err){
      console.log('err');
      res.status(400).json(err);

    }else{
      res.status(201).json(user);
    }
  })
};

const loginController = function(req,res){

  User.findOne({username:req.body.username}, function(err,user){
      bcrypt.compare(req.body.password, user.password, function(err,result){
        if(result){
          var token=jwt.encode(user,JWT_SECRET);
          res.json({token:token});
        }else{
          res.status(400).send()
        }
      })
    })
};

module.exports ={
  registerController,
  loginController
};
