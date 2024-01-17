const mongoose = require('mongoose');

const userauth = mongoose.Schema({

    name:{
        type:String,
        require:true,
        trim:true,
    },

    email:{
        type:String,
        require:true,
        trim:true,
    },

    password:{
        type:String,
        require:true,
        trim:true,
    },

    phone:{
        type:String,
        require:true,
        trim:true,
    },

},

{
    timestamps:true,
}



);

const User = mongoose.model('User',userauth);
 module.exports = User;