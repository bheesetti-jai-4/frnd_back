
import Formmodel from "../models/FormData_onlyUsers.js";
import Users from "../models/Users.js";


const userstatus = async(req,res)=>{
    try {
        const userId = req.user.id; // Get user ID from token
        // console.log(userId);

        const existinguser = await Users.findById(userId);
        if (!existinguser) {
            return res.json({ message: "User not found", success: false }); 
        }

        
        // Fetch the latest form data to sync with user status
        const latestForm = await Formmodel.findOne({ userId }).sort({ createdAt: -1 }); // Get the latest form

        if (latestForm && latestForm.status !== existinguser.accountStatus) {
            // If form status changed, update user account status
            existinguser.accountStatus = latestForm.status === "accepted" ? "active" : "rejected";
            await existinguser.save();
        }

        res.json({ message: "user founded   successfully",accountStatus: existinguser.accountStatus, success: true ,user:existinguser });
    } catch (error) {
           res.status(500).json({ message: "Internal server error  |user not found  | login details incorrect", success: false });
    }
}


// get user data and form data 
const getUserForms = async (req, res) => {
    try {
        const userId = req.user.id; // Get the logged-in user's ID
        
        const userdata = await Users.findById(userId);
        if (!userdata) {
            return res.json({ message: "No user data check it onnce", success: false });
        }

        // Find all forms submitted by this user
        const userForms = await Formmodel.find({ userId });

        if (!userForms.length) {
            return res.json({ message: "No forms found for this user", success: false });
        }

        res.json({ 
            message: "User forms fetched successfully", 
            success: true, 
            user:userdata,
            forms: userForms 
        });

    } catch (error) {
        res.status(500).json({ message: "Internal server error", success: false });
    }
};


// userRoutes.get("/searchform/?userId", authorized, searchform)
const searchform = async(req,res)=>{
   try {
     const userId = req.user.id; // Get the logged-in user's ID
 
     const userdata = await Users.findById(userId);
         if (!userdata) {
             return res.json({ message: "No user data found ,plese check it onnce ", success: false });
         }
 
         // Get query parameters
         const { name } = req.query;
         
         // Build search query (filter by userId and optionally by name)
         let query = { userId };
         if (name) {
             query.name = { $regex: new RegExp(name, "i") }; // Case-insensitive search
         }
 
         // Find all matching forms
         const userForms = await Formmodel.find(query);
         if (!userForms.length) {
             return res.json({ message: "No matching forms found", success: false });
         }
 
         res.json({ message: "Forms found", forms: userForms, success: true });
 
   } catch (error) {
    console.error("Error in searchform:", error);
        res.status(500).json({ message: "Internal Server Error", success: false });
    
   }
}

// update form by user 
const updateForm = async (req, res) => {
    try {
        // const formId = req.user.id;
        const { formId } = req.params;
        const { name, email, address ,phoneNumber} = req.body;

        // Find and update form data
        const updatedForm = await Formmodel.findByIdAndUpdate(
            formId,
            { name, email, address ,phoneNumber },
            { new: true }
        );

        if (!updatedForm) {
            return res.status(404).json({ message: "Form not found", success: false });
        }

        res.json({ message: "Form updated successfully", success: true, updatedForm });
    } catch (error) {
        res.status(500).json({ message: "Internal server error", success: false });
    }
};



// const updatemanagerdetails = async (req, res) => {
//     try {
//         const userId = req.user.id;
//         const { name, email } = req.body;

//         const existingUser = await Users.findOne({ email });
//         console.log(existingUser); // might be null if no user uses this email

//         // Only return error if the email is used by another user
//         if (existingUser && existingUser._id.toString() !== userId) {
//             return res.status(400).json({
//                 message: "Email already exists. Please choose another email.",
//                 success: false
//             });
//         }

//         const updatedUser = await Users.findByIdAndUpdate(
//             userId,
//             { name, email },
//             { new: true }
//         );

//         if (!updatedUser) {
//             return res.status(404).json({
//                 message: "Account not found",
//                 success: false
//             });
//         }

//         res.json({
//             message: "Account details updated successfully",
//             success: true,
//             updateddata: updatedUser
//         });

//     } catch (error) {
//         console.error("Error updating account:", error);
//         res.status(500).json({
//             message: "Internal server error",
//             success: false
//         });
//     }
// };



// update 
const updateuserAccount = async (req, res) => {
    try {
        const  userId = req.user.id; // Get user ID from token
        const { name, email } = req.body;

        const existingUser = await Users.findOne({ email });
        console.log(existingUser); // might be null if no user uses this email

        // Only return error if the email is used by another user
        if (existingUser && existingUser._id.toString() !== userId) {
            return res.status(400).json({
                message: "Email already exists. Please choose another email.",
                success: false
            });
        }

        // Find and update form data
        const updateuser = await Users.findByIdAndUpdate(
            userId,
            { name, email },
            { new: true }
        );

                    if (!updateuser) {
                        return res.status(404).json({
                            message: "Account not found",
                            success: false
                        });
                    }

        res.json({ message: "account details updated successfully", success: true,updateddata:updateuser });
    } catch (error) {
        res.status(500).json({ message: "Internal server error", success: false });
    }
};




// router.get("/getform/:id", 
    const getuserdatawithId = async (req, res) => {
    try {
      const user = await Users.findById(req.params.id);
      if (!user) {
        return res.status(404).json({ success: false, message: "User not found" });
      }
      res.json({ success: true, user });
    } catch (error) {
      res.status(500).json({ success: false, message: "Server error", error });
    }
  }


  // Update user form data
// router.post("/updateform/:id",
    const updateformwithid =  async (req, res) => {
    try {
      const updatedUser = await Users.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedUser) {
        return res.status(404).json({ success: false, message: "User not found" });
      }
      res.json({ success: true, message: "Form updated successfully", updatedUser });
    } catch (error) {
      res.status(500).json({ success: false, message: "Server error", error });
    }
  }








































// delete user acccoutn
const deleteaccount = async(req,res)=>{
    try {
        const userId = req.user.id; // Get user ID from token
        
        // Find the user's form (assuming a `userId` field in the Form model)
        // const existingforms = await Formmodel.find({ userId });

        // if (existingforms) {
        //     await Formmodel.findByIdAndDelete(existingforms._id); // Delete form
        // }

        
        // Delete all forms related to the user
        const deletedForms = await Formmodel.deleteMany({ userId });


        // Delete user account
        const existinguser = await Users.findByIdAndDelete(userId);
        if (!existinguser) {
            return res.status(404).json({ message: "User not found", success: false });
        }

        res.json({ message: "delete account  successfully",user:existinguser,form:deletedForms, success: true });
    } catch (error) {
           res.status(500).json({ message: "Internal server error | login details incorrect", success: false });
    }
}



export {deleteaccount,searchform,updateForm,updateuserAccount,userstatus,
    getuserdatawithId,
    updateformwithid,
    getUserForms
}