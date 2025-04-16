


import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userFormAxious } from "../../../server/User_Axios";
import { toast } from "react-toastify";

function Form_User() {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [addres, setAddress] = useState("");
  const navigate = useNavigate();

  const user = useSelector((state) => state.user);
  const userid = user ? user._id : "id noo";

  const handleSubmit = async (e) => {
    e.preventDefault();
    const addressDetails = { name, email,phoneNumber, addres, userid };

    try {
      const response = await userFormAxious(addressDetails);
      if (response.success) {
        toast.success("Form submitted successfully");
        navigate("/userdashbord/userprofile");
      } else {
        toast.error("Wrong details | User not found");
      }
    } catch (error) {
      console.error("Error found:", error);
      toast.error("Submission failed");
    }
  };

  return (
    <div className="bg-white border  rounded-lg shadow relative m-10 p-6">
      <div className="flex items-start justify-center pb-5 border-b rounded-t">
        <h3 className="text-xl font-semibold bg-green-500 p-3 rounded-lg ">User Form</h3>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-6 gap-6 p-5">
          <div className="col-span-6 sm:col-span-3">
            <label className="text-sm font-medium text-gray-900 block mb-2">Name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Enter your name" required />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label className="text-sm font-medium text-gray-900 block mb-2">Phone Number</label>
            <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Enter phone number" required />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label className="text-sm font-medium text-gray-900 block mb-2">Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Enter email" required />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label className="text-sm font-medium text-gray-900 block mb-2">Address</label>
            <input type="text" value={addres} onChange={(e) => setAddress(e.target.value)}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Enter address" required />
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6">
          <button type="submit" className="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-full">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form_User;