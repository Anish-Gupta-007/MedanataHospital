"use client";

import React, { useState } from "react";

export default function NetworkSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const locations = [
    {
      city: "Gurugram",
      title: "Medanta - The Medicity, Gurugram",
      has360: true,
      img: "/network1.jpg"
    },
    {
      city: "Lucknow",
      title: "Medanta Super Speciality Hospital, Lucknow",
      has360: true,
      img: "/network2.jpg"
    },
    {
      city: "Patna",
      title: "Jay Prabha Medanta Super Specialty Hospital, Patna",
      has360: true,
      img: "/network3.jpg"
    },
    {
      city: "Indore",
      title: "Medanta Super Speciality Hospital, Indore",
      has360: false,
      img: "/network4.jpg"
    },
    {
      city: "Ranchi",
      title: "Medanta Abdur Razzaque Ansari Memorial Weavers' Hospital, Ranchi",
      has360: false,
      img: "/network5.png"
    },
    {
      city: "Noida",
      title: "Medanta Noida",
      has360: false,
      img: "/network6.webp"
    }
  ];

  const maxIndex = locations.length - 3; // For 3 items visible at a time

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section className="relative w-full py-20 bg-[#fdfdfd]">
      <div className="max-w-[1280px] mx-auto w-full px-6 lg:px-10">
        
        <h2 className="text-center text-[34px] font-bold text-gray-800 mb-12 tracking-tight">
          Medanta Network
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

          {/* Slider Container with slick-track architecture */}
          <div className="overflow-hidden -mx-3 py-6">
            <div 
              className="slick-track flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
            >
              {locations.map((item, idx) => (
                <div key={idx} className="w-full md:w-1/3 flex-shrink-0 px-3">
                  
                  {/* Card */}
                  <div className="bg-white rounded-3xl shadow-[0_4px_25px_rgba(0,0,0,0.07)] overflow-hidden flex flex-col h-full min-h-[420px] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-shadow border border-gray-50">
                     {/* Image Top */}
                     <div className="h-[220px] w-full bg-gray-100 relative">
                        <img 
                          src={item.img} 
                          alt={item.title} 
                          className="w-full h-full object-cover" 
                        />
                     </div>
                     
                     {/* Content Bottom */}
                     <div className="p-8 flex flex-col items-center text-center flex-1">
                        {/* City with Pin */}
                        <div className="flex items-center gap-1.5 text-[14px] font-semibold text-gray-500 mb-5 tracking-wide">
                           <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                             <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                             <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                           </svg>
                           {item.city}
                        </div>

                        <h3 className="text-[20px] font-bold text-gray-800 leading-[1.3] mb-8 px-2 tracking-tight">
                           {item.title}
                        </h3>

                        {/* Buttons Footer */}
                        <div className="mt-auto flex items-center justify-center gap-8 w-full">
                           <button className="flex items-center gap-2 text-[13px] font-bold text-gray-600 hover:text-[#f05c3d] transition-colors group">
                              Know More
                              <div className="w-5 h-5 rounded-full bg-[#f05c3d] text-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                                <span className="mb-[1px] font-black">&rsaquo;</span>
                              </div>
                           </button>
                           
                           {item.has360 && (
                             <button className="flex items-center gap-2 text-[13px] font-bold text-gray-600 hover:text-[#f05c3d] transition-colors group">
                               360 Degree View
                               <div className="w-5 h-5 rounded-full bg-[#f05c3d] text-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                                 <span className="mb-[1px] font-black">&rsaquo;</span>
                               </div>
                             </button>
                           )}
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
