



import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';


const Testmonials_home = () => {


    const testdata = [
        {
            name: "john dee",
            image: "/people/g1.jpg",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. In voluptas tempora aut repellat dicta corporis"
        },
        {
            name: "man dee",
            image: "/people/g2.jpeg",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. In voluptas tempora aut repellat dicta corporis"
        },
        {
            name: "women dee",
            image: "/people/g1.jpg",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. In voluptas tempora aut repellat dicta corporis"
        },
        {
            name: "three dee",
            image: "/people/g2.jpeg",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. In voluptas tempora aut repellat dicta corporis"
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    // const navagate = useNavigate()

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => 
                prevIndex === testdata.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000); // Changes every 2 seconds

        return () => clearInterval(interval);
    }, [testdata.length]);

    const handleLineClick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className=" flex flex-col items-center justify-center p- h-100 ">
            <div className="mt-1  mb-10">
                <h1 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl">Trusted by 10k+ Happy Customers</h1>
            </div>

            {/* Carousel Container */}
            <div className="w-full rounded-lg max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl overflow-hidden"  >
                <div 
                    className="flex  transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {testdata.map((item, index) => (
                        <div 
                            key={index} 
                            className="bg-gray-300 flex-shrink-0 flex flex-col items-center text-center p-4 rounded-lg w-full cursor-pointer"
                            // onClick={()=> navagate("/testmonial")} 
                        >
                            <img 
                                src={item.image} 
                                alt={item.name} 
                                className="rounded-full h-30 w-30 mb-2 sm:h-16 sm:w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 object-cover"  
                            />
                            <p className="text-sm m-2">{item.description}</p>
                            <h1 className=" text-red-600 font-bold text-base sm:text-lg md:text-xl lg:text-2xl">{item.name}</h1>
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation Lines with Small Size and Rounded Borders */}
            <div className="flex gap-2 mt-4">
                {testdata.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handleLineClick(index)}
                        className={`h-1 w-6 rounded-full transition-all duration-300 ${
                            currentIndex === index 
                                ? 'bg-red-500 scale-x-125' 
                                : 'bg-gray-400'
                        }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Testmonials_home;