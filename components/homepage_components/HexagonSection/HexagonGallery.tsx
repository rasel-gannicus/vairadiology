import React from 'react';

const HexagonExpertise = () => {
  const services = [
    {
      title: "Research",
      image: "https://wallpapercrafter.com/th8001/543858-Backgrounds-School-Education-Science-research.jpg",
      icon: "🧪"
    },
    {
      title: "Biotechnology", 
      image: "https://novalab.bold-themes.com/lab-l/wp-content/uploads/sites/10/2025/06/service_8.avif",
      icon: "🌾"
    },
    {
      title: "Radiology",
      image: "https://aquifer.org/wp-content/uploads/2017/12/Aquifer-Website-Featured-Images-e1518011485609.jpg", 
      icon: "☢︎"
    }
  ];

  return (
    <div className="min-h-screen  py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Our Expertise</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Improve all products to make them safer, better and more accessible for environment.
          </p>
        </div>

        {/* Hexagon Grid */}
        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
          {services.map((service, index) => (
            <div key={index} className="relative group">
              {/* Outer Hexagon */}
              <div 
                className="hexagon-outer relative overflow-hidden cursor-pointer transform transition-all duration-500 hover:scale-105"
                style={{
                  width: '350px',
                  height: '390px',
                  clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                  backgroundImage: `url(${service.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-20 transition-opacity duration-300 group-hover:bg-opacity-60 "></div>
                
                {/* Inner Hexagon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div 
                    className="hexagon-inner bg-white bg-opacity-95 flex flex-col items-center justify-center shadow-2xl transform transition-all duration-300 "
                    style={{
                      width: '180px',
                      height: '200px',
                      clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
                    }}
                  >
                    {/* Icon */}
                    <div className="text-3xl mb-2 text-red-500">
                      {service.icon}
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-sm font-bold text-gray-800 text-center px-4 leading-tight">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Hover Effect - Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div 
                    className="absolute inset-0 shadow-2xl"
                    style={{
                      clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                      boxShadow: '0 0 40px rgba(239, 68, 68, 0.5)'
                    }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom decoration */}
        <div className="mt-16 flex justify-center">
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default HexagonExpertise;