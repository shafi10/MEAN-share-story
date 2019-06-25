const Comment = require('../models/Comment');
const jwt = require('jwt-simple');

var JWT_SECRET='hi';

const postcomment = function(req,res){

  var token=req.headers.authorization;
  var user=jwt.decode(token,JWT_SECRET);
  const comment = new Comment({
    text:req.body.text,
    user:user._id,
    username:user.username
  });

  comment.save()
        .then(function(data){
          res.status(201).json({
            message:'contact added',
            comment:data
          })
        })
        .catch(function(error){
          res.json({
            error
          })
        })
};


const getcomment = function(req,res){
  Comment.find({$or:[{deactivated:null},{deactivated:false}]}).sort('-created').exec(function(err, comments){
		if(err)
			res.send(err);
		res.json(comments);
	});
};

const deleteComment =function(req,res){

  var token=req.headers.authorization;
  var user=jwt.decode(token,JWT_SECRET);

  var commentId=req.body.x._id;

  Comment.update({_id:commentId, user:user._id},{$set:{deactivated:true}},function(err){
    return res.send();
  })
};


module.exports={
  getcomment,
  postcomment,
  deleteComment
}
