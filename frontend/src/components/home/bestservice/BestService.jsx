


function BestService() {



    // const number=  import.meta.env.PHONE_NUMBER
    // const whatsappNumber = import.meta.env.WHATSAPP_NUMBER
    const number=  "+919705309118"
    const whatsappNumber = "919381235807"
    const message = "Hello, Send this message !"; // Your custom message
  
     // Function to detect mobile devices
     const isMobile = () => {
      return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    };
  
    const makeCall = () => {
      if (isMobile()) {
        window.location.href = `tel:${number}`; // Redirect to phone dialer on mobile
      } else {
        window.open(`https://wa.me/${number}`, "_blank")
      }
    };
  
  
    const sendmessage = () => {
      const encodedMessage = encodeURIComponent(message); // Encode special characters
      window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank");
    };
    
  
    return (
      <>
  <div className="flex w-full justify-center items-center dark:bg-gray-100 h-60">
    <div className="text-center max-w-6xl  mx-10">
        <h1 className="my-5 text-3xl font-bold tracking-tight text-black md:text-5xl ">
            Best Service
            Offered Here
        </h1>
        <p className="my-3 text-sm tracking-widest text-indigo-500 uppercase">Fast &amp;  friendly envronment </p>
      
        <div className="flex flex-col items-center justify-center gap-5 mt-6 md:flex-row"><a
                className="inline-block w-auto text-center min-w-[200px] px-6 py-4 text-white  rounded-md shadow-xl sm:w-auto bg-blue-500  hover:bg-red-500 cursor-pointer"
                onClick={makeCall}
              // onClick={()=>window.location.href = `tel:${number}`}
                
                // window.open(`https://wa.me/${number}`, "_blank")}
                
                // window.location.href = `tel:${number}`}
                >call 
                {/* {number} */}
            </a>
            <a className="inline-block w-auto text-center min-w-[200px] px-6 py-4 text-white  bg-gray-700  rounded-md shadow-xl sm:w-auto hover:bg-green-500 cursor-pointer"
            onClick={sendmessage}
            >whats App
            </a>

            <a className="inline-block w-auto text-center min-w-[200px] px-6 py-4 text-white  bg-gray-700  rounded-md shadow-xl sm:w-auto hover:bg-green-500 cursor-pointer"
            onClick={sendmessage}
            >whats App
            </a>

        </div>
    </div>
  </div>
      </>
    )
  }
  
  export default BestService