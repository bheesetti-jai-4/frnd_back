import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { updateuserdetails } from "../../../server/User_Axios";
import { toast } from "react-toastify";

function Update_user() {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
            const user = JSON.parse(localStorage.getItem("user"));
            if (user) {
                nameRef.current.value = user.name;
                emailRef.current.value = user.email; 
            }
        }, []);

    const submitHandler = async (e) => {
        e.preventDefault();

        const updatedDetails = {
            name: nameRef.current.value.trim(),
            email: emailRef.current.value.trim(),
        };

        if (!updatedDetails.name || !updatedDetails.email) {
            toast.warning("Please enter a valid name and email.");
            return;
        }

        try {
            const isConfirmed = window.confirm("Are you sure you want to update your account details?");
            if (!isConfirmed) {
                navigate("/userdashbord/updateuser");
                return;
            }

            const response = await updateuserdetails(updatedDetails);
            // console.log("Update response:", response);

            if (response.success) {
                localStorage.setItem("user", JSON.stringify(response.updateddata));
                toast.success("Update successful!");
                navigate("/userdashbord/userprofile");
            } else {
                toast.error("Update failed. Please try again.");
            }

        } catch (error) {
            console.error("Error updating user:", error);
            // alert("Update failed!");
            if (error.response && error.response.data && error.response.data.message) {
                toast.error(error.response.data.message); // Show backend error
            } else {
                toast.error("Update failed!");
            }
        }
    };

    return (
        <div className="bg-white border rounded-lg shadow-md p-6 m-10">
            <div className="flex justify-center pb-5 border-b">
                <h3 className="text-xl font-semibold p-3 bg-red-500 rounded-lg">Update User Details</h3>
            </div>

            <form onSubmit={submitHandler} className="space-y-6">
                <div className="mt-6">
                    <label className="text-m  font-medium text-gray-900 block mb-2 p-2">Name</label>
                    <input type="text" ref={nameRef}
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                        placeholder="Enter name" required />
                </div>

                <div>
                    <label className="text-m font-medium text-gray-900 block mb-2 p-2">Email</label>
                    <input type="email" ref={emailRef}
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                        placeholder="Enter email" required />
                </div>

                <div className="border-t border-gray-200 pt-6">
                    <button type="submit"
                        className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5">
                        Update
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Update_user;









// import { useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import { updateuserdetails } from "../../../server/User_Axios";


// function Update_user() {
//     const name = useRef(null);
//     const email = useRef(null);
//     const navigate = useNavigate();

//     const submithandler = async (e) => {
//         e.preventDefault();

//         // Manually get values from input fields
//         const updatedetails = {
//             name: name.current.value.trim(),
//             email: email.current.value.trim()
//         };

//         if (!updatedetails.name || !updatedetails.email) {
//             alert("Please enter valid name and email.");
//             return;
//         }

//         try {
//             const isConfirmed = window.confirm("Are you sure you want to update your account details?");
//             if (!isConfirmed) {
//                 navigate("/profile");
//                 return;
//             }

//             const response = await updateuserdetails(updatedetails);
//             console.log("Update response:", response);

//             if (response.success) {
//                 // Update local storage
//                 localStorage.setItem("user", JSON.stringify(response.updateddata));
//                 // alert("Update successful! Profile updated.");
//                 navigate("/userdashbord/userprofile");
//             } else {
//                 alert("Update failed. Please try again.");
//             }

//         } catch (error) {
//             console.log("Error updating user:", error);
//             alert("Update failed!");
//         }
//     };

//     return (
//         <>
//             <h1>Update Form</h1>
//             <form onSubmit={submithandler}>
//                 <label>Name:</label>
//                 <input type="text" placeholder="Enter name" ref={name} required /> <br /><br />

//                 <label>Email:</label>
//                 <input type="email" placeholder="Enter email" ref={email} required /> <br /><br />

//                 <button type="submit">Submit</button> <br /><br />
//             </form>
//         </>
//     );
// }

// export default Update_user;
