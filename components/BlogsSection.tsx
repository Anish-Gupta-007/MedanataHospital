"use client";

import React from "react";

export default function BlogsSection() {
  type Blog = {
    title: string;
    date: string;
    img: string;
    imgText?: string;
  };

  const largeBlogs: Blog[] = [
    {
      title: "Tummy Tuck vs Liposuction:\nRecovery Time, Results, and Suita...",
      date: "Mar 17, 2026",
      img: "/blog1.webp",
      // imgText: "Tummy Tuck vs Liposuction: Recovery Time,\nResults, and Suitability"
    },
    {
      title: "Before Your Child Has a Bone\nMarrow Transplant: What Parents...",
      date: "Feb 18, 2026",
      img: "/blog2.webp",
      // imgText: "Before Your Child Has a Bone Marrow Transplant:\nWhat Parents Need to Know"
    }
  ];

  const smallBlogs: Blog[] = [
    {
      title: "4D-Phaco Cataract Surgery in\nIndia: Technology, Results and...",
      date: "Feb 03, 2026",
      img: "/blog3.jpeg",
      imgText: ""
    },
    {
      title: "Liver Detox: Best Foods and\nFruits for Natural Liver Cleansi...",
      date: "Jan 27, 2026",
      img: "/blog5.webp",
      // imgText: "Liver Detox: Best Foods and Fruits for Natural Liver\nCleansing"
    },
    {
      title: "White Spots on Skin: Causes,\nSymptoms, and Treatments",
      date: "Jan 22, 2026",
      img: "/blog6.webp",
      // imgText: "White Spots on Skin: Causes, Symptoms, and\nTreatments"
    }
  ];

  const MedantaBadge = () => (
    <div className="absolute top-0 right-0 bg-[#f05c3d] text-white px-2.5 py-1 rounded-bl-[12px] flex items-center z-10 shadow-sm">
      <svg className="w-[18px] h-[18px] mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
         <path d="M12 4v16M4 12h16" stroke="white" strokeLinecap="round" strokeWidth="2.5" />
      </svg>
      <span className="font-bold text-[12px] tracking-wide lowercase mt-px leading-none">medanta</span>
    </div>
  );

  return (
    <section className="relative w-full py-20 bg-[#f6f7f8]">
      <div className="max-w-[1280px] mx-auto w-full px-6 lg:px-10">
        
        {/* Header section */}
        <div className="relative flex justify-center items-center mb-10 w-full h-12">
          <h2 className="text-[34px] font-bold text-gray-800 tracking-tight absolute inset-0 text-center pointer-events-none">
            Latest Blogs
          </h2>
          <a href="#" className="absolute right-0 flex items-center gap-2.5 text-[15px] font-bold text-gray-600 hover:text-[#f05c3d] group transition-colors">
            View All Blogs
            <div className="w-[22px] h-[22px] rounded-full bg-[#f05c3d] text-white flex items-center justify-center font-black pb-[1px] group-hover:scale-110 shadow-sm transition-transform">
              <span className="text-[14px] leading-none mb-px">&rsaquo;</span>
            </div>
          </a>
        </div>

        {/* CSS Grid for asymmetric layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Large Cards x 2 */}
          {largeBlogs.map((blog, idx) => (
            <div key={idx} className="bg-white rounded-[24px] overflow-hidden flex flex-col shadow-[0_4px_25px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] transition-shadow h-full w-full max-h-[460px] border border-transparent hover:border-gray-100">
              {/* Image Section */}
              <div className="relative h-[250px] w-full bg-gray-200 overflow-hidden group">
                <img src={blog.img} alt="blog" className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700" />
                <MedantaBadge />
                {/* Text Overlay on image */}
                <div className="absolute bottom-0 left-0 w-full bg-white/85 backdrop-blur-[2px] py-3.5 px-4 flex items-center justify-center text-center border-t border-white/50">
                  <p className="text-[#f05c3d] text-[13px] font-bold leading-[1.3] whitespace-pre-wrap">{blog.imgText}</p>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-7 flex flex-col flex-1 justify-between bg-white">
                <h3 className="text-[19px] font-bold text-gray-800 leading-[1.4] mt-2 whitespace-pre-wrap tracking-wide">{blog.title}</h3>
                
                <div className="flex justify-between items-center mt-6">
                  <p className="text-gray-400 text-[14px] font-medium">{blog.date}</p>
                  <button className="flex items-center gap-2 text-[14px] font-bold text-gray-800 group hover:text-[#f05c3d] transition-colors">
                    Read More 
                    <div className="w-[22px] h-[22px] rounded-full bg-[#f05c3d] text-white flex justify-center items-center group-hover:bg-[#d6412f]">
                       <span className="font-bold text-sm leading-none pb-[2px]">&rsaquo;</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Column 3: Stacked Small Cards */}
          <div className="flex flex-col gap-6">
            {smallBlogs.map((blog, idx) => (
              <div key={idx} className="bg-white rounded-[20px] overflow-hidden flex shadow-[0_4px_25px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] transition-shadow h-[138px] w-full border border-transparent hover:border-gray-100">
                {/* Image Section Left */}
                <div className="relative w-[140px] h-full flex-shrink-0 bg-gray-200 overflow-hidden group">
                  <img src={blog.img} alt="blog" className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-700" />
                  
                  {/* Smaller Badge */}
                  <div className="absolute top-0 right-0 bg-[#f05c3d] text-white px-1.5 py-0.5 rounded-bl-[10px] flex items-center z-10 shadow-sm scale-90 origin-top-right">
                    <svg className="w-3 h-3 mr-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                       <path d="M12 4v16M4 12h16" stroke="white" strokeLinecap="round" strokeWidth="2.5" />
                    </svg>
                    <span className="font-bold text-[9px] tracking-wide lowercase mt-px hidden lg:inline-block">medanta</span>
                  </div>
                  
                  {/* Miniature Image Overlay */}
                  {blog.imgText && (
                    <div className="absolute bottom-0 left-0 w-full bg-white/90 backdrop-blur-sm py-1.5 px-2 text-center border-t border-white/50">
                      <p className="text-[#f05c3d] text-[8px] font-bold leading-[1.2] whitespace-pre-wrap">{blog.imgText}</p>
                    </div>
                  )}
                </div>

                {/* Content Section Right */}
                <div className="p-4 pl-5 flex flex-col justify-between flex-1 bg-white">
                  <h3 className="text-[15px] font-bold text-gray-800 leading-[1.3] whitespace-pre-wrap mt-1 tracking-tight">{blog.title}</h3>
                  <div className="flex justify-between items-center mt-2 pb-1">
                    <p className="text-gray-400 text-[12px] font-medium">{blog.date}</p>
                    <button className="flex items-center gap-1.5 text-[13px] font-bold text-gray-800 group hover:text-[#f05c3d] transition-colors">
                      Read More 
                      <div className="w-[18px] h-[18px] rounded-full bg-[#f05c3d] text-white flex justify-center items-center shadow-sm">
                         <span className="font-bold text-xs leading-none pb-[2px]">&rsaquo;</span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
