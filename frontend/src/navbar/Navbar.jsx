import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars  } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";



function Navbar() {
  const [menuopen, setmenuopen] = useState(false);
  
  const [islogin,setislogin] = useState(false)
  const [ismanager,setismanager] = useState(false)



  const user = useSelector((state)=>{
    console.log("Redux State:", state); // Debug Redux state
    return state.user;
  }) // data retrive from redux store 
  console.log("user data ", user);  //debug


  useEffect(() => {
    if (user) {
      setislogin(true);
      if (user.role === "manager") {
        setismanager(true);
      }
    } else {
      setislogin(false);
      setismanager(false);
    }
  }, [user]);
  




  const menutopics = [
    { name: "Services", url: "/service" },
    // { name: "Address", url: "/address" },
    // { name: "Testimonial", url: "/testmonial" },
    { name: "About me", url: "/aboutme" },
    { name: "Home", url: "/home" },
  ];

    const navagate = useNavigate()
    

  return (
    <>
        <nav className="">
            {/* containtr */}
            <div className=" w-full flex flex-row items-center justify-around  bg-gray-200 p-4 "  > 
                <div>
                    <h1 className="font-bold text-3xl cursor-pointer" onClick={()=>{navagate("/")}} >Logo</h1>
                </div>

               

                <div className=" hidden  sm:flex flex-row gap-5 text-red-500 " >
                    {
                        menutopics.map((item,index)=>(
                           <Link to={item.url} key={index} >
                            <ul   >
                            <li className=" cursor-pointer font-semibold hover:text-slate-900 ">{item.name}  </li>
                            </ul>
                           </Link>
                        ))
                    }
                 </div>
                 {/* managerdashbord/managerprofile */}
                 {
  islogin ? (
    ismanager ? (
      <h1 className="bg-blue-500 cursor-pointer rounded-lg p-3 hidden md:block hover:bg-red-700" 
        onClick={() => navagate("/managerdashbord/managerprofile")}>
        manager_profile
      </h1>
    ) : (
      <h1 className="bg-green-500 cursor-pointer rounded-lg p-3 hidden md:block hover:bg-red-700" 
        onClick={() => navagate("/userdashbord/userprofile")}>
        user_profile
      </h1>
    )
  ) : (
    <h1 className="bg-red-500 cursor-pointer rounded-lg p-3 hidden md:block hover:bg-red-700" 
      onClick={() => navagate("/login")}>
      Employee_login
    </h1>
  )
}

                    

               {/* mobile version  */}
                <div className="visible sm:hidden" >
                <FontAwesomeIcon icon={faBars} 
                onClick={()=>setmenuopen(!menuopen)}
                className="text-4xl  " />
                </div>
            </div>

               
                {/* mobile version  */}
                {
                    menuopen && 
                    <div className=" w-full bg-gray-200 p-3  flex flex-col items-center  sm:hidden " >
                    {
                        menutopics.map((item,index)=>(
                            <Link to={item.url} key={index} 
                            
                            >
                            <ul  className="p-3 "   >
                            <li className=" cursor-pointer font-semibold text-xl hover:text-red-600  " 
                            // set click after hide 
                            onClick={()=>setmenuopen(!menuopen)} >
                                {item.name}</li>
                            </ul>
                            </Link>
                        ))
                    }
                 </div>
                }


        </nav>
    </>
  )
}

export default Navbar



