const mongoose = require('mongoose');
const model = require('./userSchema');


mongoose.connect('mongodb://localhost:27017/myUserMongo')
.then(()=>{console.log('mongoose connection successfull')})
.catch((err)=>{console.log(err)}); 













// mongoose.connect('mongodb://localhost:27017/myUserdata')
// .then(()=>{console.log('mongoose connection successfull')})
// .catch((err)=>{console.log(err)})