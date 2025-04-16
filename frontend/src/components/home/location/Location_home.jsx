



function Location_home() {
    const handleMapClick = () => {
        window.open(`https://www.google.com/maps?q=${17.443781},${78.442520}`, "_blank"
      );
    };


    
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
        <section className="bg-gray-100">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
            <div className="max-w-2xl lg:max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-extrabold text-gray-900">Visit Our Location</h2>
              <p className="mt-4 text-lg text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="mt-16 lg:mt-20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Clickable Map with Overlay */}
                <div className="relative rounded-lg overflow-hidden cursor-pointer" onClick={handleMapClick}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7612.569752723591!2d78.43882964125268!3d17.446073983804304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1741110026844!5m2!1sen!2sin" 
                      width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                  {/* Invisible Overlay to Capture Click */}
                  <div className="absolute top-0 left-0 w-full h-full"></div>
                </div>
  
                <div>
                  <div className="max-w-full mx-auto rounded-lg overflow-hidden">
                    <div className="text-center md:text-left">
                      <h3 className="text-lg font-medium text-gray-900">Our Address</h3>
                      <p className="mt-1 text-gray-600">123 S.R.Nagar Main Road ,Hyderbad India </p>
                    </div>
  
                    <div className="border-t border-gray-200 px-6 py-4">
                      <h3 className="text-lg font-medium text-gray-900">Hours</h3>
                      <p className="mt-1 text-gray-600">Monday - Friday: 9am - 5pm</p>
                      <p className="mt-1 text-gray-600">Saturday: 10am - 4pm</p>
                      <p className="mt-1 text-gray-600">Sunday: Closed</p>
                    </div>
                    <div className="border-t border-gray-200 px-6 py-4">
                      <h3 className="text-lg font-medium text-gray-900">Contact</h3>
                      {/* <p className="mt-1 text-gray-600 cursor-pointer hover:text-red-600">Email: doctor@example.com</p>
                      <p className="mt-1 text-gray-600 cursor-pointer hover:text-red-600 " onClick={makeCall}>Phone: {number} </p> */}

                      <p className="mt-1 text-gray-600  " >Email : <span className="mt-1 text-gray-600 cursor-pointer hover:text-red-600 "  >  doctor@gmail.com </span> </p>
                      <p className="mt-1 text-gray-600  " >Phone : <span className="mt-1 text-gray-600 cursor-pointer hover:text-red-600 " onClick={makeCall} >  {number} </span> </p>
                      <p className="mt-1 text-gray-600  " >whats App : <span className="mt-1 text-gray-600 cursor-pointer hover:text-red-600 " onClick={sendmessage} >  {whatsappNumber} </span> </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
  
  export default Location_home;
  