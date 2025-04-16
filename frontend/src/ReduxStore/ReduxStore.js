
import {  configureStore, createSlice } from "@reduxjs/toolkit";


// // Load user data from localStorage on page load
// const storedUser = localStorage.getItem("user") 
//   ? JSON.parse(localStorage.getItem("user"))
//   : null;

// Load user data from localStorage safely


let storedUser = null;
try {
  const userData = localStorage.getItem("user");
    // Ensure `userData` is valid JSON and not "undefined" or empty
    storedUser = userData && userData !== "undefined" && userData !== "null" ? JSON.parse(userData) : null;

  storedUser = userData ? JSON.parse(userData) : null;
} catch (error) {
  console.error("Error parsing user data from localStorage:", error);
  storedUser = null; // Fallback to null if parsing fails
}



const userslice = createSlice({
    name:"user",
    initialState:storedUser, //{user:storedUser},  // beter structurer {object formate}
    reducers:{
        userdata:(state,action)=>{
            // localStorage.setItem("user", JSON.stringify(action.payload));
            // return action.payload;
            if (action.payload) {
                localStorage.setItem("user", JSON.stringify(action.payload));
                return action.payload;
              }
              return state;
        
        } , // store data after login 

        clearuser:()=>{ 
            localStorage.removeItem("user");
            return null;
        } // clear user data logout
    }
})

export const { userdata, clearuser } = userslice.actions; // Export actions

// separe create store but i created here 
const store = configureStore({
    reducer:{user:userslice.reducer}
})

export default store ;