

import Formmodel from "../../models/FormData_onlyUsers.js";
import Users from "../../models/Users.js";

const userForms =async (req,res) =>{
try {
    const {name,phoneNumber,email,addres} = req.body
    const userId = req.user.id; // Assuming `req.user` is set after authentication


   const formdata =  new Formmodel({
                                name,
                                phoneNumber,
                                email,
                                addres,
                                userId  }) //Link form with user
   await formdata.save();

   
     // Update user status to "pending"
     await Users.findByIdAndUpdate(userId, { accountStatus: "pending" });


   res.json({message:"Form submitted successfully, awaiting approval",formdataanduserid:formdata,success:true})
    
} catch (error) {
    res.json({message:"internall server error ",success:false})
}
}

export {userForms}