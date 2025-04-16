

import React, { useState } from "react";
import { FaHome, FaUser, FaBriefcase, FaCalendar, FaChartBar, FaCog, FaSignOutAlt } from "react-icons/fa";
import { FaRegPenToSquare } from "react-icons/fa6";
import { MdOutlineContentPasteSearch } from "react-icons/md";
import { GiNotebook } from "react-icons/gi";
import { RiExchangeBoxLine } from "react-icons/ri";
import { MdPendingActions } from "react-icons/md";





{/* <FontAwesomeIcon icon="fa-regular fa-pen-to-square" /> */}
// import Dashbord from "./Dashbord";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../server/Auth_Axios";
import { clearuser } from "../../../ReduxStore/ReduxStore";
import { toast } from "react-toastify";

const Sidebar_Manager = () => {
//   const [active, setActive] = useState("Home");
  const location = useLocation(); // Get the current URL
  const navigate = useNavigate();
  // const [isUpdate,setisupdate] = useState(true);

  const menuItems = [
    { name: "user", icon: <FaUser size={24} /> , navigate: "/managerdashbord/managerprofile"  },
    // { name: "Home", icon: <FaHome size={24} />   },
    // userdashbord/updateuser       managerpendingform
    { name: "Pending Forms", icon: <MdPendingActions size={24} />  ,navigate: "/managerdashbord/managerpendingform"  },
    { name: "History", icon: <GiNotebook size={24} /> ,navigate:"/managerdashbord/allformsdeta"},
    { name: "Update ", icon: <RiExchangeBoxLine size={24} /> ,navigate:  "/managerdashbord/updatemanagerdetails"},
    { name: "status ", icon: <FaCog size={24} /> ,navigate:"/managerdashbord/status" },
  ];


//  logout button 

  // eslint-disable-next-line no-unused-vars
  const [succ,setsucc] = useState(true)
//   const navigate = useNavigate()


  // eslint-disable-next-line no-unused-vars
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
        toast.success("logout successful")
       setsucc(false)
       dispatch(clearuser()) // clear data in redux store 
       navigate("/")
     }
    } catch (error) {
      console.log("error found == ",error);
            toast.error("logout failed")
    }
  }


  return (
    <div className="w-full min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className="w-[150px] bg-white border-r border-gray-200 flex flex-col items-center py-4">
        {/* Logo */}
        {/* <div className="p-2">
          <img src="https://tailwindflex.com/images/logo.svg" alt="Logo" className="h-8 w-8" />
        </div> */}

        {/* Navigation */}
        <nav className="flex-1 w-full px-2 space-y-2 mt-6">
          {menuItems.map((item) => (
            <Link
              to={item.navigate}
              key={item.name}
              className={`w-full p-3 flex flex-col items-center rounded-lg cursor-pointer ${
                location.pathname === item.navigate  ? "bg-indigo-50 text-indigo-600" : "text-gray-500 hover:bg-blue-50"
              }`}
              
            >
              {item.icon}
              <h1>{item.name}</h1>
            </Link>
          ))}
        </nav>

        {/* logout button  */}
        <div className="mt-auto pb-4" onClick={logoutbtn} >
          <div className="text-red-500 w-full p-3 flex flex-row items-center rounded-lg text-gray-500 hover:bg-red-200  cursor-pointer">
            <FaSignOutAlt size={24}   />
            <h1 className=" text-red-500 ml-2 ">Logout</h1>
          </div>
        </div>
      </aside>

                {/* Main Content Area */}
      <main className="flex-1  bg-gray-100">
        <Outlet /> {/* This will change the content without leaving Sidebar */}
      </main>

      

    </div>
  );
};

export default Sidebar_Manager;


