

import axios from "axios";

const backend_url = import.meta.env.VITE_BACKEND_URL //||  "http://localhost:4445" ;  // not working use VITE_ or REACT_APP_

// userform data  
 export const pending_Forms_manager =async ()=>{
    try {
     const response = await axios.get(`${backend_url}/api/v1/manager/pendingformstatus`,{ withCredentials: true })
     return response.data // return the ressponse
    } catch (error) {
     console.log("server error conn problem ",error);
     throw error;  //throw the error so it can be handled by the caller
    }
 }


//  localhost:4445/api/v1/manager/searchform?name=one
// search form 
 export const searchformsbymanager =async (name)=>{
   try {
    const response = await axios.get(`${backend_url}/api/v1/manager/searchform?name=${name}`,{ withCredentials: true })
    return response.data // return the ressponse
   } catch (error) {
    console.log("server error conn problem ",error);
    throw error;  //throw the error so it can be handled by the caller
   }
}

// localhost:4445/api/v1/manager/searchallforms?name=one
// search form 
export const searchallformsbymanager =async (name)=>{
   try {
    const response = await axios.get(`${backend_url}/api/v1/manager/searchallforms?name=${name}`,{ withCredentials: true })
    return response.data // return the ressponse
   } catch (error) {
    console.log("server error conn problem ",error);
    throw error;  //throw the error so it can be handled by the caller
   }
}


// getallforms
// localhost:4445/api/v1/manager/getallforms
export const managerAllforms =async ()=>{
   try {
    const response = await axios.get(`${backend_url}/api/v1/manager/getallforms`,{ withCredentials: true })
  //  console.log("user history ==== ",response.data);
   
    return response.data // return the ressponse
   } catch (error) {
    console.log("server error conn problem ",error);
    throw error;  //throw the error so it can be handled by the caller
   }
}


// localhost:4445/api/v1/manager/updateformstatus
// userform data  
export const managerStatusUpdate =async (managerdetails)=>{
   try {
    const response = await axios.post(`${backend_url}/api/v1/manager/updateformstatus`,managerdetails,{ withCredentials: true })
    return response.data // return the ressponse
   } catch (error) {
    console.log("server error conn problem ",error);
    throw error;  //throw the error so it can be handled by the caller
   }
}


// update manger details
//  localhost:4445/api/v1/manager/updatemanagerdetails
  export const managerUpdateDetails =async (updatedetails)=>{
   try {
    const response = await axios.put(`${backend_url}/api/v1/manager/updatemanagerdetails`,
                           updatedetails,
                           { withCredentials: true , headers: { "Content-Type": "application/json"}  // Ensure correct content type
           })
    return response.data // return the ressponse
   } catch (error) {
    console.log("server error conn problem ",error);
    throw error;  //throw the error so it can be handled by the caller
   }
}




