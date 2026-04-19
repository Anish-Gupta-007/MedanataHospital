"use client";

import React from "react";

const footerData = {
  forPatients: [
    "Find a Doctor", "Book Appointment", "Treatments", "Emergency 24x7",
    "Technology", "Patient Testimonials", "CPR", "Disclaimer",
    "Terms & Conditions", "Privacy Policy", "Refund & Cancellations",
    "Medicine Information", "Jaanta Hai Medanta", "Ambulance Services",
  ],
  specialities: [
    "Cardiac Care", "Cancer Care", "Neurosciences", "Gastrosciences",
    "Orthopaedics", "Renal Care", "Liver Transplant", "Bone Marrow Transplant",
    "Lung Transplant", "Chest Surgery",
  ],
  hospitals: [
    "Medanta Hospital, Ranchi", "Medanta Gurugram", "Medanta Patna",
    "Medanta Lucknow", "Medanta Ranchi", "Medanta Indore", "Medanta Noida",
    "Medanta Mediclinic, Ranchi", "Medanta Mediclinic Subhash Chowk",
    "Medanta Mediclinic Cybercity", "Medanta Mediclinic Defence Colony",
    "Medanta Mediclinic Golf course",
  ],
  corporate: [
    "Help Desk", "About us", "Blogs", "Careers", "AHA Courses",
    "Feedback", "Contact Us", "News & Events", "Investor Relations",
    "Policies & Forms", "Coronary Stent Prices", "Orthopaedic Knee Implant Prices",
    "Biomedical Waste Report", "Sitemap", "Web Stories",
  ],
};

export default function Footer() {
  return (
    <footer className="bg-white pt-10 pb-5 px-2 lg:px-5 border-t border-gray-100">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_1fr_1.4fr] gap-y-12 gap-x-8">
        
        {/* For Patients */}
        <div>
          <h4 className="text-[17.5px] font-bold text-gray-700 tracking-tight mb-7">For Patients</h4>
          <ul className="space-y-[13px]">
            {footerData.forPatients.map((item) => (
              <li key={item}>
                <a href="#" className="text-[13px] font-medium text-gray-500 hover:text-[#f05c3d] hover:translate-x-0.5 transition-all inline-block">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Specialities */}
        <div>
          <h4 className="text-[17.5px] font-bold text-gray-700 tracking-tight mb-7">Specialities</h4>
          <ul className="space-y-[13px]">
            {footerData.specialities.map((item) => (
              <li key={item}>
                <a href="#" className="text-[13px] font-medium text-gray-500 hover:text-[#f05c3d] hover:translate-x-0.5 transition-all inline-block">
                  {item}
                </a>
              </li>
            ))}
            <li>
              <a href="#" className="text-[13px] font-bold text-gray-700 hover:text-[#f05c3d] transition-colors mt-2 inline-block">
                More +
              </a>
            </li>
          </ul>
        </div>

        {/* Our Hospitals */}
        <div>
          <h4 className="text-[17.5px] font-bold text-gray-700 tracking-tight mb-7">Our Hospitals</h4>
          <ul className="space-y-[13px]">
            {footerData.hospitals.map((item) => (
              <li key={item}>
                <a href="#" className={`text-[13px] hover:translate-x-0.5 transition-all inline-block hover:text-[#f05c3d] font-medium ${item.includes("Ranchi") || item.includes("Gurugram") ? "text-gray-500" : "text-gray-500"}`}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Corporate */}
        <div>
          <h4 className="text-[17.5px] font-bold text-gray-700 tracking-tight mb-7">Corporate</h4>
          <ul className="space-y-[13px]">
            {footerData.corporate.map((item) => (
              <li key={item}>
                <a href="#" className="text-[13px] font-medium text-gray-500 hover:text-[#f05c3d] hover:translate-x-0.5 transition-all inline-block">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Download App */}
        <div className="lg:pl-4">
          <h4 className="text-[17.5px] font-bold text-gray-700 tracking-tight mb-7">Download Our App</h4>
          <p className="text-[13px] font-medium text-gray-500 mb-8 leading-[1.6]">
            Download our all new Medanta App to book your appointments at your fingertips
          </p>
          
          <div className="flex flex-col gap-4 mb-4">
            <button className="w-full flex items-center justify-start gap-4 border border-gray-200/80 rounded-[8px] px-4 py-3 hover:border-[#f05c3d] hover:bg-gray-50 transition-all shadow-sm">
              <svg className="w-5 h-5 text-gray-700" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4.5,2.5 L17.5,12 L4.5,21.5 Z" />
              </svg>
              <span className="text-[13px] font-bold text-gray-700">Get it on Google Play</span>
            </button>
            <button className="w-full flex items-center justify-start gap-4 border border-gray-200/80 rounded-[8px] px-4 py-3 hover:border-[#f05c3d] hover:bg-gray-50 transition-all shadow-sm">
              <svg className="w-[22px] h-[22px] text-gray-700" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 11c0-2 1.5-3.5 3-4-1-1.5-2.5-2.5-4.5-2.5-1.5 0-3 1-4 1-1 0-2.5-1-4-1-2.5 0-4.5 1.5-6 4-1.5 3-3 8.5-.5 12 1 1.5 2.5 3 4 3 1.5 0 2.5-1 4.5-1s3 1 4.5 1c1.5 0 3-1.5 4-3-1-1.5-1.5-3.5-1.5-5z M14 4.5c.5-1 1.5-1.5 2.5-2-.5-1-1.5-2-2.5-2s-2 1-2.5 2.5c1 0 2 0 2.5 1.5z"/>
              </svg>
              <span className="text-[13px] font-bold text-gray-700">Get it on the App Store</span>
            </button>
          </div>
          
          <button className="w-full mt-5 bg-[#f05c3d] text-white rounded-[8px] py-4 text-[13px] font-bold flex items-center justify-center gap-3 hover:bg-[#d6412f] transition-all shadow-[0_4px_15px_rgba(240,92,61,0.25)]">
            <svg className="w-5 h-5 mb-px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22a2 2 0 0 0 2-2H10a2 2 0 0 0 2 2zM18 16v-5c0-3.07-1.64-5.64-4.5-6.32V4a1.5 1.5 0 0 0-3 0v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>
            </svg>
            Emergency 1068
          </button>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="max-w-[700px] mx-auto mt-5 pt-4 flex flex-col items-center justify-center">
        {/* Social Icons Container */}
        <div className="flex gap-x-6 mb-5 items-center">
           {/* FB */}
           <svg className="w-[18px] h-[18px] text-gray-600 hover:text-[#f05c3d] cursor-pointer transition-colors" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14 13.5h2.5l.5-3h-3v-2c0-.8.2-1.5 1.5-1.5H17V4.5c-.3 0-1.2-.1-2.5-.1-2.5 0-4 1.5-4 4v2.5H8v3h2.5V22h3.5v-8.5z"/>
           </svg>
           {/* X / Twitter */}
           <svg className="w-[18px] h-[18px] text-gray-600 hover:text-[#f05c3d] cursor-pointer transition-colors" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
           </svg>
           {/* Instagram */}
           <svg className="w-[18px] h-[18px] text-gray-600 hover:text-[#f05c3d] cursor-pointer transition-colors" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
           </svg>
           {/* YouTube */}
           <svg className="w-[20px] h-[20px] text-gray-600 hover:text-[#f05c3d] cursor-pointer transition-colors" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.376.55 9.376.55s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
           </svg>
        </div>
        <p className="text-[12px] font-medium text-[#999]">Copyright © 2026 Medanta The Medicity. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
