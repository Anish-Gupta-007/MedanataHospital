"use client";

const navItems = [
  { label: "Locations", hasDropdown: true },
  { label: "Speciality", hasDropdown: true },
  { label: "Health Library", hasDropdown: true },
  { label: "Services", hasDropdown: true },
  { label: "International Patients", hasDropdown: true },
  { label: "Careers", hasDropdown: false },
  { label: "Contact Us", hasDropdown: true },
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100 hidden md:block">
      <div className="max-w-[1440px] mx-auto px-6 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5 flex-shrink-0 cursor-pointer group">
          {/* Logo SVG (Medanta cross with left lines) */}
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
        <div className="flex items-center gap-6 mt-1 flex-1 justify-center pl-8">
          {navItems.map((item) => (
            <div key={item.label} className="group relative">
              <a className="text-[13px] font-semibold text-gray-700 hover:text-[#f05c3d] cursor-pointer flex items-center transition-colors">
                {item.label}
                {item.hasDropdown && <span className="ml-1 text-[8px] text-gray-400 group-hover:text-[#f05c3d]">&#9660;</span>}
              </a>
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
