"use client";

import React, { useState } from "react";

export default function StoriesSection() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const getEmbedUrl = (url: string) => {
    if (!url) return "";
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) 
      ? `https://www.youtube.com/embed/${match[2]}?autoplay=1` 
      : url;
  };

  const Card = ({ title, sub, img, hClass, videoUrl }: { title: string, sub: string, img: string, hClass: string, videoUrl: string }) => (
    <div 
      onClick={() => setActiveVideo(getEmbedUrl(videoUrl))}
      className={`relative rounded-[22px] overflow-hidden shadow-lg group cursor-pointer w-full bg-gray-200 ${hClass}`}
    >
      <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700" />
      
      {/* Dark gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/90 via-[#111111]/10 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
      
      {/* Play Button */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full border-[1.5px] border-white/80 flex items-center justify-center group-hover:bg-white/20 transition-colors backdrop-blur-[2px]">
         <svg className="w-[14px] h-[14px] text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
      </div>

      {/* Text Content */}
      <div className="absolute bottom-5 left-0 w-full px-3 flex flex-col items-center justify-end z-10">
        <h3 className="text-white font-bold text-[15px] leading-[1.3] text-center whitespace-pre-wrap drop-shadow-md tracking-tight">
          {title}
        </h3>
        <p className="text-white/80 text-[11px] font-medium mt-1.5 drop-shadow-sm tracking-wide">
          {sub}
        </p>
      </div>
    </div>
  );

  return (
    <section className="py-24 px-6 lg:px-10 bg-white relative">
      <div className="max-w-[1240px] mx-auto">
        <h2 className="text-center text-[34px] font-bold text-gray-800 mb-14 tracking-tight">Patient Stories</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-5 items-start">
          
          {/* Column 1 */}
          <div className="flex flex-col mt-[160px]">
            <Card 
              title={"Mauritian Patient\nTreated For\nEsophageal Cancer"}
              sub="Mr Fazl Hosany" 
              img="/pateint1.webp" 
              hClass="h-[240px]" 
              videoUrl="https://youtu.be/arFxSlbt9V8?si=nCsJa7SPA9FVb80A"
            />
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-5 mt-[20px]">
            <Card 
              title="Liver Failure" 
              sub="Baby Bhavika" 
              img="/pateint2.webp" 
              hClass="h-[200px]" 
              videoUrl="https://www.youtube.com/watch?v=cOfR9N-mcY0"
            />
            <Card 
              title="Jaw Cancer" 
              sub="Dr. Abhilasha Agarwal" 
              img="/pateint3.webp" 
              hClass="h-[240px]" 
              videoUrl="https://www.youtube.com/watch?v=tnlEB7AfJQU"
            />
          </div>

          {/* Column 3 */}
          <div className="flex flex-col mt-[50px]">
            <Card 
              title="Pre-term Babies" 
              sub="Ms Sakshi" 
              img="/pateint4.webp" 
              hClass="h-[460px]" 
              videoUrl="https://www.youtube.com/watch?v=Izcsx6gtGsI"
            />
          </div>

          {/* Column 4 */}
          <div className="flex flex-col gap-5 mt-0">
            <Card 
              title="Neurosurgical Treatment" 
              sub="Mr. Devender Jeet Singh" 
              img="/pateint5.webp" 
              hClass="h-[220px]" 
              videoUrl="https://www.youtube.com/watch?v=Q4KOz-Zmh7g"
            />
            <Card 
              title="Bone Marrow Transplant" 
              sub="Patient Father Mr Haider" 
              img="/pateint6.webp" 
              hClass="h-[240px]" 
              videoUrl="https://www.youtube.com/watch?v=zDxSL37jy0U"
            />
          </div>

          {/* Column 5 */}
          <div className="flex flex-col mt-[140px]">
            <Card 
              title={"Mother Saves\nDaughter By Donating\nA Kidney"}
              sub="Ms Paluk Sunger" 
              img="/pateint7.webp" 
              hClass="h-[260px]" 
              videoUrl="https://www.youtube.com/watch?v=M0jn57I0bwo"
            />
          </div>

        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-20">
          <a href="#" className="flex items-center gap-2.5 text-[14px] font-bold text-gray-600 hover:text-[#f05c3d] transition-colors group">
            View All Patients Stories
            <div className="w-[22px] h-[22px] rounded-full bg-[#f05c3d] text-white flex items-center justify-center transition-transform group-hover:scale-110 shadow-sm">
              <span className="mb-[1px] font-black text-[15px]">&rsaquo;</span>
            </div>
          </a>
        </div>
      </div>

      {/* Video Modal Background overlay */}
      {activeVideo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fadeIn" onClick={() => setActiveVideo(null)}>
          <div className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl scale-100 animate-popIn" onClick={e => e.stopPropagation()}>
            <button 
              onClick={() => setActiveVideo(null)}
              className="absolute top-4 right-4 z-50 w-10 h-10 bg-black/50 hover:bg-black/80 text-white rounded-full flex items-center justify-center transition-colors"
              aria-label="Close video"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <iframe 
              src={activeVideo} 
              className="w-full h-full border-none" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
      
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes popIn {
          from { opacity: 0; transform: scale(0.95) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 0.2s ease-out forwards; }
        .animate-popIn { animation: popIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      `}</style>
    </section>
  );
}
