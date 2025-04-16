
// import { useNavigate } from "react-router-dom";

const Service_Home = () => {
//   const navigate = useNavigate();

  const servicemin = [
    {
      title: "Web Design",
      description: "Professional and responsive web design services.",
      image: "/brands/hp2.jpeg",
    },
    {
      title: "App Development",
      description: "Build scalable and high-performance mobile apps.",
      image: "https://via.placeholder.com/300x200?text=App+Development",
    },
    {
      title: "SEO Optimization",
      description: "Improve your site's visibility on search engines.",
      image: "https://via.placeholder.com/300x200?text=SEO",
    },
    {
      title: "Social Media",
      description: "Boost your brand's online presence.",
      image: "https://via.placeholder.com/300x200?text=Social+Media",
    },

  ];

  return (
    <section className="w-full bg-gray-300 py-9 px-6">
      <div className="mx-auto max-w-[1160px]">
        {/* Header Section */}
        <header className="text-center mb-8">
          <h2 className="text-4xl font-bold font-['Roboto']">Services Available</h2>
          <p className="text-gray-700 mt-2 px-4 sm:px-8 md:px-16">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis dolores omnis reprehenderit accusamus numquam perspiciatis quaerat.
          </p>
        </header>

        {/* Cards Section in Grid */}
        <main className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {servicemin.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center"
            >
              <img
                className="mb-4 rounded-xl  object-cover mx-auto block"
                src={item.image}
                alt={item.title}
              />
              <h3 className="text-2xl font-bold font-['Roboto'] text-center">{item.title}</h3>
              <p className="mt-2 mb-4 text-sm text-gray-600 text-center">{item.description}</p>
              <button
                className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg text-sm font-semibold transition-all"
                // onClick={() => navigate("/service")}
              >
                Learn More
              </button>
            </div>
          ))}
        </main>
      </div>
    </section>
  );
};

export default Service_Home;
