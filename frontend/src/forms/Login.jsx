
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login } from '../server/Auth_Axios'
import { userdata } from '../ReduxStore/ReduxStore'
import { toast } from 'react-toastify'

import "react-toastify/dist/ReactToastify.css"; // Import toastify styles


function Login() {
    const [email,setemail] = useState("")
    const [password,setpassword] = useState("")
    const navagate = useNavigate()
    const dispatch = useDispatch() // get user dispatch function means sending to data in redux store 

    const handlesubmit =async (e) =>{
        e.preventDefault()

        const logindetails = {email,password};
         
        try {
           const response =  await login(logindetails)
          //  console.log("response  details db side ===  ", response);

           if(response.success){ // backend response this means success = true 
              // console.log("User data received from backend:", response.user);
              if(response.user.role === "user"){
                  // alert("user  login sucessfully")
                  toast.success("Successfully logged in!", {
                    // className: "toast-success"
                  });
                  
                  
                dispatch(userdata(response.user))
                navagate("/userdashbord/userprofile")  // you want use "/dashbord" 
                }else {
                  toast.success("login successful")
                  dispatch(userdata(response.user))
                  navagate("/managerdashbord/managerprofile")  // you want use "/dashbord" 
              }
           }else{
            // alert ("wrong details | user not found")
            toast.error("wrong details !", {
              // className: "toast-error"
            });
            
           } 
            
        } catch (error) {
            console.log("error found == ",error);
            // alert("login failed")
            toast.error("Login failed!", {
              // className: "toast-error"
            });
        }
    }
  return (
    <>

      <div className="min-h-100 bg-white flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
              <div className="bg-white py-8 px-4 shadow-lg sm:rounded-lg sm:px-10">
                {/* Header */}
                <div className="text-center mb-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-red-600">Welcome Back</h2>
                  <p className="mt-2 text-sm sm:text-base text-gray-600">Please log in to your account</p>
                </div>
                {/* Form */}
                <form  onSubmit={handlesubmit} className="space-y-6" >
                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700" >Email </label>
                    <input
                      type="email"
                      id="email"
                      className="mt-1 block w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 focus:outline-red-500" placeholder="enter email" value={email} onChange={(e)=>{setemail(e.target.value)}}
                      required
                    />
                  </div>

                {/* Password */}
                <div>
                  <label className="block text-sm font-medium text-gray-700" >Password</label>
                  <div className="mt-1 relative">
                    <input
                      type="password"
                      id="password"
                      className="block w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 focus:outline-red-500"
                      placeholder='enter password ' value={password} onChange={(e)=>{setpassword(e.target.value)}}
                      required
                    />

                  </div>
                </div>

                <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 sm:py-3 border border-transparent rounded-lg shadow-sm text-sm sm:text-base font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              log In
            </button>
                {/* Login Link */}
                <p className="mt-6 text-center text-sm">
                      Already have an account?
                      <Link to="/register" className="font-medium text-red-600 hover:text-red-700"> Register Account</Link>
                    </p>
          </form>
        
          </div>
      </div>
    </div>
    </>
  )
}

export default Login



