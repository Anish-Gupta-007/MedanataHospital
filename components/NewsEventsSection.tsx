"use client";

import React from "react";

export default function NewsEventsSection() {
  const featuredNews = {
    date: "Apr 04, 2026",
    title: "Medanta's Brain Pacemaker Surgery Restores Hope, Offers Second Chance at Life to J&K Patients",
    img: "/news-main.jpeg"
  };

  const newsCol1 = [
    {
      date: "Mar 07, 2026",
      title: "Medanta Drives Jabalpur Outreach to Improve Thalassemia and Aplastic Anemia Care",
      img: "/news-1.jpeg"
    },
    {
      date: "Feb 26, 2026",
      title: "Medanta ranked India's best hospital by Newsweek",
      img: "/news-2.jpg"
    },
    {
      date: "Feb 20, 2026",
      title: "Medanta Enhances India's Neurological Care Landscape with Advanced 'Brain Pacemaker' Surgery",
      img: "/news-3.jpeg"
    }
  ];

  const newsCol2 = [
    {
      date: "Feb 07, 2026",
      title: "Advanced Radiation Therapy at Medanta to Give New Hope to Cancer Patients in Haryana",
      img: "/news-4.jpeg"
    },
    {
      date: "Feb 06, 2026",
      title: "Medanta Launches Dedicated 24x7 Chest Trauma Support Service to Strengthen Emergency Care in North India",
      img: "/news-5.jpeg"
    },
    {
      date: "Feb 04, 2026",
      title: "Medanta Mediclinic Defence Colony Marks World Cancer Day with Purple Illumination and Awareness Activities",
      img: "/news-6.jpeg"
    }
  ];

  return (
    <section className="relative w-full py-20 bg-[#f6f7f8]">
      <div className="max-w-[1280px] mx-auto w-full px-6 lg:px-10">
        
        {/* Header section */}
        <h2 className="text-center text-[34px] font-bold text-gray-800 mb-14 tracking-tight">
          News & Events
        </h2>

        {/* 3 Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Column 1: Large Featured Card */}
          <div className="bg-white rounded-[24px] overflow-hidden shadow-[0_4px_25px_rgba(0,0,0,0.03)] h-full flex flex-col border border-gray-100/50">
            {/* Featured Image */}
            <div className="w-full h-[260px] bg-gray-200">
              <img src={featuredNews.img} alt="Featured News" className="w-full h-full object-cover" />
            </div>
            
            {/* Featured Content */}
            <div className="p-7 flex flex-col flex-1 bg-white">
              <p className="text-gray-500 text-[14px] font-medium tracking-wide">{featuredNews.date}</p>
              <h3 className="text-[17px] font-bold text-gray-800 leading-[1.4] mt-4 tracking-tight flex-1 whitespace-pre-wrap">
                {featuredNews.title}
              </h3>
              
              <div className="mt-8">
                <button className="flex items-center gap-2 text-[14px] font-bold text-gray-800 group hover:text-[#f05c3d] transition-colors inline-flex">
                  Read Post 
                  <div className="w-[22px] h-[22px] rounded-full bg-[#f05c3d] text-white flex justify-center items-center shadow-sm">
                    <span className="font-bold text-sm leading-none pb-[2px]">&rsaquo;</span>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Column 2: Stacked Small Items */}
          <div className="flex flex-col gap-10">
            {newsCol1.map((news, idx) => (
              <div key={idx} className="flex gap-5 items-start px-2 group">
                {/* Image Variable Height Container */}
                <div className="w-[125px] flex-shrink-0 rounded-[14px] overflow-hidden shadow-sm bg-gray-200 border border-gray-100">
                  <img src={news.img} alt="news" className="w-full h-auto object-cover group-hover:scale-[1.03] transition-transform duration-500" />
                </div>
                
                {/* Content */}
                <div className="flex flex-col pt-1 flex-1">
                  <p className="text-gray-500 text-[13px] font-medium mb-3 tracking-wide">{news.date}</p>
                  <h4 className="text-[14.5px] font-bold text-gray-800 leading-[1.3] mb-5 tracking-tight pr-4">
                    {news.title}
                  </h4>
                  
                  <div className="mt-auto">
                    <button className="flex items-center gap-1.5 text-[13px] font-bold text-gray-800 group-hover:text-[#f05c3d] transition-colors inline-flex">
                      Read Post 
                      <div className="w-[18px] h-[18px] rounded-full bg-[#f05c3d] text-white flex justify-center items-center shadow-sm">
                        <span className="font-bold text-xs leading-none pb-[2px]">&rsaquo;</span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Column 3: Stacked Small Items */}
          <div className="flex flex-col gap-10">
            {newsCol2.map((news, idx) => (
              <div key={idx} className="flex gap-5 items-start px-2 group">
                {/* Image Variable Height Container */}
                <div className="w-[125px] flex-shrink-0 rounded-[14px] overflow-hidden shadow-sm bg-gray-200 border border-gray-100">
                  <img src={news.img} alt="news" className="w-full h-auto object-cover group-hover:scale-[1.03] transition-transform duration-500" />
                </div>
                
                {/* Content */}
                <div className="flex flex-col pt-1 flex-1">
                  <p className="text-gray-500 text-[13px] font-medium mb-3 tracking-wide">{news.date}</p>
                  <h4 className="text-[14.5px] font-bold text-gray-800 leading-[1.3] mb-5 tracking-tight pr-4">
                    {news.title}
                  </h4>
                  
                  <div className="mt-auto">
                    <button className="flex items-center gap-1.5 text-[13px] font-bold text-gray-800 group-hover:text-[#f05c3d] transition-colors inline-flex">
                      Read Post 
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
