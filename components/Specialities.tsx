"use client";
import { useState } from "react";

const specialities = [
  { 
    icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>,
    label: "Cardiac Care" 
  },
  { 
    icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" /></svg>,
    label: "Cancer Care" 
  },
  { 
    icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>,
    label: "Neurosciences" 
  },
  { 
    icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>,
    label: "Gastrosciences" 
  },
  { 
    icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>,
    label: "Orthopaedics" 
  },
  { 
    icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4zM15 7a2 2 0 100-4 2 2 0 000 4z" /></svg>,
    label: "Renal Care" 
  },
];

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function Specialities() {
  const [activeTab, setActiveTab] = useState("Ailments");

  return (
    <section className="bg-white py-16 px-6 lg:px-10 border-b border-gray-100/50">
      <div className="max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-[280px_1.5fr_1fr] gap-12">
        {/* Left */}
        <div className="pt-2">
          <h3 className="text-[#646464] text-[18px] font-bold mb-4">Specialities</h3>
          <h2 className="text-[34px] text-gray-600 font-sans tracking-tight leading-[1.2]">
            An Ecosystem for<br />Clinical Excellence
          </h2>
        </div>

        {/* Middle - List */}
        <div className="pr-10 border-r border-gray-100">
          <ul className="flex flex-col border-t border-gray-50">
            {specialities.map((s, i) => {
              const active = i === 0;
              return (
                <li key={i}
                  className={`flex items-center justify-between py-5 border-b border-gray-200 cursor-pointer transition-colors group
                    ${active ? "text-[#f05c3d]" : "text-gray-600 hover:text-[#f05c3d]"}`}>
                  <span className="flex items-center gap-4">
                    <span className={`text-2xl ${active ? "text-[#f05c3d]" : "text-gray-400 group-hover:text-[#f05c3d]"}`}>
                       {s.icon}
                    </span>
                    <span className={`font-bold text-[15px] ${active ? "text-[#f05c3d]" : "text-gray-700 group-hover:text-[#f05c3d]"}`}>{s.label}</span>
                  </span>
                  <span className="text-[#f05c3d] font-bold text-lg">&rsaquo;</span>
                </li>
              );
            })}
          </ul>
          <div className="mt-8 flex justify-start">
            <button className="flex items-center gap-2 text-gray-700 hover:text-[#f05c3d] font-semibold text-[13px] transition-colors">
              View All Specialities
              <span className="w-5 h-5 bg-[#f05c3d] rounded-full flex items-center justify-center text-white font-bold pb-0.5">&rsaquo;</span>
            </button>
          </div>
        </div>

        {/* Right - Search By */}
        <div className="pl-6">
          <h3 className="text-[17px] font-bold text-gray-700 mb-6 font-sans">Search By</h3>
          <div className="flex gap-3 mb-8 flex-wrap">
            {["Ailments", "Treatments", "Technologies"].map((tab) => (
              <button key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-1.5 rounded-full text-[13px] font-medium border transition-all
                  ${activeTab === tab
                    ? "bg-[#f05c3d] text-white border-[#f05c3d]"
                    : "bg-white text-gray-500 border-gray-300 hover:border-[#f05c3d] hover:text-[#f05c3d]"}`}>
                {tab}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-[repeat(6,minmax(0,1fr))] gap-y-3 gap-x-2 max-w-[320px]">
             {/* Creating the Exact Grid from Image 2 */}
            {alphabet.map((letter) => (
              <button key={letter}
                className="w-10 h-10 rounded-full border border-transparent shadow-[0_2px_8px_rgba(0,0,0,0.06)] flex items-center justify-center text-[13px] font-bold text-gray-700 bg-white hover:bg-[#f05c3d] hover:text-white hover:shadow-md transition-all">
                {letter}
              </button>
            ))}
          </div>
          <div className="mt-10 flex justify-start">
            <button className="flex items-center gap-2 text-gray-700 hover:text-[#f05c3d] font-semibold text-[13px] transition-colors">
              View All Ailments
              <span className="w-5 h-5 bg-[#f05c3d] rounded-full flex items-center justify-center text-white pb-0.5">&rsaquo;</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
