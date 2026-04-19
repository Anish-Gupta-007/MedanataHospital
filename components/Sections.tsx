export function Services() {
  return (
    <section className="py-20 px-6 lg:px-10 bg-[#fafafa]">
      <h2 className="text-center text-[34px] font-bold text-gray-800 mb-14 tracking-tight">Services</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1240px] mx-auto auto-rows-fr">
        
        {/* Left: Second Opinion (Tall) */}
        <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-xl transition-shadow flex flex-col overflow-hidden relative">
          <img src="/api/assets/service_nurse_1776523929015.png" alt="Second Opinion" className="h-[220px] w-full object-cover" />
          {/* Circular Left Chevron */}
          <div className="absolute top-[200px] -left-5 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-400 text-xl font-black cursor-pointer hover:text-[#f05c3d] transition-colors z-10">&lsaquo;</div>
          <div className="p-8 flex flex-col flex-1 relative bg-white">
            <h3 className="text-xl font-bold text-gray-800 mb-3">Second Opinion</h3>
            <p className="text-[14px] text-gray-500 leading-relaxed mb-6 pr-4">Confirm diagnosis and take informed decision about your treatment plan with some of India's top experts</p>
            <div className="mt-auto flex items-center">
              <span className="text-[13px] font-bold text-gray-700 flex items-center gap-2 cursor-pointer hover:text-[#f05c3d] transition-colors">
                Know More <div className="w-5 h-5 rounded-full bg-[#f05c3d] flex items-center justify-center text-white text-xs">&rsaquo;</div>
              </span>
            </div>
            {/* Outline SVG Icon */}
            <div className="absolute bottom-6 right-6 text-gray-800/10">
              <svg className="w-14 h-14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
            </div>
          </div>
        </div>

        {/* Center: Buy Medicine & Labs (Two short cards) */}
        <div className="flex flex-col gap-6">
          <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-xl transition-shadow p-8 flex flex-col flex-1 relative">
             <h3 className="text-xl font-bold text-gray-800 mb-3 font-sans">Buy Medicine</h3>
             <p className="text-[14px] text-gray-500 leading-relaxed mb-6 pr-8">Recover without worrying about going out to buy reliable medication; get them delivered to your doorstep</p>
             <div className="mt-auto flex items-center">
              <span className="text-[13px] font-bold text-gray-700 flex items-center gap-2 cursor-pointer hover:text-[#f05c3d] transition-colors">
                Know More <div className="w-5 h-5 rounded-full bg-[#f05c3d] flex items-center justify-center text-white text-xs">&rsaquo;</div>
              </span>
             </div>
             {/* Pills Outline */}
             <div className="absolute bottom-6 right-6 text-gray-800/10">
               <svg className="w-12 h-12 rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
             </div>
          </div>
          <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-xl transition-shadow p-8 flex flex-col flex-1 relative">
             <h3 className="text-xl font-bold text-gray-800 mb-3 font-sans">Labs and Diagnostics</h3>
             <p className="text-[14px] text-gray-500 leading-relaxed mb-6 pr-8">Medanta Labs aims to take the benefit of its superior technology, infrastructure and expertise to all</p>
             <div className="mt-auto flex items-center">
              <span className="text-[13px] font-bold text-gray-700 flex items-center gap-2 cursor-pointer hover:text-[#f05c3d] transition-colors">
                Know More <div className="w-5 h-5 rounded-full bg-[#f05c3d] flex items-center justify-center text-white text-xs">&rsaquo;</div>
              </span>
             </div>
             {/* Microscope Outline */}
             <div className="absolute bottom-6 right-6 text-gray-800/10">
               <svg className="w-14 h-14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
             </div>
          </div>
        </div>

        {/* Right: Health Check (Tall) */}
        <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-xl transition-shadow flex flex-col overflow-hidden relative">
          <img src="/api/assets/service_health_check_1776524031745.png" alt="Health Check" className="h-[220px] w-full object-cover object-top" />
          <div className="p-8 flex flex-col flex-1 relative bg-white">
            <h3 className="text-xl font-bold text-gray-800 mb-3">Health Check</h3>
            <p className="text-[14px] text-gray-500 leading-relaxed mb-6 pr-4">Take charge of your well-being with a health experience customised for you</p>
            <div className="mt-auto flex items-center">
              <span className="text-[13px] font-bold text-gray-700 flex items-center gap-2 cursor-pointer hover:text-[#f05c3d] transition-colors">
                Know More <div className="w-5 h-5 rounded-full bg-[#f05c3d] flex items-center justify-center text-white text-xs">&rsaquo;</div>
              </span>
            </div>
            {/* Stethoscope Outline */}
            <div className="absolute bottom-6 right-6 text-gray-800/10">
               <svg className="w-14 h-14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
            </div>
          </div>
          {/* Circular Right Chevron (from Next Image) */}
          <div className="absolute bottom-[20px] -right-5 w-12 h-12 rounded-full bg-white shadow-lg border-2 border-gray-100 flex items-center justify-center text-gray-400 text-xl font-black cursor-pointer hover:border-[#f05c3d] hover:text-[#f05c3d] transition-colors z-10">&rsaquo;</div>
        </div>

      </div>
    </section>
  );
}

// Stats & Updates (Placeholders for compilation since they exist in the previous Sections.tsx)
export function Stats() { return null; }
export function Updates() { return null; }
export function Locations() { return null; }
export function Awards() { return null; }
