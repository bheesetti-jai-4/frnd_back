
import Why_Features from "../../Store/Why_Features";

console.log("details = ",Why_Features);

const features = Why_Features

const Why_side = () => {
  return (
    <div className="w-full mx-auto px-5 bg-green-100 mt-16">
     <div className='max-w-7xl mx-auto px-5 mt-16 p-6 ' >
     <div className="text-left">
        <h2 className="font-semibold text-3xl">Why us</h2>

        {/* <p className="max-w-md mx-auto mt-2 text-gray-500">
          A responsive documentation template built for everyone who wants to create a plugin.
        </p> */}
      </div>

      <div className="grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 mt-10 ">
        {features.map((feature, index) => (
          <div className="flex gap-4 items-start" key={index}>

            <span className="bg-violet-500/10 p-3 rounded-full flex items-center justify-center">
                <img
                  src={feature.img}
                  alt={feature.title}
                  className="w-9 h-9 object-contain"
                />
              </span>
              
            {/* <img src={feature.img} alt={feature.img} /> */}

            <div>
              <h3 className="font-semibold text-2xl">{feature.title}</h3>
              <p className="mt-1 text-sm text-gray-500">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
     </div>
    </div>
  );
};

export default Why_side;
