
import { useState } from "react";
import {  updateformid, } from "../../../server/User_Axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Form_Update_data() {
  const [searchId, setSearchId] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [addres, setAddress] = useState("");
  const navigate = useNavigate()
    
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const addressDetails = { name, email, phoneNumber, addres };

    try {
      const response = await updateformid( searchId,addressDetails);
      if (response.success) {
        toast.success("Form updated successfully");
        navigate("/userdashbord/userhistory")
      } else {
        toast.error("Update failed");
      }
    } catch (error) {
      console.error("Update error:", error);
      toast.error("Submission failed");
    }
  };

  return (
    <div className="bg-white border rounded-lg shadow relative m-10 p-6">
      {/* Search Box */}
      <div className="flex space-x-4 mb-6">
      <button
          // onClick={handleSearch}
          className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg"
        >
          formId
        </button>
        <input
          type="text"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
          className="border border-gray-300 p-2 rounded-lg w-full"
          placeholder="Enter Form ID"
        />
        
      </div>

      {/* Show form only after searching */}
      {/* {showForm && ( */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
              <label className="text-sm font-medium text-gray-900 block mb-2">Name</label>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)}
                className="border border-gray-300 p-2 rounded-lg w-full"
                placeholder="Enter name" required />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label className="text-sm font-medium text-gray-900 block mb-2">Phone Number</label>
              <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}
                className="border border-gray-300 p-2 rounded-lg w-full"
                placeholder="Enter phone number" required />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label className="text-sm font-medium text-gray-900 block mb-2">Email</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                className="border border-gray-300 p-2 rounded-lg w-full"
                placeholder="Enter email" required />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label className="text-sm font-medium text-gray-900 block mb-2">Address</label>
              <input type="text" value={addres} onChange={(e) => setAddress(e.target.value)}
                className="border border-gray-300 p-2 rounded-lg w-full"
                placeholder="Enter address" required />
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <button type="submit" className="text-white bg-green-600 hover:bg-green-700 px-5 py-2.5 rounded-lg w-full">
              Submit
            </button>
          </div>
        </form>
      {/* )} */}
    </div>
  );
}

export default Form_Update_data;



