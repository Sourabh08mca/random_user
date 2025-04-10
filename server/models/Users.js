const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    phon : String,
    Location: String
})

const UserModel = mongoose.model("users", UserSchema)
module.exports = UserModel