const mongoose=require('mongoose');
const valid=require('validator');

const Schema=mongoose.Schema;

const userSchema = new Schema({
  username: {
    type:String,
    unique:true,
    required:true
  },
  name:{
    type:String
  },
  password:{
    type:String,
    required:true
  }
});

const User = mongoose.model('User', userSchema);
module.exports=User;
