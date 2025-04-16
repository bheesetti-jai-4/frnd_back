

import Formmodel from "../models/FormData_onlyUsers.js";
import Users from "../models/Users.js";


// Manager updates form status
const updateFormStatus = async (req, res) => {
    try {
        const { formId, status } = req.body; // Form ID and new status ("accepted" or "rejected")

        if (!["accepted", "rejected"].includes(status)) {
            return res.json({ message: "Invalid status", success: false });
        }

        // Find the form in the database
        const form = await Formmodel.findById(formId);
        if (!form) {
            return res.json({ message: "Form not found", success: false });
        }

        // Update the user's account status in the User table
        const newStatus = status === "accepted" ? "active" : "rejected";
        await Users.findByIdAndUpdate(form.userId, { accountStatus: newStatus });
        // Mark form as seen by manager
        form.status = status;
        form.managerSeen = true; // Hide it from manager's view
        await form.save();

        res.json({ message: `Form ${status} successfully and removed from manager's view`, success: true });

    } catch (error) {
        res.json({ message: "Internal server error", success: false });
    }
};


//getPendingFormsForManager
const pendingformsformanager = async (req, res) => {
    try {
        const pendingForms = await Formmodel.find({ status: "pending", managerSeen: false });

        res.json({ message: "Pending forms fetched", success: true, forms: pendingForms });

    } catch (error) {
        res.json({ message: "Internal server error", success: false });
    }
};



const getAllForms = async (req, res) => {
    try {
        const forms = await Formmodel.find().populate("userId", "name email"); // Populating user details
        res.json({ forms, success: true });
    } catch (error) {
        res.status(500).json({ message: "Internal server error", success: false });
    }
};



// search oly for pending forms  manager forms
const searchform = async (req, res) => {
    try {
        const userId = req.user.id; // Get logged-in manager's ID

        // Check if the logged-in user is a manager
        const managerdata = await Users.findById(userId);
        if (!managerdata || managerdata.role !== "manager") {
            return res.status(403).json({ message: "Access denied. Only managers can view all forms.", success: false });
        }

        // Extract search query
        const { name } = req.query;
        
        // Build query for forms (search by form name)
        // let quary  = {}  => means all deta in databse 
        let query = {
            status: "pending" // Only pending forms
        };
        if (name) {
            query.name = { $regex: new RegExp(name, "i") }; // Case-insensitive search for form name
        }

        // Find matching forms
        const forms = await Formmodel.find(query).populate("userId", "name email");

        if (!forms.length) {
            return res.json({ message: "No matching forms found.", success: false });
        }

        res.json({ forms, success: true });

    } catch (error) {
        console.error("Error in searchform:", error);
        res.status(500).json({ message: "Internal Server Error", success: false });
    }
};

// search all manager forms
const searchallforms = async (req, res) => {
    try {
        const userId = req.user.id; // Get logged-in manager's ID

        // Check if the logged-in user is a manager
        const managerdata = await Users.findById(userId);
        if (!managerdata || managerdata.role !== "manager") {
            return res.status(403).json({ message: "Access denied. Only managers can view all forms.", success: false });
        }

        // Extract search query
        const { name } = req.query;
        
        // Build query for forms (search by form name)
        // let quary  = {}  => means all deta in databse 
        let query = {};
        if (name) {
            query.name = { $regex: new RegExp(name, "i") }; // Case-insensitive search for form name
        }

        // Find matching forms
        const forms = await Formmodel.find(query).populate("userId", "name email");

        if (!forms.length) {
            return res.json({ message: "No matching forms found.", success: false });
        }

        res.json({ forms, success: true });

    } catch (error) {
        console.error("Error in searchform:", error);
        res.status(500).json({ message: "Internal Server Error", success: false });
    }
};



// // update managerdetails
// const updatemanagerdetails = async (req, res) => {
//     try {
//         const  userId = req.user.id; // Get user ID from token
//         const { name, email } = req.body;

//         const okemail = await Users.findOne({email});
//         if(okemail){
//             res.json({message:"email already exists chose another mail ",success:false})
//         }else{
//             const updatedForm = await Users.findByIdAndUpdate(
//                 userId,
//                 { name, okemail },
//                 { new: true }
//             );
//         }
//         // Find and update form data
//         // const updatedForm = await Users.findByIdAndUpdate(
//         //     userId,
//         //     { name, email },
//         //     { new: true }
//         // );

//         // if (!updatedForm) {
//         //     return res.status(404).json({ message: "account not found", success: false });
//         // }

//         res.json({ message: "account details updated successfully", success: true,updateddata:updatedForm });
//     } catch (error) {
//         res.status(500).json({ message: "Internal server error", success: false });
//     }
// };


const updatemanagerdetails = async (req, res) => {
    try {
        const userId = req.user.id;
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

        const updatedUser = await Users.findByIdAndUpdate(
            userId,
            { name, email },
            { new: true }
        );

        if (!updatedUser) {
            return res.status(404).json({
                message: "Account not found",
                success: false
            });
        }

        res.json({
            message: "Account details updated successfully",
            success: true,
            updateddata: updatedUser
        });

    } catch (error) {
        console.error("Error updating account:", error);
        res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
};




// // update 
// const updateForm = async (req, res) => {
//     try {
//         // const formId = req.user.id;
//         const { formId } = req.params;
//         const { name, email, address } = req.body;

//         // Find and update form data
//         const updatedForm = await Formmodel.findByIdAndUpdate(
//             formId,
//             { name, email, address },
//             { new: true }
//         );

//         if (!updatedForm) {
//             return res.status(404).json({ message: "Form not found", success: false });
//         }

//         res.json({ message: "Form updated successfully", success: true, updatedForm });
//     } catch (error) {
//         res.status(500).json({ message: "Internal server error", success: false });
//     }
// };


// const deleteid = async(req,res)=>{
//     try {
//         // const formId = req.user.id;
//         const { formId } = req.params;

//         // Find and update form data
//         const updatedForm = await Formmodel.findByIdAndDelete(formId );

//         if (!updatedForm) {
//             return res.status(404).json({ message: "id  not found", success: false });
//         }

//         res.json({ message: "delete id  successfully", success: true, updatedForm });
//     } catch (error) {
//         res.status(500).json({ message: "Internal server error", success: false });
//     }
// }


const countUsers = async (req, res) => {
    try {
        const userCount = await Users.countDocuments({role:"user"}); // Count total users
      
        res.json({ message: "User count retrieved", success: true, count: userCount });
    } catch (error) {
        res.status(500).json({ message: "Internal server error", success: false });
    }
};


export {getAllForms,searchform,searchallforms,countUsers,updatemanagerdetails,updateFormStatus,pendingformsformanager};
