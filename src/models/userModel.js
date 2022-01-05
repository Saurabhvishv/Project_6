const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

    fname: {
        type: String,
        required: true
        
    },
    lname: {
        type: String,
        required: true,
        trim: true
    },
    

    email: {
        type: String,
        trim: true,
        required : true,
        lowercase: true,
        unique: true
        
    },
    phone: {
        type: String,
        unique: true,
        required: false
        
    },
    password: {
        type: String,
        trim: true,
        required: true// encrypted password
    }
    
}, { timestamps: true })

module.exports = mongoose.model('User', userSchema, 'users')