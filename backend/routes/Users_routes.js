



import express from "express"
import { authorized } from "../Middleware/auth_middleware.js"
import { userForms } from "../controler/forms/UserForms_only.js"
import { deleteaccount, getuserdatawithId, getUserForms, searchform, updateForm, updateformwithid, updateuserAccount, userstatus } from "../controler/Users_Controler.js"


const userRoutes = express.Router()

// details calling user 
// forms
userRoutes.post("/form",authorized,userForms) //
userRoutes.get("/getuser", authorized, getUserForms)   //
userRoutes.get("/userstatus", authorized, userstatus)  //
userRoutes.get("/searchform", authorized, searchform)  // search form like   =>  "searchform?name=jai"


// router.post("/updateform/:id",
userRoutes.post("/updateform/:id", authorized,updateformwithid )  
// router.get("/getform/:id", 
userRoutes.get("/getform/:id", authorized, getuserdatawithId)  



userRoutes.put("/updateform/:formId", authorized, updateForm) // update form =>
userRoutes.put("/updateuser", authorized, updateuserAccount)  //
userRoutes.delete("/deleteaccount", authorized, deleteaccount)


export default userRoutes