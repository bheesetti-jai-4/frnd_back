


import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faUsers, faFileAlt, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { userFormHistory } from "../../../server/User_Axios";

const Deta_All = () => {
    
  
// const Deta_All = () => {
    const [userData, setUserData] = useState(null); // Store full user data
    
    // eslint-disable-next-line no-unused-vars
    const [loading, setLoading] = useState(true); // Loading state
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await userFormHistory(); // Fetch all form history
          // console.log("Fetched Data:", response); // Debugging log
          setUserData(response); // Store full data in state
        } catch (err) {
          console.error("Error fetching data:", err);
        } finally {
          setLoading(false); // Stop loading when request is complete
        }
      };
  
      fetchData();
    }, []);
  
    // Placeholder values if data isn't loaded yet
    const formCount = userData?.forms?.length || 0;

    // const userCount = userData?.users?.length || 0;
    // const fileCount = userData?.files?.length || 0;
    // const placeCount = userData?.places?.length || 0;

    const pendingForms = userData?.forms?.filter(form => form.status === "pending").length || 0;
    const acceptedForms = userData?.forms?.filter(form => form.status === "accepted").length || 0;
    const rejectedForms = userData?.forms?.filter(form => form.status === "rejected").length || 0;
  
  







  const stats = [
    { id: "total1", icon: faDownload, count: formCount , label: "Total Forms" },
    { id: "total2", icon: faUsers, count:acceptedForms , label: "Accepted Forms" },
    { id: "total3", icon: faFileAlt, count: pendingForms , label: "Pending Froms" },
    { id: "total4", icon: faUsers, count: rejectedForms , label: "rejected  Forms" },
    { id: "total5", icon: faMapMarkerAlt, count: "46", label: "Places" },
  ];

  return (
    <section className="text-gray-700 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4 text-center">
          {stats.map(({ id, icon, count, label }) => (
            <div key={id} className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-600 px-4 py-6 rounded-lg hover:shadow-xl  transform transition duration-500 hover:scale-110 cursor-pointer">
                <FontAwesomeIcon icon={icon} className="text-indigo-500 w-12 h-12 mb-3" />
                <h2 className="title-font font-medium text-3xl text-gray-900">{count}</h2>
                <p className="leading-relaxed mt-3">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Deta_All;
