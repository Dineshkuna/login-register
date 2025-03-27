

const mongoose = require(mongoose);

const LoginRegister = new mongoose.Schema({
    name : String,
    email : String,
    password : String
})

const  LoginRegisterModel = mongoose.model("employees",LoginRegister )

module.export = LoginRegisterModel