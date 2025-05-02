const mongoose = require('mongoose');

const LoginSchema = new mongoose.Schema({
    name : String,
    email: String,
    password: String
})

const FormLogin = mongoose.model('login_form', LoginSchema);

module.exports = FormLogin;
