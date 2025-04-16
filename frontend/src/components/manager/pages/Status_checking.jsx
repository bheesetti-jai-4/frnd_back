


import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { managerStatusUpdate } from "../../../server/Manager_Axios";
import { toast } from "react-toastify";

function Status_checking() {
  const [formId, setFormId] = useState("");
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  const submithandler = async (e) => {
    e.preventDefault();

    if (!formId.trim() || !status) {
      toast.warning("Please enter a valid Form ID and select a status.");
      return;
    }

    const updateformdetails = {
      formId: formId.trim(),
      status
    };

    try {
      const isConfirmed = window.confirm("Are you sure you want to update the form status?");
      if (!isConfirmed) {
        navigate("/managerdashbord/managerpendingform");
        return;
      }

      const response = await managerStatusUpdate(updateformdetails);
      // console.log("manager Update response:", response);

      if (response.success) {
        localStorage.setItem("user", JSON.stringify(response.updateddata));
        toast.success("update successful")
        navigate("/managerdashbord/managerprofile");
      } else {
        toast.error("Update failed. Please try again.");
      }
    } catch (error) {
      console.error("Error updating form status:", error);
      toast.error("Update failed!");
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-lg sm:rounded-lg sm:px-10">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-red-600">Update Form Status</h2>
          </div>

          <form onSubmit={submithandler} className="space-y-6">
            {/* Form ID */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Form ID</label>
              <input
                type="text"
                placeholder="Enter Form ID"
                value={formId}
                onChange={(e) => setFormId(e.target.value)}
                className="mt-1 block w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                required
              />
            </div>

            {/* Status */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Select Status</label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="mt-1 block w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                required
              >
                <option value="">-- Select Status --</option>
                <option value="accepted">Accepted</option>
                <option value="rejected">Rejected</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 sm:py-3 border border-transparent rounded-lg shadow-sm text-sm sm:text-base font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Submit Status
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Status_checking;



// import { useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import { updateManagerformstatus } from "../../../server/ManagerDetailsAll";

// function Status_checking() {

//     const formId = useRef(null);
//     const status = useRef(null);
//     const navigate = useNavigate();

//     const submithandler = async (e) => {
//         e.preventDefault();

//         // Get values from input fields
//         const updateformdetails = {
//             formId: formId.current.value.trim(),
//             status: status.current.value // No need for `.trim()` on `<select>`
//         };

//         if (!updateformdetails.formId || !updateformdetails.status) {
//             alert("Please enter a valid Form ID and select a status.");
//             return;
//         }

//         try {
//             const isConfirmed = window.confirm("Are you sure you want to update the form status?");
//             if (!isConfirmed) {
//                 navigate("/managerprofile"); 
//                 return;
//             }

//             const response = await updateManagerformstatus(updateformdetails);
//             console.log("manager Update  response:", response);

//             if (response.success) {
//                 // Update local storage
//                 localStorage.setItem("user", JSON.stringify(response.updateddata));
//                 navigate("/managerprofile");
//             } else {
//                 alert("Update failed. Please try again.");
//             }

//         } catch (error) {
//             console.error("Error updating form status:", error);
//             alert("Update failed!");
//         }
//     };

//     return (
//         <>
//             <h1>Update Form Status</h1>
//             <form onSubmit={submithandler}>
//                 <label>Form ID:</label>
//                 <input type="text" placeholder="Enter Form ID" ref={formId} required /> 
//                 <br /><br />

//                 <label>Select Status:</label>
//                 <select ref={status} required>
//                     <option value="">-- Select Status --</option>
//                     <option value="accepted">Accepted</option>
//                     <option value="rejected">Rejected</option>
//                 </select>
//                 <br /><br />

//                 <button type="submit">Submit</button> 
//                 <br /><br />
//             </form>
//         </>
//     );
// }

// export default Status_checking;

