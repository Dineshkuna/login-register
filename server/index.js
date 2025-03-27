
const express = require("express");
const mongoose = require(mongoose);
const cors = require("cors");
const LoginRegisterModel = require('./models/loginregister');
const { default: mongoose } = require("mongoose");



const app = express();
app.use(express.json())
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/loginresigter")

app.post('/register',(req, res)=> {
    LoginRegisterModel.create(req.body)
    .then(employees => res.json(employees))
    .catch(err => res.json(err))
})
 

app.listen(3001, () => {
    console.log("server is running");
    
})