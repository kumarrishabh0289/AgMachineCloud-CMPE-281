const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    email: {
        type: String,
        required : true,
        unique : true
    },
    name: String,
    password: String,
    role: String,
    edgeStationId: Number
    
   });

module.exports = mongoose.model('User', userSchema);