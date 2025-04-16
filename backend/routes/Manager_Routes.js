




import express from "express"
import { managerAccessing_userData } from "../Middleware/auth_middleware.js"
import { countUsers, getAllForms, pendingformsformanager, searchallforms, searchform, updateFormStatus, updatemanagerdetails } from "../controler/Manager_Controler.js"


const managerRoutes = express.Router()

// details calling user 
// forms
managerRoutes.post("/updateformstatus",managerAccessing_userData,updateFormStatus) //
managerRoutes.get("/pendingformstatus", managerAccessing_userData, pendingformsformanager) //
managerRoutes.get("/searchform", managerAccessing_userData, searchform) // manager search fomr by name   //   
managerRoutes.get("/searchallforms", managerAccessing_userData, searchallforms)  //

managerRoutes.put("/updatemanagerdetails", managerAccessing_userData, updatemanagerdetails)  

managerRoutes.get("/getallforms", managerAccessing_userData, getAllForms) // edi and above one are equall 
managerRoutes.get("/countusers", managerAccessing_userData, countUsers)
// write search by names , in pending forms and get all forms 


export default managerRoutes