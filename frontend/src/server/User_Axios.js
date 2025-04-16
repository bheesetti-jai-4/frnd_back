
import axios from "axios";

const backend_url = import.meta.env.VITE_BACKEND_URL //||  "http://localhost:4445" ;  // not working use VITE_ or REACT_APP_

// userform data  
const userFormAxious =async (formdata)=>{
    try {
     const response = await axios.post(`${backend_url}/api/v1/user/form`,formdata,{ withCredentials: true })
     console.log("form ======= ",response.data);
     
     return response.data // return the ressponse
    } catch (error) {
     console.log("server error conn problem ",error);
     throw error;  //throw the error so it can be handled by the caller
    }
 }


 
// userform data  
// const updateformdata =async (updateFormDetails,id)=>{
//    try {
//     const response = await axios.post(`${backend_url}/api/v1/user/updateform/${id}`,updateFormDetails,{ withCredentials: true })
//     return response.data // return the ressponse
//    } catch (error) {
//     console.log("server error conn problem ",error);
//     throw error;  //throw the error so it can be handled by the caller
//    }
// }
 











// // import axios from "axios";
// // const backend_url = "http://localhost:4445";

// // Fetch user data by ID

//  const getUserDataById = async (id) => {
//   try {
//     const response = await axios.get(`${backend_url}/api/v1/user/getform/${id}`, { withCredentials: true });
//    //  console.log("see raa ============= ",response.data.forms);
//    //  return response.data.user;
//    console.log("User Data: ============= ", response);
//     console.log("Forms: =========== ", response.forms);

//     return {
//       user: response.data.user,
//       // forms: response.data.forms,
//     };
    
//   } catch (error) {
//     console.error("Error fetching user data:", error);
//     return null;
//   }
// };

// // Update form data
//  const updateformdata = async (updateFormDetails, id) => {
//   try {
//     const response = await axios.post(`${backend_url}/api/v1/user/updateform/${id}`, updateFormDetails, { withCredentials: true });
//    //  return response.data;

//   } catch (error) {
//     console.error("Error updating user data:", error);
//     return { success: false };
//   }
// };









 // userform data  
 const userFormHistory =async ()=>{
    try {
     const response = await axios.get(`${backend_url}/api/v1/user/getuser`,{ withCredentials: true })
   //  console.log("user history ==== ",response.data);

     return response.data // return the ressponse
    } catch (error) {
     console.log("server error conn problem",error);
     throw error;  // throw the error so it can be handled by the caller
    }
 }

// search form 
 const searchform =async (name)=>{
    try {
     const response = await axios.get(`${backend_url}/api/v1/user/searchform?name=${name}`,{ withCredentials: true })
     return response.data // return the ressponse
    } catch (error) {
     console.log("server error conn problem ",error);
     throw error;  //throw the error so it can be handled by the caller
    }
 }




 
// userRoutes.put("/updateform/:formId", authorized, updateForm) // update form =>

   const updateformid = async (formid,updateddetails) => {
      try {
        const response = await axios.put(`${backend_url}/api/v1/user/updateform/${formid}`,updateddetails, { withCredentials: true });
        console.log("see raa ============= ",response.data);
        return response.data;
        
      } catch (error) {
        console.error("Error fetching user data:", error);
        return null;
      }
    };


  // userform data  
const updateuserdetails =async (updateuserdetails)=>{
   try {
    const response = await axios.put(`${backend_url}/api/v1/user/updateuser`,
                           updateuserdetails,
                           { withCredentials: true , headers: { "Content-Type": "application/json"}  // Ensure correct content type
           })
    return response.data // return the ressponse
   } catch (error) {
    console.log("server error conn problem ",error);
    throw error;  //throw the error so it can be handled by the caller
   }
}



 export {userFormAxious,
   // updateformdata,
   // getUserDataById,
   userFormHistory,searchform,updateuserdetails,
   updateformid
   
 }