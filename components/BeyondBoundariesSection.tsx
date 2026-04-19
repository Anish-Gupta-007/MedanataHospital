"use client";

import React from "react";

export default function BeyondBoundariesSection() {
  return (
    <div className="w-full px-4 lg:px-8 py-10 flex justify-center">
      <section className="relative w-full max-w-[1440px] rounded-[32px] py-20 lg:py-24 min-h-[650px] flex items-center overflow-hidden bg-[#f05c3d]">
        {/* Background Image user will replace */}
        <img 
          src="/bharatimg.jpg" 
        alt="Map background" 
        className="absolute inset-0 w-full h-full object-cover z-0" 
      />

      {/* Main Container */}
      <div className="relative z-10 max-w-[1280px] mx-auto w-full px-6 lg:px-10 flex flex-col md:flex-row justify-between h-full pt-4">
        
        {/* Left Side: Text and Actions */}
        <div className="flex flex-col justify-start max-w-[500px]">
          <h4 className="text-[17px] font-bold text-white mb-5 tracking-wide">
            Beyond Boundaries
          </h4>
          <h2 className="text-[42px] font-bold text-white leading-[1.25] tracking-tight">
            Fostering Health<br/>
            With Cutting-Edge<br/>
            Medical Services<br/>
            Across 130+Countries
          </h2>
          
          <div className="mt-12 flex flex-col items-start gap-8">
            <button className="flex items-center gap-2.5 text-[14px] font-bold text-white group cursor-pointer">
              Know More
              <div className="w-6 h-6 rounded-full bg-white text-[#f05c3d] flex items-center justify-center transition-transform group-hover:scale-110 shadow-sm">
                <span className="mb-[2px] font-black text-lg">&rsaquo;</span>
              </div>
            </button>

            <button className="bg-white text-gray-800 font-bold text-[15px] px-8 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all hover:bg-gray-50">
              Enquire Now
            </button>
          </div>
        </div>

        {/* Right Side: Stats (aligned bottom right) */}
        <div className="flex items-end self-end pb-0 mt-20 md:mt-0">
          <div className="flex flex-wrap md:flex-nowrap gap-10 lg:gap-16 text-left">
            <div>
              <div className="text-[44px] font-bold text-white leading-none tracking-tight">20000+</div>
              <div className="text-[14px] text-white font-medium mt-3 leading-snug max-w-[180px]">
                Average International Patients Per Year
              </div>
            </div>
            
            <div>
              <div className="text-[44px] font-bold text-white leading-none tracking-tight">130+</div>
              <div className="text-[14px] text-white font-medium mt-3 leading-snug">
                Countries
              </div>
            </div>

            <div>
              <div className="text-[44px] font-bold text-white leading-none tracking-tight">06+</div>
              <div className="text-[14px] text-white font-medium mt-3 leading-snug">
                Hospitals in India
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
    </div>
  );
}
