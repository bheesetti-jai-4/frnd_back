
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import {  FaUser } from "react-icons/fa";
import { logout } from "../../../server/Auth_Axios";
import { clearuser } from "../../../ReduxStore/ReduxStore";
import { toast } from "react-toastify";
import Data_All_Manager from "./Data_All_Manager";

const Manager_Profile = () => {
   
  // eslint-disable-next-line no-unused-vars
  const [succ,setsucc] = useState(true)
  const navigate = useNavigate()

  const user = useSelector((state)=>{
    // console.log("Redux State:", state); // Debug Redux state
    return state.user;
    
  }) // data retrive from redux store 
  // console.log("user data ", user);  //debug

  const dispatch = useDispatch()

  const logoutbtn = async() =>{
    try {
      const response =  await logout()
      if(response.success){
        toast.success("Logout Success")
       setsucc(false)
       navigate("/")
       dispatch(clearuser()) // clear data in redux store 
     }
    } catch (error) {
      console.log("error found == ",error);
            toast.error("logout failed")
    }
  }

  return (
    // h-full 
    <div className="w-full min-h-screen"> 
      <div className="bg-white  w-full h-full p-8 transition-all duration-300 animate-fade-in">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 text-center mb-8 md:mb-0">
            {/* <img
            //   src="/path/to/faprofile.jpg" 
            src={<FaUser />}
              alt="Profile Picture"
              className="rounded-lg w-48 h-48 mx-auto mb-4 border-4 border-indigo-800 dark:border-blue-900 transition-transform duration-300 hover:scale-105"
            /> */}

            <div className="w-48 h-48 mx-auto mb-4 flex items-center justify-center border-4 border-indigo-800 dark:border-blue-900     rounded-2xl bg-gray-200">
             <FaUser className="w-24 h-24 text-gray-600 " />
            </div>

            <h1 className="text-2xl font-bold text-red-500  mb-2">  {user ? user.role : "role"}</h1>
            {/* <p className="text-gray-600 ">  {user ? user.role : "role"}</p> */}
            {/* <button className="mt-4 bg-indigo-800 text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition-colors duration-300">
              Edit Profile
            </button> */}
          </div>
          <div className="md:w-2/3 md:pl-8">
            <h2 className="text-xl font-semibold text-indigo-800  mb-4">About Me</h2>
            <p className="text-gray-700  mb-2">Name :  {user ? user.name : "User"} </p>
            <p className="text-gray-700  mb-2">Email :  {user ? user.email : "email"} </p>
            <p className="text-gray-700  mb-2">Role :  {user ? user.role : "role"} </p>
            <p className="text-gray-700  mb-2">Id :  {user ? user._id : "id"} </p>


            

              <div className="flex flex-wrap gap-2 mt-5 mb-6">
                <Link to="/managerdashbord/updatemanagerdetails"
                 className="bg-blue-600 text-white px-5 mx-10 py-3 cursor-pointer rounded-xl text-sm hover:bg-blue-900 hover:text-white transition-colors duration-300"  >
                
                eddit Profile
                </Link>
                <div className="bg-red-500   px-5 mx-10 py-3 cursor-pointer  rounded-xl text-sm hover:bg-red-600  hover:text-white transition-colors duration-300" onClick={logoutbtn} >
                logout Profile
                </div>
              </div>


            
          </div>
        </div>
        {/* <Deta_All/> */}
        <Data_All_Manager/>
      </div>
    </div>
  );
};

export default Manager_Profile;
