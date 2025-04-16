




import axios from "axios";

const backend_url = import.meta.env.VITE_BACKEND_URL //||  "http://localhost:4445" ;  // not working use VITE_ or REACT_APP_

// register form data 
const registerform =async (details)=>{
   try {
    const response = await axios.post(`${backend_url}/api/v1/register`,details)
    return response.data // return the ressponse
   } catch (error) {
    console.log("server error conn problem ",error);
    throw error;  //throw the error so it can be handled by the caller
   }
}

const login = async(logindetails)=>{
   try {
      const response = await axios.post(`${backend_url}/api/v1/login`,logindetails,{ withCredentials: true })
      return response.data;
   } catch (error) {
      console.log("server error conn problem ",error);
    throw error; 
   }
}

const logout =async ()=>{
   try {
      const response = await axios.post(`${backend_url}/api/v1/logout`,{},{withCredentials:true})
      return response.data;
      
   } catch (error) {
      console.log("server error conn problem ",error);
    throw error; 
   }
}

export {registerform,login,logout}