const mongoose = require('mongoose');
let Schema = mongoose.Schema;

const userSchema = Schema({
    name: String,
    lastName: String,
    login: String,
    password: String,
    email: String,
    friends: [
        {
            type: Schema.ObjectId,
            ref: 'users'
        }
    ]
});

module.exports = mongoose.model('users', userSchema);











