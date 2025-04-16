
import express from "express"
import dotenv from "dotenv"
import dbconnect from "./Database/Conn_Db.js";
import cookieParser from "cookie-parser"
import cors from "cors"
import authRoutes from "./routes/Auth_Routes.js";
import userRoutes from "./routes/Users_routes.js";
import managerRoutes from "./routes/Manager_Routes.js";

dotenv.config()
const app = express();
app.use(express.json()) // parser json data to db 
app.use(cookieParser())

// cors 
app.use(cors({  // frontend connect
    origin: process.env.FORONTEND_URL, // Change to frontend URL
    credentials: true, // Allow cookies

})) 


// database connect 
dbconnect();



// auth routes 
app.use("/api/v1",authRoutes)
// user routes 
app.use("/api/v1/user",userRoutes)
// manager routes 
app.use("/api/v1/manager",managerRoutes)





const port = process.env.PORT || 5555
app.listen(port,()=>{
    console.log("server listening on port  = ",port);
})