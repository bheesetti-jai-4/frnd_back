

import { useEffect, useState } from "react";
import { managerAllforms, searchallformsbymanager } from "../../../server/Manager_Axios";
import { toast } from "react-toastify";
// import { searchform, userFormHistory } from "../../../server/User_Axios";

function All_fomrs_data() {

  const [userData, setUserData] = useState(null); // Store full user data
  const [error, setError] = useState(null);
  const [searchResult, setSearchResult] = useState(null); // Store search results
  const [search, setSearch] = useState(""); // Store user input

  // Fetch all user forms when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await managerAllforms(); // Fetch all form history
        // console.log("Fetched Data:", response); // Debugging log
        setUserData(response); // Store full data in state
      } catch (err) {
        console.error("Error fetching data:", err);
        toast.error("Failed to fetch data ")
        setError("Failed to fetch data || Not connected to database");
      }
    };

    fetchData();
  }, []);

  // Function to handle live search
  const handleSearch = async (e) => {
    const query = e.target.value;
    setSearch(query); // Update search state

    if (!query.trim()) {
      setSearchResult(null); // Reset to full list if search is empty
      return;
    }

    try {
      const response = await searchallformsbymanager(query);
      // console.log("Search Response:", response); // Debugging log

      if (response && response.forms && response.forms.length > 0) {
        setSearchResult(response.forms); // Update state if data is found
      } else {
        setSearchResult([]); // No data found, reset search results
      }
    } catch (err) {
      console.error("Search failed:", err);
      toast.error("search failed || connection problem")
      setError("Search failed || Database connection issue");
    }
  };

  // Handle error state
  if (error)
    return (
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl text-red-500 font-bold mb-6">{error}</h2>
        </div>
      </div>
    );

  // Show loading state
  if (!userData)
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="rounded-full h-20 w-20 bg-green-500 animate-ping"></div>
      </div>
    );

  // Get displayed forms based on search results
  const displayedForms = searchResult !== null ? searchResult : userData.forms || [];

  return (
    <>
      <section className="bg-gray-100 py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6  ">Forms History</h2>

            {/* Search Input */}
            <div className="flex justify-center items-center mb-6">
              <input
                type="text"
                value={search}
                onChange={handleSearch}
                className="border border border-gray-400 px-4 py-2 w-full sm:w-2/3 md:w-1/2 lg:w-2/3 xl:w-3/4  rounded-md outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-400"
                placeholder="Search by name..."
              />
            </div>





          </div>

          {/* Display Results */}
          {displayedForms.length > 0 ? (
            <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {displayedForms.map((form) => (
                <div key={form._id} className="bg-white shadow-lg overflow-hidden break-words rounded-lg p-6">
                  <div className="text-2xl font-bold text-purple-600 mb-4">{form.name}</div>

                  <h3 className="text-sm font-bold mb-2"> {form._id}</h3>
                  <h3 className="text-m font-bold mb-2"> {form.email}</h3>
                  <h3 className="text-l font-bold mb-2"> {form.phoneNumber}</h3>
                      <p className="text-gray-600 mt-4">{form.addres}</p>

                  {/* Status Badge */}
                  <div className="flex mt-5 ">
                    <h3
                      className={`text-m font-bold p-2 rounded-lg ${
                        form.status === "pending"
                          ? "bg-yellow-500 text-black"
                          : form.status === "accepted"
                          ? "bg-green-500 text-black"
                          : "bg-red-500 text-black"
                      }`}
                    >
                      {form.status}
                    </h3>
                  </div>

                </div>
              ))}
            </div>
          ) : (
            <p className="text-red-500 font-semibold text-center mt-8">No data found</p>
          )}
        </div>
      </section>
    </>
  );
}

export default All_fomrs_data;



