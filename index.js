const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const usermodel= require('./models/users.js')
const app = express();
app.use(cors());
app.use(express.json());
mongoose.connect("mongodb+srv://rathoreanjali172:Cw0sPIiAMRG6Ncdb@cluster0.tonqpk5.mongodb.net/mern?retryWrites=true&w=majority&appName=Cluster0")

app.get("/getuser" , (req,res)=>{
   usermodel.find({}).then(function(users){
    res.json(users)
   }).catch(function(err){
    res.json(err)
   })
})
app.listen(5000, ()=>{
    console.log("server is running on port 5000");
    
})