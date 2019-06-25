const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jwt-simple');
var JWT_SECRET='hi';

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/shafi');

const db = mongoose.connection;

db.on('error', function(err){
  console.log(err);
});
db.once('open', function(){
  console.log('connection established');
});
const userRoute = require('./api/routes/user');
const commentRoute = require('./api/routes/comment');

const app = express();
app.use(morgan('dev'));
app.use(cors());

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static(__dirname +'/public'));

const PORT = process.env.PORT || 3000;

app.use('/api/users', userRoute);
app.use('/api/comments', commentRoute);

app.listen(PORT, function(){
  console.log(`Server is running ${PORT}`);
});
