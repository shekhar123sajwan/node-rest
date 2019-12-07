const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const user = new Schema({
    __id: Schema.Types.ObjectId,
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    country: { type: String, required: true }
}, {
    timestamps: true
});

const User = mongoose.model('User', user);
module.exports = User;