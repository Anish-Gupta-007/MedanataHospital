"use client";

import React, { useState } from "react";

export default function ModelOfCareSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nodes = [
    {
      id: 0,
      title: "Exceptional\nclinical talent",
      textClass: "bottom-6 left-1/2 -translate-x-1/2 items-center text-center",
      dotPos: { left: 250, top: 0 },
      image: "/4th1.webp",
    },
    {
      id: 1,
      title: "World-class\ninfrastructure",
      textClass: "left-6 top-1/2 -translate-y-1/2 items-start text-left",
      dotPos: { left: 491, top: 185 },
      image: "/4th2.webp",
    },
    {
      id: 2,
      title: "Latest high-end\ntechnology",
      textClass: "left-6 top-[-14px] items-start text-left",
      dotPos: { left: 426, top: 426 },
      image: "/4th3.webp",
    },
    {
      id: 3,
      title: "Caring systems\nand processes",
      textClass: "right-6 top-[-14px] items-end text-right",
      dotPos: { left: 73, top: 426 },
      image: "/4th4.webp",
    },
    {
      id: 4,
      title: "Trust-based\ncompassionate care",
      textClass: "right-6 top-1/2 -translate-y-1/2 items-end text-right",
      dotPos: { left: 8, top: 185 },
      image: "/4th5.webp",
    },
  ];

  return (
    <section className="py-[72px] relative overflow-hidden bg-[#fafbfc]">
      <style>{`
        @keyframes popIn {
          0% { opacity: 0.2; transform: scale(0.9); filter: blur(4px); }
          50% { filter: blur(0px); }
          100% { opacity: 1; transform: scale(1); filter: blur(0px); }
        }
        .animate-pop { animation: popIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      `}</style>
      
      {/* Custom Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src="/image.png" 
          alt="Model of Care Background" 
          className="w-full h-full object-cover" 
        />
      </div>
      
      <div className="max-w-[1200px] mx-auto relative z-10 flex flex-col items-center">
        
        <h2 className="text-[38px] font-bold font-sans text-gray-800 mb-20 tracking-tight">Medanta Model of Care</h2>

        {/* 500x500 Diagram Container */}
        <div className="relative w-[500px] h-[500px] flex items-center justify-center mt-10 mb-16">
          
          {/* Sparse Dotted Ring via SVG */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 500 500">
             <circle cx="250" cy="250" r="249" fill="none" stroke="#9ca3af" strokeWidth="1" strokeDasharray="4 6" />
          </svg>

          {/* Central Cutout (The animated image) */}
          <div className="relative w-[400px] h-[400px] rounded-full overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] z-10 flex items-center justify-center">
             <img 
               key={activeIndex}
               src={nodes[activeIndex].image} 
               alt="Model of Care Area" 
               className="w-full h-full object-cover object-center animate-pop" 
             />
          </div>

          {/* Interactive Nodes */}
          {nodes.map((node, i) => (
            <div 
              key={node.id} 
              className="absolute group cursor-pointer z-30 flex flex-col"
              style={{ left: node.dotPos.left, top: node.dotPos.top }}
              onClick={() => setActiveIndex(i)}
            >
              {/* Dot */}
              <div className={`absolute w-[24px] h-[24px] rounded-full transition-colors duration-200 -ml-[12px] -mt-[12px] z-20 shadow-sm
                ${activeIndex === i ? 'bg-[#f05c3d] border border-[#f05c3d]' : 'bg-white border-2 border-gray-300 group-hover:bg-[#f05c3d] group-hover:border-[#f05c3d]'}`} 
              />
              
              {/* Text Area */}
              <div className={`absolute flex flex-col whitespace-nowrap z-10 ${node.textClass}`}>
                 <h3 className="text-[17px] font-bold text-gray-800 leading-tight">
                   {node.title.split('\n').map((line, j) => <React.Fragment key={j}>{line}<br/></React.Fragment>)}
                 </h3>
                 <div className="flex items-center gap-2 mt-2 text-[13px] font-bold text-gray-500">
                   Know More 
                   <span className="w-[20px] h-[20px] bg-[#f05c3d] rounded-full text-white flex items-center justify-center font-black pb-[1px] text-[15px]">
                     &rsaquo;
                   </span>
                 </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
