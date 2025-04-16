


import mongoose from "mongoose";


const userschema = new mongoose.Schema({
    name:{type:String},
    email:{
        type:String,
        unique: true,  // 🚨 Enforces uniqueness at DB level
    },
    password:{type:String},
    role:{
        type:String,
        enum:["user","manager","admin"],
        default:"user"
    },
    accountStatus: {
        type: String,
        enum: ["pending", "active", "rejected"],
        default: "pending"
    }

})

const Users = mongoose.model("user",userschema)
export default Users