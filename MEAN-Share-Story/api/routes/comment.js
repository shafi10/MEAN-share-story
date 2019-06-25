const express = require('express');
const router = express.Router();
const jwt = require('jwt-simple');

const commentController = require('../controllers/comment');

router.post('/comment', commentController.postcomment);
router.get('/', commentController.getcomment);
router.put('/remove', commentController.deleteComment);



module.exports=router;
