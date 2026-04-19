"use client";

import React, { useState, useRef, useEffect } from "react";

export default function DoctorsSection() {
  const [openDropdown, setOpenDropdown] = useState<"location" | "speciality" | null>(null);
  const [location, setLocation] = useState("Gurugram");
  const [speciality, setSpeciality] = useState("All Specialities");

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const locations = ["Gurugram", "Lucknow", "Patna", "Indore", "Ranchi", "Noida"];
  const specialities = [
    "All Specialities",
    "Cardiac Care",
    "Cancer Care",
    "Neurosciences",
    "Gastrosciences",
    "Orthopaedics",
    "Renal Care"
  ];

  return (
    <section className="pt-20 bg-white text-center pb-10">
      <h2 className="text-[36px] font-bold font-sans text-[#333333] mb-6 tracking-tight">
        Doctors, Pioneers, Life Savers
      </h2>
      <p className="max-w-[1000px] mx-auto text-[15px] text-[#666666] leading-[1.8] mb-12 px-4">
        Our superspecialist doctors provide the highest quality of care through a team-based, doctor-led model.
        Trained at some of the world's most renowned institutions, our highly experienced doctors are distinguished
        experts in their respective specialities. Our doctors work full-time and exclusively across Medanta hospitals.
        In addition to offering superspecialised care in their own field, the Medanta organisational structure enables
        every doctor to help create a culture of collaboration and multispecialty care integration.
      </p>

      {/* Dropdown Filters */}
      <div ref={dropdownRef} className="flex items-center justify-center gap-4 mb-8 flex-wrap relative z-30">
        
        {/* Location Dropdown */}
        <div className="relative w-[200px]">
          <button
            onClick={() => setOpenDropdown(openDropdown === "location" ? null : "location")}
            className={`w-full px-5 py-3.5 flex items-center justify-between font-bold text-[15px] transition-all bg-[#ef533f] text-white shadow-sm
              ${openDropdown === "location" ? "rounded-t-[20px] rounded-b-none" : "rounded-[25px] hover:bg-[#d94835]"}`}
          >
            <span>{location}</span>
            <svg
              className={`w-4 h-4 transition-transform ${openDropdown === "location" ? "rotate-180" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={3}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Location Menu */}
          {openDropdown === "location" && (
            <div className="absolute top-full left-0 w-full bg-white border border-t-0 border-gray-200 shadow-[0_10px_20px_rgba(0,0,0,0.1)] rounded-b-[20px] overflow-hidden z-40 text-left">
              <ul className="max-h-[300px] overflow-y-auto [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-full">
                {locations.map((loc, idx) => (
                  <li
                    key={loc}
                    onClick={() => {
                      setLocation(loc);
                      setOpenDropdown(null);
                    }}
                    className={`px-5 py-3.5 text-[14px] cursor-pointer font-medium text-gray-700 hover:bg-gray-50 border-gray-100 ${idx !== locations.length - 1 ? 'border-b' : ''} ${location === loc ? 'font-bold text-[#ef533f]' : ''}`}
                  >
                    {loc}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Speciality Dropdown */}
        <div className="relative w-[240px]">
          <button
            onClick={() => setOpenDropdown(openDropdown === "speciality" ? null : "speciality")}
            className={`w-full px-5 py-3.5 flex items-center justify-between font-bold text-[15px] transition-all bg-white text-gray-800 shadow-sm
              ${openDropdown === "speciality" 
                ? "rounded-t-[20px] rounded-b-none border border-gray-300 border-b-white" 
                : "rounded-[25px] border border-black hover:border-[#ef533f]"}`}
          >
            <span>{speciality}</span>
            <svg
              className={`w-4 h-4 text-gray-500 transition-transform ${openDropdown === "speciality" ? "rotate-180" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={3}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Speciality Menu */}
          {openDropdown === "speciality" && (
            <div className="absolute top-[calc(100%-1px)] left-0 w-full bg-white border border-t-0 border-gray-300 shadow-[0_10px_20px_rgba(0,0,0,0.1)] rounded-b-[20px] overflow-hidden z-40 text-left">
              <ul className="max-h-[220px] overflow-y-auto [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-full mr-1">
                {specialities.map((spec, idx) => (
                  <li
                    key={spec}
                    onClick={() => {
                      setSpeciality(spec);
                      setOpenDropdown(null);
                    }}
                    className={`px-5 py-3.5 text-[14px] cursor-pointer font-medium text-gray-700 hover:bg-gray-50 border-gray-100 ${idx !== specialities.length - 1 ? 'border-b' : ''} ${speciality === spec ? 'font-bold text-[#ef533f]' : ''}`}
                  >
                    {spec}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Go Button */}
        <button className="bg-[#ef533f] text-white rounded-full w-[46px] h-[46px] flex items-center justify-center font-bold text-[15px] shadow-[0_3px_10px_rgba(239,83,63,0.3)] hover:scale-105 transition-transform z-10">
          Go
        </button>
      </div>

      {/* Panoramic Doctor Image */}
      <div className="w-full h-[550px] relative mt-1 overflow-hidden bg-[#fafbfc]">
        <img 
          src="/doctors-image.webp" 
          alt="Doctors Team" 
          className="absolute w-full h-[550px] object-cover object-top" 
        />
      </div>
    </section>
  );
}
