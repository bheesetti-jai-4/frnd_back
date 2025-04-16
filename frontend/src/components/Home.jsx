


import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState("");

  // Retrieve user data from Redux store
  const userdata = useSelector((state) => state.user);
  console.log("Redux user data:", userdata);

  // Check if user is logged in and determine their role
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      const parsedUser = JSON.parse(user);
      setIsLoggedIn(true);
      setRole(parsedUser.role); // Set user role
    }
  }, []);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setRole("");
    navigate("/login");
  };

  // Handle Login Redirect Based on Role
  const handleProfileRedirect = () => {
    if (role === "user") {
      navigate("/profile"); // User goes to profile
    } else if (role === "manager") {
      navigate("/managerprofile"); // Manager stays on home page
    }
  };

  return (
    <>
      <nav>
        <div>
          <h1>Logo Navbar</h1>
        </div>
        <div>
          <input type="search" placeholder="Search anything" />
          {isLoggedIn ? (
            <>
              <button onClick={handleProfileRedirect}>Profile</button>
              <button onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <button onClick={() => navigate("/login")}>Login</button>
          )}
        </div>
      </nav>
    </>
  );
}

export default Home;



import { HiAdjustments, HiDeviceMobile, HiSupport, HiUsers } from 'react-icons/hi';
import { GiAutoRepair } from "react-icons/gi";





