"use client";

import React, { useState } from "react";

export default function UpdatesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = [
    {
      title: "Triple Swap Liver Transplant",
      desc: "Behind Closed Doors is a window seat view of surgical miracles performed by our experts",
      icon: (
        <svg className="w-16 h-16" fill="none" viewBox="0 0 64 64" stroke="#4b5563" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M32 16C24 10 12 14 12 28c0 10 12 18 20 28 8-10 20-18 20-28 0-14-12-18-20-12z" />
          <path fill="#f05c3d" stroke="none" d="M32 44c-4-4-10-8-10-16 0-3 1-5 3-7 4 5 10 7 14 3-2 10-4 16-7 20z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M32 16v20m0 0l-6-6m6 6l6-6" />
        </svg>
      ),
    },
    {
      title: "Lung Transplant",
      desc: "We get a glimpse into the fast-paced happenings leading to a lung transplant",
      icon: (
        <svg className="w-16 h-16" fill="none" viewBox="0 0 64 64" stroke="#4b5563" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M22 20c-6 0-10 6-10 16 0 12 6 20 10 20 4 0 6-8 6-20 0-10-2-16-6-16zm20 0c6 0 10 6 10 16 0 12-6 20-10 20-4 0-6-8-6-20 0-10 2-16 6-16z" />
          <path fill="#f05c3d" stroke="none" d="M22 20c-4 0-8 4-8 12 0 6 4 10 8 10 3 0 4-4 4-10 0-6-1-12-4-12z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M32 8v16m-6-6h12M24 36l4 4M40 36l-4 4" />
        </svg>
      ),
    },
    {
      title: "New Clinic Launched",
      desc: "60-minute sample collection, medicine delivery, doctor consult now at DLF Cyber Park, Gurugram",
      icon: (
        <svg className="w-16 h-16" fill="none" viewBox="0 0 64 64" stroke="#4b5563" strokeWidth={1.5}>
          <rect x="20" y="12" width="24" height="32" rx="4" />
          <circle cx="32" cy="24" r="5" />
          <path strokeLinecap="round" d="M26 36c0-4 4-6 6-6s6 2 6 6" />
          <path fill="#f05c3d" stroke="none" d="M31 16h2v4h-2zM29 18h6v2h-6z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M32 44v8m-6 0h12" />
        </svg>
      ),
    },
    {
      title: "Elder Care Program",
      desc: "Medanta's Elder Care Programme gives your loved ones an empowering plan for their golden years.",
      icon: (
        <svg className="w-16 h-16" fill="none" viewBox="0 0 64 64" stroke="#4b5563" strokeWidth={1.5}>
          <circle cx="32" cy="18" r="5" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M26 30c0-6 4-10 8-10s8 4 6 12l-4 16" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M26 30l-6 10m12-8l8 6" />
          <path stroke="#f05c3d" strokeWidth={2} strokeLinecap="round" d="M42 36v16" />
        </svg>
      ),
    },
    {
      title: "e-ICU",
      desc: "Bringing expert intervention to critically unwell patients even in the remotest parts of India",
      icon: (
        <svg className="w-16 h-16" fill="none" viewBox="0 0 64 64" stroke="#4b5563" strokeWidth={1.5}>
          <rect x="16" y="28" width="32" height="12" rx="2" />
          <circle cx="32" cy="22" r="4" />
          <path strokeLinecap="round" d="M26 28c0-3 3-5 6-5s6 2 6 5" />
          <path strokeLinecap="round" d="M16 40v8m32-8v8m-36-4h40" />
          <rect x="42" y="10" width="8" height="10" rx="1" stroke="#f05c3d" />
          <path strokeLinecap="round" d="M46 20v8" />
        </svg>
      ),
    }
  ];

  const maxIndex = items.length - 3; // For 3 items visible at a time

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section className="relative w-full pb-24 bg-[#fafbfc]">
      {/* Background Image Container */}
      <div className="absolute top-0 left-0 w-full h-[400px] z-0 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2000" 
          alt="Updates Background" 
          className="w-full h-full object-cover object-center opacity-90"
        />
        {/* Subtle overlay to ensure text readability */}
        <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 max-w-[1240px] mx-auto w-full px-6 lg:px-10 pt-20">
        <h2 className="text-center text-[34px] font-bold text-gray-800 mb-14 tracking-tight">Updates</h2>
        
        {/* Carousel Wrapper */}
        <div className="relative w-full">
          
          {/* Left Arrow */}
          <button 
            onClick={prevSlide}
            className="absolute -left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center text-gray-500 hover:text-[#f05c3d] transition-all hover:scale-105"
          >
            <span className="text-2xl mb-1">&lsaquo;</span>
          </button>

          {/* White Card Container */}
          <div className="w-full bg-white rounded-[24px] shadow-[0_15px_40px_rgba(0,0,0,0.06)] relative overflow-hidden">
            
            {/* Absolute Vertical Separator Lines */}
            <div className="absolute top-12 bottom-12 left-1/3 w-[1px] bg-gray-100 z-10 pointer-events-none hidden md:block"></div>
            <div className="absolute top-12 bottom-12 left-2/3 w-[1px] bg-gray-100 z-10 pointer-events-none hidden md:block"></div>

            {/* Sliding Track */}
            <div className="overflow-hidden w-full">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
              >
                {items.map((item, idx) => (
                  <div key={idx} className="w-full md:w-1/3 flex-shrink-0 px-8 py-16 flex flex-col items-center justify-between text-center min-h-[360px]">
                    
                    <div className="flex flex-col items-center">
                      {/* Icon */}
                      <div className="mb-8">
                        {item.icon}
                      </div>

                      {/* Title */}
                      <h3 className="text-[20px] font-bold text-gray-800 mb-3 tracking-tight">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-[14px] text-gray-500 leading-relaxed px-2">
                        {item.desc}
                      </p>
                    </div>

                    {/* Know More */}
                    <div className="mt-8 flex items-center">
                      <span className="text-[13px] font-bold text-gray-700 flex items-center gap-2 cursor-pointer hover:text-[#f05c3d] transition-colors group">
                        Know More 
                        <div className="w-5 h-5 rounded-full bg-[#f05c3d] flex items-center justify-center text-white pb-[1px] text-[13px] group-hover:bg-[#d6412f] transition-colors">
                          &rsaquo;
                        </div>
                      </span>
                    </div>

                  </div>
                ))}
              </div>
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
