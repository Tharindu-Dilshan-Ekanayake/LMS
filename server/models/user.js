const mongoose = require('mongoose');
const {hashPassword} = require('../helpers/auth');
const userSchema = new mongoose.Schema({

    fname:{
        type: String,
        required: true
    },
    mname:{
        type: String
        
    },
    lname:{
        type: String
    
    },
    email :{
        type: String,
        required: true,
        unique: true
        
    },
    phone_number: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    }

})

userSchema.pre('save', async function(next) {
    if (this.isModified('password')) {
        this.password = await hashPassword(this.password);
    }
    next();
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;