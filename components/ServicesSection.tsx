"use client";

import React, { useState } from "react";

const slides = [
  {
    left: {
      title: "Second Opinion",
      desc: "Confirm diagnosis and take informed decision about your treatment plan with some of India's top experts",
      img: "/secondoption.jpg",
      icon: <svg className="w-14 h-14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
    },
    centerTop: {
      title: "Buy Medicine",
      desc: "Recover without worrying about going out to buy reliable medication; get them delivered to your doorstep",
      icon: <svg className="w-12 h-12 rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
    },
    centerBottom: {
      title: "Labs and Diagnostics",
      desc: "Medanta Labs aims to take the benefit of its superior technology, infrastructure and expertise to all",
      icon: <svg className="w-14 h-14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
    },
    right: {
      title: "Health Check",
      desc: "Take charge of your well-being with a health experience customised for you",
      img: "/healthcheck.jpg",
      icon: <svg className="w-14 h-14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
    }
  },
  {
    left: {
      title: "Homecare Services",
      desc: "We continue to give you the best care possible, even after you reach home",
      img: "/homecare.jpg",
      icon: <svg className="w-14 h-14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
    },
    centerTop: {
      title: "e-ICU",
      desc: "Bringing expert intervention to critically unwell patients even in remotest parts of India",
      icon: <svg className="w-14 h-14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
    },
    centerBottom: {
      title: "TeleMedicine",
      desc: "Reach Medanta's experts no matter where you live",
      icon: <svg className="w-14 h-14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
    },
    right: {
      title: "Air Ambulance",
      desc: "We are equipped to treat and transport critically ill patients across the country",
      img: "/airambulance.jpg",
      icon: <svg className="w-14 h-14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
    }
  }
];

export default function ServicesSection() {
  const [slideIndex, setSlideIndex] = useState(0);

  const nextSlide = () => setSlideIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setSlideIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  const current = slides[slideIndex];

  return (
    <section className="py-20 px-6 lg:px-10 bg-[#f4f5f6]">
      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-slide { animation: fadeSlideIn 0.4s ease-out forwards; }
      `}</style>

      <h2 className="text-center text-[34px] font-bold text-gray-800 mb-14 tracking-tight">Services</h2>
      
      <div className="relative max-w-[1240px] mx-auto flex items-center">
        
        {/* Left Arrow */}
        <button 
          onClick={prevSlide}
          className="absolute -left-6 z-20 w-12 h-12 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center text-gray-500 hover:text-[#f05c3d] hover:scale-105 transition-all outline-none"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
        </button>

        {/* Carousel Container */}
        <div key={slideIndex} className="animate-fade-slide grid grid-cols-1 md:grid-cols-3 gap-6 w-full auto-rows-fr">
          
          {/* Left Column (Tall Card) */}
          <div className="bg-white rounded-3xl shadow-[0_4px_25px_rgba(0,0,0,0.06)] hover:shadow-xl transition-shadow flex flex-col overflow-hidden relative">
            <img src={current.left.img} alt={current.left.title} className="h-[240px] w-full object-cover bg-gray-200" />
            <div className="p-8 flex flex-col flex-1 relative bg-white">
              <h3 className="text-[22px] font-bold text-gray-800 mb-3">{current.left.title}</h3>
              <p className="text-[15px] text-gray-500 leading-relaxed mb-8 pr-4">{current.left.desc}</p>
              <div className="mt-auto flex items-center">
                <span className="text-[14px] font-bold text-gray-700 flex items-center gap-2 cursor-pointer hover:text-[#f05c3d] transition-colors">
                  Know More 
                  <div className="w-6 h-6 rounded-full bg-[#f05c3d] flex items-center justify-center text-white pb-[1px] text-[15px]">&rsaquo;</div>
                </span>
              </div>
              {/* Outline SVG Icon */}
              <div className="absolute bottom-6 right-6 text-gray-800/10">
                {current.left.icon}
              </div>
            </div>
          </div>

          {/* Center Column (Two Stacked Cards) */}
          <div className="flex flex-col gap-6">
            <div className="bg-white rounded-3xl shadow-[0_4px_25px_rgba(0,0,0,0.06)] hover:shadow-xl transition-shadow p-8 flex flex-col flex-1 relative">
               <h3 className="text-[22px] font-bold text-gray-800 mb-3">{current.centerTop.title}</h3>
               <p className="text-[15px] text-gray-500 leading-relaxed mb-8 pr-8">{current.centerTop.desc}</p>
               <div className="mt-auto flex items-center">
                <span className="text-[14px] font-bold text-gray-700 flex items-center gap-2 cursor-pointer hover:text-[#f05c3d] transition-colors">
                  Know More 
                  <div className="w-6 h-6 rounded-full bg-[#f05c3d] flex items-center justify-center text-white pb-[1px] text-[15px]">&rsaquo;</div>
                </span>
               </div>
               {/* Outline SVG Icon */}
               <div className="absolute bottom-6 right-6 text-gray-800/10">
                 {current.centerTop.icon}
               </div>
            </div>
            <div className="bg-white rounded-3xl shadow-[0_4px_25px_rgba(0,0,0,0.06)] hover:shadow-xl transition-shadow p-8 flex flex-col flex-1 relative">
               <h3 className="text-[22px] font-bold text-gray-800 mb-3">{current.centerBottom.title}</h3>
               <p className="text-[15px] text-gray-500 leading-relaxed mb-8 pr-8">{current.centerBottom.desc}</p>
               <div className="mt-auto flex items-center">
                <span className="text-[14px] font-bold text-gray-700 flex items-center gap-2 cursor-pointer hover:text-[#f05c3d] transition-colors">
                  Know More 
                  <div className="w-6 h-6 rounded-full bg-[#f05c3d] flex items-center justify-center text-white pb-[1px] text-[15px]">&rsaquo;</div>
                </span>
               </div>
               {/* Outline SVG Icon */}
               <div className="absolute bottom-6 right-6 text-gray-800/10">
                 {current.centerBottom.icon}
               </div>
            </div>
          </div>

          {/* Right Column (Tall Card) */}
          <div className="bg-white rounded-3xl shadow-[0_4px_25px_rgba(0,0,0,0.06)] hover:shadow-xl transition-shadow flex flex-col overflow-hidden relative">
            <img src={current.right.img} alt={current.right.title} className="h-[240px] w-full object-cover bg-gray-200" />
            <div className="p-8 flex flex-col flex-1 relative bg-white">
              <h3 className="text-[22px] font-bold text-gray-800 mb-3">{current.right.title}</h3>
              <p className="text-[15px] text-gray-500 leading-relaxed mb-8 pr-4">{current.right.desc}</p>
              <div className="mt-auto flex items-center">
                <span className="text-[14px] font-bold text-gray-700 flex items-center gap-2 cursor-pointer hover:text-[#f05c3d] transition-colors">
                  Know More 
                  <div className="w-6 h-6 rounded-full bg-[#f05c3d] flex items-center justify-center text-white pb-[1px] text-[15px]">&rsaquo;</div>
                </span>
              </div>
              {/* Outline SVG Icon */}
              <div className="absolute bottom-6 right-6 text-gray-800/10">
                {current.right.icon}
              </div>
            </div>
          </div>

        </div>

        {/* Right Arrow */}
        <button 
          onClick={nextSlide}
          className="absolute -right-6 z-20 w-12 h-12 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center text-gray-500 hover:text-[#f05c3d] hover:scale-105 transition-all outline-none"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
        </button>

      </div>
    </section>
  );
}
