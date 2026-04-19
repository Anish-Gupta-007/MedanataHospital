"use client";

import React, { useState } from "react";

export default function AwardsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const awards = [
    {
      year: "2026",
      hospital: "Medanta Gurugram",
      title: "#1 Hospital in India",
      desc: "Among the World's Best\nHospitals\n7 Years in a Row\n- Newsweek"
    },
    {
      year: "2025",
      hospital: "Medanta Gurugram",
      title: "Best Healthcare Brands of 2025",
      desc: "- The Economic Times"
    },
    {
      year: "2025",
      hospital: "Medanta Gurugram",
      title: "Best Private Hospital in India for\n6 Years in a Row",
      desc: "- Newsweek"
    },
    {
      year: "2024",
      hospital: "Medanta Gurugram",
      title: "Best Private Hospital in India for\n5 Years in a Row",
      desc: "- Newsweek"
    },
    {
      year: "2023",
      hospital: "Medanta Gurugram",
      title: "Best Private Hospital in India for\n4 Years in a Row",
      desc: "- Newsweek"
    },
    {
      year: "2022",
      hospital: "Medanta Gurugram",
      title: "Among Top Hospitals in 9\nCategories",
      desc: "- Times Health Survey"
    },
    {
      year: "2021",
      hospital: "Medanta Gurugram",
      title: "Best Multi-Speciality Hospital in\nIndia",
      desc: "- Times Health Survey"
    },
    {
      year: "2020",
      hospital: "Medanta Gurugram",
      title: "Best Hospital for Medical Tourism",
      desc: "- India Healthcare Awards"
    },
    {
      year: "2018",
      hospital: "Medanta Gurugram",
      title: "Best Hospital for Neurosurgery,\nNeurology",
      desc: "- India Healthcare Awards"
    }
  ];

  const maxIndex = awards.length - 3;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section className="relative w-full py-10 lg:py-12 ">
      {/* Background Topographic Wave Image */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden opacity-[0.25]">
        <img 
          src="/image.png" 
          alt="Topographic Background" 
          className="w-full h-full object-cover grayscale"
        />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto w-full px-6 lg:px-10">
        
        <h2 className="text-center text-[30px] font-bold text-gray-800 mb-8 tracking-tight">
          Awards & Recognitions
        </h2>
        
        {/* Carousel Wrapper */}
        <div className="relative w-full">
          
          {/* Left Arrow */}
          <button 
            onClick={prevSlide}
            className="absolute -left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center text-gray-500 hover:text-[#f05c3d] transition-all hover:scale-105"
          >
            <span className="text-2xl mb-1">&lsaquo;</span>
          </button>

          {/* Slider Container matching slick-track logic */}
          <div className="overflow-hidden -mx-4 py-8">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
            >
              {awards.map((item, idx) => (
                <div key={idx} className="w-full md:w-1/3 flex-shrink-0 px-4">
                  
                  {/* Award Card */}
                  <div className="bg-white rounded-[24px] shadow-[0_8px_30px_rgba(0,0,0,0.06)] overflow-hidden flex flex-col items-center justify-center min-h-[220px] border border-gray-50 px-6 py-6 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-shadow">
                     
                     {/* Year Row */}
                     <div className="flex items-center justify-center gap-5 mb-6">
                        <div className="w-12 h-[1.5px] bg-gray-500"></div>
                        <span className="text-[24px] font-normal text-[#f05c3d] tracking-wide">{item.year}</span>
                        <div className="w-12 h-[1.5px] bg-gray-500"></div>
                     </div>
                     
                     {/* Content Row with Side Leaf Images */}
                     <div className="flex items-stretch justify-between w-full h-full gap-2">
                        {/* Left Laurel Wreath Image */}
                        <div className="w-[40px] flex-shrink-0 flex items-center justify-center mb-6">
                           <img src="/leaf-left.png" alt="Left Wreath" className="w-full h-auto object-contain opacity-90" />
                        </div>

                        {/* Center Text Area */}
                        <div className="flex-1 flex flex-col items-center text-center px-1">
                           <span className="text-[#f05c3d] font-bold text-[13px] leading-tight mb-1.5 tracking-wide">
                              {item.hospital}
                           </span>
                           <h3 className="font-bold text-gray-800 text-[14.5px] leading-[1.3] whitespace-pre-wrap tracking-tight">
                              {item.title}
                           </h3>
                           <p className="text-gray-600 text-[12.5px] font-medium leading-[1.3] mt-1 whitespace-pre-wrap">
                              {item.desc}
                           </p>
                        </div>

                        {/* Right Laurel Wreath Image */}
                        <div className="w-[40px] flex-shrink-0 flex items-center justify-center mb-6">
                           <img src="/leaf-right.png" alt="Right Wreath" className="w-full h-auto object-contain opacity-90" />
                        </div>
                     </div>
                  </div>

                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button 
            onClick={nextSlide}
            className="absolute -right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center text-gray-500 hover:text-[#f05c3d] transition-all hover:scale-105"
          >
            <span className="text-2xl mb-1">&rsaquo;</span>
          </button>

        </div>
      </div>
    </section>
  );
}
