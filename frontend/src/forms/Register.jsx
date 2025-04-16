import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { registerform } from "../server/Auth_Axios"
import { toast } from "react-toastify"



function Register() {
    const [name,setname] = useState("")
    const [email,setemail] = useState("")
    const [password,setpassword] = useState("")
    const [role,setrole] = useState("")
    const navagate = useNavigate()

    const submithandler = async(e) =>{
        e.preventDefault()

        const userobject = {name,email,password,role};

       try {
        // const response = 
        await registerform(userobject)
        // console.log("server data == ",response);
        
       alert("data saved sucessfully to db")
       setname(""),
       setemail(""),
       setpassword("")
       setrole("")
       navagate("/login")

       } catch (error) {
        console.log("data sending error ",error);
        toast.error("Registration failed")
       }
    }

  return (
    <>


          <div className="min-h-100 bg-white flex flex-col justify-center py-12 sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                  <div className="bg-white py-8 px-4 shadow-lg sm:rounded-lg sm:px-10">
                    {/* Header */}
                    <div className="text-center mb-8">
                      <h2 className="text-2xl sm:text-3xl font-bold text-red-600">Create an Account</h2>
                      {/* <p className="mt-2 text-sm sm:text-base text-gray-600">Please log in to your account</p> */}
                    </div>

                    {/* Form */}
                    <form  onSubmit={submithandler} className="space-y-6" >

                    {/* <label >Name:-</label>
            <input type="text" placeholder='enter name ' value={name} onChange={(e)=>setname(e.target.value)} />  <br /><br /> */}

                     {/* name */}
                     <div>
                        <label className="block text-sm font-medium text-gray-700" >Name </label>
                        <input
                          type="name"
                          id="name"
                          className="mt-1 block w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 focus:outline-red-500"  placeholder='enter name ' value={name} onChange={(e)=>setname(e.target.value)}
                          required
                        />
                      </div>
    


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

                  
                      {/* Role Selection */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Select Role</label>
                        <select
                          value={role}
                          onChange={(e) => setrole(e.target.value)}
                          className="mt-1 block w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 focus:outline-red-500"
                          required
                        >
                          <option value="">--Select One--</option>
                          <option value="user">User</option>
                          <option value="manager">Manager</option>
                          <option value="admin">Admin</option>
                        </select>
                      </div>

                      
                      <button
                      type="submit"
                      className="w-full flex justify-center py-2 px-4 sm:py-3 border border-transparent rounded-lg shadow-sm text-sm sm:text-base font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                    >
                      Register Account
                    </button>

                          {/* Login Link */}
                    <p className="mt-6 text-center text-sm">
                      Already have an account?
                      <Link to="/login" className="font-medium text-red-600 hover:text-red-700"> Login</Link>
                    </p>

           
              </form>
            
              </div>
          </div>
        </div>
    




{/* 
        <h1>register Form </h1> <br />
        <form onSubmit={submithandler} >
            <label >Name:-</label>
            <input type="text" placeholder='enter name ' value={name} onChange={(e)=>setname(e.target.value)} />  <br /><br />

            <label >E-Mail:-</label>
            <input type="email" placeholder='enter name ' value={email} onChange={(e)=>setemail(e.target.value)}  />  <br /><br />


            <label >Password:-</label>
            <input type="password" placeholder='enter name ' value={password} onChange={(e)=>setpassword(e.target.value)} />  <br /><br />

            <label >select :-</label>
            <select value={role} onChange={(e)=>setrole(e.target.value)} >
              <option value="">--select one--</option>
              <option value="user">user</option>
              <option value="manager">manager</option>
              <option value="admin">admin</option>
            </select>   <br /><br />

            <button type="submit" >submit</button>    <br /><br />
            
            <h2>you have any account ? 
            <Link to="/login" >login </Link>
              </h2>
           
        </form>

 */}

    </>
  )
}

export default Register