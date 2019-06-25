const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const commentSchema = new Schema({
  text:String,
  user:String,
  username:String,
  deactivated:{type:Boolean,default:false},
  created:{
    type:Date,
    default:Date.now
  }
});

const Comment = mongoose.model('Comment', commentSchema);
module.exports=Comment;
