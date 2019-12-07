const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const user = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    c_password: { type: String, required: true },
    country: { type: String, required: true },
    image: { type: String }
}, {
    timestamps: true
});

const User = mongoose.model('User', user);
module.exports = User;