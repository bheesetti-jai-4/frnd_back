import BestService from "./bestservice/BestService"
import Location_home from "./location/Location_home"
import Service_Home from "./service/Service_Home"
import Testmonials_home from "./testmonials/Testmonials_home"
import Top_Brands from "./Top_Brands"
import Why_side from "./Why_side"



function Home_main() {
  return (
    <>
        {/* <h1>welcome home </h1> */}
        <BestService/>
        <Why_side/>
        <Top_Brands/> 
        <Service_Home/>
        <Testmonials_home/>
        <Location_home/>

    </>
  )
}

export default Home_main