const mongoose = require('mongoose');
 let userSchema = mongoose.Schema({
    name:{
         type:String,
         required:true
    },
    
    email:{
        type:String,
        required:true
   },
   
   class:{
    type:String,
    required:true
}

})

const model = mongoose.model('model',userSchema);

module.exports = model;