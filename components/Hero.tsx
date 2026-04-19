"use client";
import React, { useRef } from "react";

export default function Hero() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      if (scrollRef.current.scrollLeft <= 10) {
        // If at the beginning, scroll seamlessly to the end
        scrollRef.current.scrollTo({ left: scrollRef.current.scrollWidth, behavior: 'smooth' });
      } else {
        scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
      }
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      const maxScroll = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
      if (scrollRef.current.scrollLeft >= maxScroll - 10) {
        // If at the end, scroll seamlessly back to the start
        scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
      }
    }
  };

  const quickLinks = [
    { label: "Book\nAppointment", icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z", isPrimary: true },
    { label: "Second\nOpinion", icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" },
    { label: "Get Health\nCheckup", icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" },
    { label: "Book A Virtual\nConsultation", icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" },
    { label: "Homecare", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
    { label: "Book a Test", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" },
    { label: "Medicine\nDelivery", icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" },
    { label: "Radiology", icon: "M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" },
    { label: "Book\nAppointment", icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z", isPrimary: true }
  ];

  return (
    <section className="relative w-full bg-white pb-16">
      <div className="relative w-full max-w-[1920px] mx-auto">
        
        {/* Full Width Hero Banner Image (Provided by you!) */}
        {/* Please make sure you save the second image you uploaded as 'hero-banner.png' inside your public/ folder */}
        <img 
          src="/hero-banner.webp" 
          alt="Medanta Hero Banner" 
          className="w-full h-auto object-cover min-h-[300px]"
          // Fallback style just in case the image isn't saved correctly yet
          style={{ backgroundColor: '#eeeeee' }} 
        />

        {/* Adjusted Search Bar Container */}
        {/* Placed flush against the ceiling (top-0) and decreased maximum width */}
        <div className="absolute top-[0px] left-1/2 -translate-x-1/2 w-[90%] max-w-[450px] z-50">
          
          {/* Outer white pill layer -> Square top, fully rounded bottom */}
          <div className="bg-[#ffffff] rounded-b-[35px] rounded-t-none p-[15px] ">
            
            {/* Inner orange search bar -> Fully rounded */}
            <div className="bg-[#ef533f] rounded-full pl-6 pr-1.5 py-1.5 flex items-center min-h-[48px] w-full">
               <input
                  type="text"
                  placeholder="Search for Doctors and Specialities"
                  className="bg-transparent outline-none text-white placeholder:text-white font-semibold text-[13px] flex-1 tracking-wide w-full rounded-sm"
               />
               <button className="bg-white rounded-full w-[36px] h-[36px] flex items-center justify-center text-[#ef533f] flex-shrink-0 cursor-pointer shadow-sm hover:scale-105 transition-transform ml-2">
                  <svg className="w-[16px] h-[16px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
               </button>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Floating Quick Actions Bar (Scrollable Carousel) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-40 w-[95%] max-w-[1300px] bg-white rounded-full shadow-[0_4px_25px_rgba(0,0,0,0.12)] border border-gray-100 flex items-center overflow-visible h-[80px]">
        
        {/* Left Scroll Circular Offset Arrow */}
        <button onClick={scrollLeft} className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-[0_2px_10px_rgba(0,0,0,0.1)] cursor-pointer absolute -left-6 z-50 text-gray-500 font-bold border border-gray-100 hover:text-[#ef533f] hover:scale-110 transition-transform focus:outline-none">
           <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/></svg>
        </button>

        {/* Scrollable Container */}
        <div ref={scrollRef} className="flex flex-1 h-full items-center overflow-x-auto scroll-smooth snap-x snap-mandatory rounded-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
           {quickLinks.map((item, i) => (
             <div key={i} className={`h-full flex-none w-[180px] xl:w-[220px] flex items-center justify-center gap-3 px-3 cursor-pointer transition-colors duration-200 border-r border-gray-100 group snap-start ${item.isPrimary ? 'bg-[#ef533f] text-white' : 'hover:bg-[#ef533f] text-gray-600 hover:text-white'}`}>
                <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-colors duration-200 ${item.isPrimary ? 'border-white/40 text-white' : 'border-gray-300 text-gray-400 group-hover:border-white/40 group-hover:text-white'}`}>
                  <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d={item.icon}/></svg>
                </div>
                <span className={`font-bold text-[13px] whitespace-pre-line leading-tight transition-colors duration-200 ${item.isPrimary ? 'text-white' : 'text-gray-700 group-hover:text-white'}`}>
                  {item.label}
                </span>
             </div>
           ))}
        </div>

        {/* Right Scroll Circular Offset Arrow */}
        <button onClick={scrollRight} className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-[0_2px_10px_rgba(0,0,0,0.1)] cursor-pointer absolute -right-6 z-50 text-gray-500 font-bold border border-gray-100 hover:text-[#ef533f] hover:scale-110 transition-transform focus:outline-none">
           <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
        </button>

      </div>
    </section>
  );
}
