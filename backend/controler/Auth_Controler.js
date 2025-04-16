
import Users from "../models/Users.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const Register =async (req,res) =>{

    try {
        const {name,email,password,role} = req.body

        const findemail =await Users.findOne({email})
        if(findemail){
            return res.json({message:"mail already exists || just login  ",success:false})
        }
        // hashed password
        const hashpassword =await bcrypt.hash(password,12)
         const userdata =  new Users({name,email,password:hashpassword,role})
        await userdata.save();

         res.json({message:"data saved databse ",success:true,userdetails:userdata})
    
    } catch (error) {
        res.json({message:"not saved data base check it once ",success:false,error:error.message})
    }

}


// login 
const login =async (req,res)=>{
    try {
        const {email,password} = req.body

        const user = await Users.findOne({email})
        if(!user){ 
            return res.json({message:"user not found || wrong detaila",success:false})
        }

        const hashpass = await bcrypt.compare(password,user.password)
        if(!hashpass){
            return res.json({message:"wrong password check it once",success:false})
        }

        // jwt token 
        const sec_code = process.env.JWT_SECTEATE_CODE;
        const token = jwt.sign({user:user._id},sec_code,{expiresIn:"1d"})
        
        // cookies 
        res.cookie("token",token,{
            httponly:true,
            secure:false,
            maxAge:24 *60*60*1000,
        })

        res.json({message:"login successfully ",user:user,success:true,token:token})
        
    } catch (error) {
        res.json({message:"internall serveer error ",error:error.message,success:false})   
    }
}

// logout

const logout = async (req, res) => {
    try {
        res.clearCookie("token", {
            httpOnly: true,
            secure: false, // Set to true if using HTTPS
            // sameSite: "strict",
        });

        res.json({ message: "Logout successfully", success: true });
    } catch (error) {
        res.json({ message: "Internal server error", error: error.message, success: false });
    }
};

// api/hello.js
const basic =async (req, res) => {
    try {
        res.status(200).json({ message: "Hello from Vercel API!" });
    } catch (error) {
        res.json({ message: "Internal server error", error: error.message, success: false });
    }
  };
  

export {Register,login,logout,basic}