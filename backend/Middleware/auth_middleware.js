


import jwt from "jsonwebtoken"
import Users from "../models/Users.js"

const authorized =async (req,res,next) =>{
    try {
        const token = req.cookies.token 
        // console.log(token);
        if(!token){
            return res.json({message:"no token available to check connection",success:false})
        }
        const decode = jwt.verify(token,process.env.JWT_SECTEATE_CODE)
        // console.log(decode);
        const newuser = await Users.findById(decode.user)
       
        // console.log(newuser);
        if(!newuser){
            return res.json({message:"uset not foun in database | not login ",success:false})
        }

        req.user = newuser
        next()
         
    } catch (error) {
        res.json({message:"internall serveer error ",error:error.message,success:false})   
    }
}



const managerAccessing_userData = async (req,res,next) =>{
    try {
        const token = req.cookies.token 
        // console.log(token);
        if(!token){
            return res.json({message:"no token available to check connection",success:false})
        }
        const decode = jwt.verify(token,process.env.JWT_SECTEATE_CODE)
        // console.log(decode);
        const newuser = await Users.findById(decode.user)
        // checking role 
        if(newuser.role === "user"){
            return res.json({message:"user not Accessing this role || login manager accoutn ",success:false})
        }
        // console.log(newuser);
        if(!newuser){
            return res.json({message:"uset not foun in database ",success:false})
        }

        req.user = newuser
        next()
         
    } catch (error) {
        res.json({message:"internall serveer error ",error:error.message,success:false})   
    }
}


export {authorized,managerAccessing_userData}