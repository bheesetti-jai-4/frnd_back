

// import React from "react";

// const Top_Brands = () => {
//   const brands = [
//     {
//       name: "hp",
//       bgColor: "#0070CC",
//       imgSrc: "/brands/hp2.jpeg", // Replace with your image path
//     },
//     {
//       name: "Xbox",
//       bgColor: "#0C7A1F",
//       imgSrc: "/brands/lenova.png", 
//     },
//     {
//       name: "Steam",
//       bgColor: "#000000",
//       imgSrc: "/brands/hp.png", 
//     },
//     {
//       name: "Discord",
//       bgColor: "#5865F2",
//       imgSrc: "/brands/hp.png", 
//     },
//     {
//       name: "SoundCloud",
//       bgColor: "#F37422",
//       imgSrc: "/brands/hp.png", 
//     },
//     {
//       name: "YouTube",
//       bgColor: "#FF0000",
//       imgSrc: "/brands/hp.png", 
//     },
//   ];

//   return (
//     <div className="flex items-center justify-center">
//       <div className="mx-auto w-full max-w-7xl">
//         <div className="grid grid-cols-2 gap-2 p-2 text-center sm:grid-cols-3 md:grid-cols-4 md:p-5 lg:grid-cols-6">
//           {brands.map((brand, index) => (
//             <a
//               key={index}
//               href="#"
//               className="group relative flex h-[200px] w-full flex-col items-center justify-center overflow-hidden rounded-xl transition-all duration-300 hover:shadow-lg"
//             >
//               <div className="relative z-0 h-[100px] w-[100px] rounded-full">
//                 <div
//                   className="absolute "
//                   style={{ backgroundColor: brand.bgColor }}
//                 ></div>
//                 <div className="absolute inset-0 z-10 flex items-center justify-center">
//                   <img
//                     src={brand.imgSrc}
//                     alt={brand.name}
//                     className="w-20 transition-all duration-500 group-hover:scale-110 "
//                   />
//                 </div>
//               </div>
//               {/* <h2 className="z-10 mt-4 text-xl transition-all duration-500 group-hover:text-white">
//                 {brand.name}
//               </h2> */}
//             </a>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Top_Brands;

import React from "react";

const Top_Brands = () => {

  const projects = [
    {
      image: "/brands/hp.png",
      link: "#",
    },
    {
      image: "https://swiperjs.com/images/projects/atropos.svg",
      link: "#",
    },
    {
      image: "https://swiperjs.com/images/projects/konsta.svg",
      link: "#",
    },
    {
      image: "https://swiperjs.com/images/projects/konsta.svg",
      link: "#",
    },
    {
      image: "https://swiperjs.com/images/projects/konsta.svg",
      link: "#",
    },
    {
      image: "https://swiperjs.com/images/projects/konsta.svg",
      link: "#",
    },
    
  ];
  


  return (  
    <div className="mx-auto bg-green-100 mt-10  mb-20 max-w-full text-left  p-10">
     {/* <div className="max-w-7xl mx-auto px-5 mt-16 p-6 " > */}
     <h2 className="mb-5  ml-10 text-3xl font-bold text-gray-900 ">
        Top Brands
      </h2>

      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 justify-items-center">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-xl border border-gray-400 border-opacity-10 duration-300 hover:border-opacity-0 hover:shadow-xl hover:shadow-black/50"
          >
            <img
              className="h-20 w-20 sm:h-32 sm:w-32 object-contain"
              src={project.image}
              alt={`Project ${index + 1}`}
            />
          </a>
        ))}
      </div>
     {/* </div> */}
    </div>
  );
};


export default Top_Brands;
