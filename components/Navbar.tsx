"use client";

import Link from "next/link";
import React from "react";

// Extremely precise SVG icons strictly matching the reference
const Icons = {
  MapPin: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>,
  Building: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 22V2h16v20M8 6h.01M16 6h.01M12 6h.01M12 10h.01M16 10h.01M8 10h.01M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01M10 22v-4h4v4"/></svg>,
  Heart: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>,
  Atom: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="3"></circle><path d="M19.38 6.62c4.83 4.83 4.83 12.67 0 17.5M4.62 17.38c-4.83-4.83-4.83-12.67 0-17.5M17.38 19.38c-4.83 4.83-12.67 4.83-17.5 0M6.62 4.62c4.83-4.83 12.67-4.83 17.5 0"></path></svg>,
  Brain: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9.5 2h5M12 2v20M6 10c0-3.3 2.7-6 6-6s6 2.7 6 6-2 4-2 6 2 3.5 2 6-2.7 6-6 6-6-2.7-6-6 2-4 2-6-2-3.5-2-6z"></path></svg>,
  Stomach: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 6c0 6 8 8 8 16s8-2 8-8-8-8-8-16-8 2-8 8z"></path></svg>,
  Bone: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18.5 2a3.5 3.5 0 0 1 2.33 6.13L10.63 18.33a3.5 3.5 0 1 1-4.94-4.82l10.21-10.23A3.5 3.5 0 0 1 18.5 2z"></path></svg>,
  Kidney: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 14s-3-2-3-6 3-6 6-6 6 2 6 6-3 6-3 6M12 2s3 2 3 6-3 6-6 6-6-2-6-6 3-6 3-6"></path></svg>,
  Book: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path></svg>,
  Stethoscope: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4v7a8 8 0 0 0 16 0V4M12 19v-4M10 15h4"></path><circle cx="12" cy="21" r="2"></circle></svg>,
  Chip: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><path d="M9 9h6v6H9zM9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"></path></svg>,
  Bug: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="8" y="6" width="8" height="14" rx="4"></rect><path d="M12 2v4M6 12h2M16 12h2M7 17l1.5-1.5M15.5 15.5L17 17M7 7l1.5 1.5M15.5 8.5L17 7"></path></svg>,
  Bulb: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 18h6M10 22h4M12 2v1M19 12h1M4 12H3M5.6 5.6L4.2 4.2M19.8 19.8l-1.4-1.4M18.4 5.6l1.4-1.4M4.2 19.8l1.4-1.4M12 6a6 6 0 1 0 0 12"></path></svg>,
  Calendar: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><path d="M16 2v4M8 2v4M3 10h18"></path></svg>,
  Download: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"></path></svg>,
  UserVoice: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 14v4M10 14h4"></path><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"></path></svg>,
  TestTube: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 2v20M15 2v20M6 6h12M6 14h12"></path></svg>,
  HomeHeart: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zM9 22V12h6v10"></path></svg>,
  Pills: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M10.5 20.5 19 12a4.95 4.95 0 1 0-7-7L3.5 13.5a4.95 4.95 0 1 0 7 7Z"></path><path d="m8.5 8.5 7 7"></path></svg>,
  ScreenHeart: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><path d="M8 21h8M12 17v4M12 8l-1 1-1-1a1.5 1.5 0 0 00-2 1.5 1.5 0 0 0-2 0l1 1z"></path></svg>,
  PlaneCross: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21.5 4s-2 .5-3.5 2L14.5 9.5 6.2 7.7l-1.3 1.3 5.4 3.7-3.9 3.9-2.5-1H2l1.6 4.3L8 21.5v-1.9l-1-2.5 3.9-3.9 3.7 5.4 1.3-1.3z"></path></svg>,
  Siren: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2v2M5 5l2 2M19 5l-2 2M12 10a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM8 22h8"></path></svg>,
  BedPulse: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 4v16M22 4v16M2 8h20M2 17h20M12 11v3"></path></svg>,
  Clipboard: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>,
  UserPlus: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M8.5 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM20 8v6M23 11h-6"></path></svg>,
  Globe: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"></circle><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>,
  Help: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3M12 17h.01M22 12c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2s10 4.48 10 10z"></path></svg>,
  Plane: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21.5 4s-2 .5-3.5 2L14.5 9.5 6.2 7.7l-1.3 1.3 5.4 3.7-3.9 3.9-2.5-1H2l1.6 4.3L8 21.5v-1.9l-1-2.5 3.9-3.9 3.7 5.4 1.3-1.3z"></path></svg>,
  Calculator: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><path d="M8 6h8M16 14v4M16 10h.01M12 10h.01M8 10h.01M12 14h.01M8 14h.01M12 18h.01M8 18h.01"></path></svg>,
  Handshake: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M11 11l-4 4 1.5 1.5M15 15l4-4-1.5-1.5M2 12h5.5l2 2H12M22 12h-5.5l-2 2H12"></path></svg>
};

const menusMap: Record<string, {label: string, icon: any, hasArrow?: boolean}[]> = {
  "Locations": [
    { label: "Medanta Gurugram", icon: Icons.MapPin },
    { label: "Medanta Lucknow", icon: Icons.MapPin },
    { label: "Medanta Patna", icon: Icons.MapPin },
    { label: "Medanta Indore", icon: Icons.MapPin },
    { label: "Medanta Noida", icon: Icons.MapPin },
    { label: "Medanta Ranchi", icon: Icons.MapPin },
    { label: "Medanta Mediclinics", icon: Icons.Building }
  ],
  "Speciality": [
    { label: "Cardiac Care", icon: Icons.Heart },
    { label: "Cancer Care", icon: Icons.Atom },
    { label: "Neurosciences", icon: Icons.Brain },
    { label: "Gastrosciences", icon: Icons.Stomach },
    { label: "Orthopaedics", icon: Icons.Bone },
    { label: "Renal Care", icon: Icons.Kidney },
    { label: "View All Specialities", icon: null }
  ],
  "Health Library": [
    { label: "Health Library", icon: Icons.Book },
    { label: "Treatments", icon: Icons.Stethoscope },
    { label: "Technologies", icon: Icons.Chip },
    { label: "Ailments", icon: Icons.Bug },
    { label: "Knowledge Center", icon: Icons.Bulb, hasArrow: true },
    { label: "Events", icon: Icons.Calendar },
    { label: "Downloads", icon: Icons.Download }
  ],
  "Services": [
    { label: "Second Opinion", icon: Icons.UserVoice },
    { label: "Lab Test & Diagnostic", icon: Icons.TestTube },
    { label: "Homecare", icon: Icons.HomeHeart },
    { label: "Buy Medicine", icon: Icons.Pills },
    { label: "Telemedicine", icon: Icons.ScreenHeart },
    { label: "Air Ambulance", icon: Icons.PlaneCross },
    { label: "Emergency 1068", icon: Icons.Siren },
    { label: "Medanta e-ICU", icon: Icons.BedPulse },
    { label: "Health Checkup", icon: Icons.Clipboard },
    { label: "Elder Care", icon: Icons.UserPlus }
  ],
  "International Patients": [
    { label: "International Patients", icon: Icons.Globe },
    { label: "Patient Help Desk", icon: Icons.Help },
    { label: "Plan Your Trip", icon: Icons.Plane },
    { label: "Request An Estimate", icon: Icons.Calculator },
    { label: "Insurance Partner Network", icon: Icons.Handshake }
  ]
};

const navItems = [
  { label: "Locations", hasDropdown: true, href: "/locations" },
  { label: "Speciality", hasDropdown: true, href: "/speciality" },
  { label: "Health Library", hasDropdown: true, href: "/health-library" },
  { label: "Services", hasDropdown: true, href: "/services" },
  { label: "International Patients", hasDropdown: true, href: "/international-patients" },
  { label: "Careers", hasDropdown: false, href: "/careers" },
  { label: "Contact Us", hasDropdown: true, href: "/contact-us" },
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-[9999] bg-white shadow-sm border-b border-gray-100 hidden md:block">
      <div className="max-w-[1440px] mx-auto px-6 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5 flex-shrink-0 cursor-pointer group">
          <svg width="34" height="34" viewBox="0 0 34 34" fill="none" className="relative group-hover:scale-105 transition-transform">
            <rect x="0" y="10" width="10" height="2" fill="#888" />
            <rect x="0" y="15" width="10" height="2" fill="#888" />
            <rect x="0" y="20" width="10" height="2" fill="#888" />
            
            <rect x="12" y="10" width="22" height="12" fill="#f05c3d"/>
            <rect x="17" y="0" width="12" height="34" fill="#f05c3d"/>
          </svg>
          <span className="text-[20px] font-medium tracking-[-0.03em] text-gray-600 mt-1">
            me<span className="text-gray-800 font-bold">D</span>anta
          </span>
        </a>

        {/* Center Nav Links */}
        <div className="flex items-center gap-7 mt-1 flex-1 justify-center pl-8">
          {navItems.map((item) => (
            <div key={item.label} className="group relative h-[72px] flex items-center">
              <Link href={item.href} className="text-[13px] font-semibold text-gray-700 group-hover:text-[#f05c3d] cursor-pointer flex items-center transition-colors">
                {item.label}
                {item.hasDropdown && <span className="ml-[5px] text-[8px] text-gray-400 group-hover:text-[#f05c3d] transition-colors mt-[2px]">&#9660;</span>}
              </Link>
              
              {/* Dropdown Menu */}
              {item.hasDropdown && menusMap[item.label] && (
                <div className="absolute top-[72px] left-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="bg-white rounded-[10px] shadow-[0_15px_40px_rgba(0,0,0,0.12)] border border-gray-100 w-[270px] overflow-hidden flex flex-col translate-y-2 group-hover:translate-y-0 transition-transform duration-200">
                    {menusMap[item.label].map((menuItem, idx) => {
                      const isLast = idx === menusMap[item.label].length - 1;
                      return (
                        <a 
                          key={idx} 
                          href="#" 
                          className={`flex items-center justify-between px-5 py-[13.5px] hover:bg-gray-50/80 transition-colors ${!isLast ? "border-b border-gray-100/80" : ""}`}
                        >
                           <div className="flex items-center gap-4">
                             {menuItem.icon ? (
                               <div className="w-[18px] h-[18px] flex items-center justify-center text-[#f05c3d] opacity-90">
                                 {menuItem.icon}
                               </div>
                             ) : (
                               <div className="w-[18px]"></div> // Spacer for entries without icon
                             )}
                             <span className="text-[13px] font-semibold text-gray-700">{menuItem.label}</span>
                           </div>
                           {menuItem.hasArrow && <span className="text-gray-400 text-[16px] leading-[0] mb-[2px]">&rsaquo;</span>}
                        </a>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right Side Call to Action */}
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 bg-[#f05c3d] hover:bg-[#d6412f] text-white rounded-full px-5 py-2 text-[13px] font-bold shadow-[0_2px_10px_rgba(240,92,61,0.25)] transition-all">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Request Call Back
          </button>
          <button className="bg-gray-50 border border-gray-200 rounded-full px-4 py-2 text-[13px] font-semibold flex items-center gap-1.5 hover:bg-gray-100 transition-colors">
            En <span className="text-[9px] text-gray-400">&#9660;</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
