

import {  BrowserRouter, Route,   Routes } from "react-router-dom"
import Navbar from "./navbar/Navbar"
import Login from "./forms/Login"
import Register from "./forms/Register"
import Home from "./components/Home"
import Profile from "./components/user/Profile"
import Sidebar from "./components/user/pages/Sidebar"
import Form_User from "./components/user/pages/Form_User"
import User_History from "./components/user/pages/User_History"
import User_profile from "./components/user/pages/User_profile"
import Update_user from "./components/user/pages/Update_user"
import Form_Update_data from "./components/user/pages/Form_Update_data"
import { ToastContainer } from 'react-toastify';
import Sidebar_Manager from "./components/manager/pages/Sidebar_Manager"
import Manager_Profile from "./components/manager/pages/Manager_Profile"
import Pending_fomrs_All from "./components/manager/pages/Pending_fomrs_All"
import All_fomrs_data from "./components/manager/pages/All_fomrs_data"
import Status_checking from "./components/manager/pages/Status_checking"
import Update_manager_details from "./components/manager/pages/Update_manager_details"
import Why_side from "./components/home/Why_side"
import Home_main from "./components/home/Home_main"


function App() {
  return (
    <>

    <ToastContainer 
position="top-center"
autoClose={1000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
// transition={Bounce}

       
       
       />
    <BrowserRouter>
      <Navbar/>
      {/* <Link to={"/first"} className="text-red-600" >firstlink</Link> */}
      <Routes>



        {/* home  page */}
      <Route path="/" element={<Home_main />} />
      <Route path="/side" element={<Why_side />} />   {/* chudu denni oka sarii */}

      {/* Profile Route */}
      {/* <Route path="/profile" element={<Profile />}/>     use ledu so anudukay tesaaaa  */}
        
      {/* auth routes */}
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />}/>

        {/* users  */}
        <Route path="/userdashbord" element={<Sidebar />}>
          {/* <Route index element={<Dashbord />} />  Default inside Sidebar */}
          <Route path="userprofile" element={<User_profile />} />
          <Route path="userform" element={<Form_User />} />
          <Route path="updateform" element={<Form_Update_data />} />
          <Route path="userhistory" element={<User_History />} />
          <Route path="updateuser" element={<Update_user />} />
        </Route>

        {/* manager */}
        <Route path="/managerdashbord" element={<Sidebar_Manager />}>
          <Route path="managerprofile" element={<Manager_Profile />} />
          <Route path="managerpendingform" element={<Pending_fomrs_All />} />   
          <Route path="allformsdeta" element={<All_fomrs_data />} />   
          <Route path="status" element={<Status_checking />} />   
          <Route path="updatemanagerdetails" element={<Update_manager_details />} />   
        </Route>


      </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App