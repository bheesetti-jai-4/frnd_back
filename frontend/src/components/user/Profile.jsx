

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


function Profile() {
    const navigate = useNavigate()
    const user = useSelector((state)=>{
        console.log("Redux State:", state); // Debug Redux state
        return state.user;
        
      }) // data retrive from redux store 
      console.log("user data ", user);  //debug
    
  return (
    <>
        <h1>welcome  {user ? user.name : "User"} </h1>
      <h1>email is {user ? user.email : "no email"} </h1>
      <h1>balance is {user ? user.balance : "0"} </h1>

      <button onClick={()=>{navigate("/fillform")}} >fill form </button>

      {/* <button onClick={()=>{navigate("/formhistory")}} >history forms </button>

      <button onClick={()=>{navigate("/updateuser")}} >update details </button>

      <button onClick={()=>{navigate("/deleteuseraccount")}} >delete account </button> */}
      
      
    </>
  )
}

export default Profile