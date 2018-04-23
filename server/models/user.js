var mongoose = require('mongoose');
// User model
var User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        trim: true
    },
    name: {
        type: String,
        requierd: true
    }
});

module.exports = {User};