const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type:String,
        required : true
    },
    age: {
        type: Number,
        required: true
    }
})

const usermodel = mongoose.model("user" , userSchema)
module.exports = usermodel;