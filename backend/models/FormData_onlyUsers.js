




import mongoose from "mongoose";


const formschema = new mongoose.Schema({
    name:{type:String},
    phoneNumber:{type:Number},
    email:{type:String},
    addres:{type:String},
    status: {
        type: String,
        enum: ["pending", "accepted", "rejected"],
        default: "pending" // Default status
    },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "user" }, // Reference to User
    managerSeen: { type: Boolean, default: false } // New field to track manager's view

})

const Formmodel = mongoose.model("UserForms",formschema)
export default Formmodel