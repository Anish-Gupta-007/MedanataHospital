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
    <footer className="bg-white border-t-4 border-[#e8402a] pt-14 px-6 lg:px-10">
      <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
        {/* For Patients */}
        <div>
          <h4 className="text-[15px] font-black mb-5">For Patients</h4>
          <ul className="space-y-2.5">
            {footerData.forPatients.map((item) => (
              <li key={item}><a href="#" className="text-[13px] text-gray-500 hover:text-[#e8402a] transition-colors">{item}</a></li>
            ))}
          </ul>
        </div>

        {/* Specialities */}
        <div>
          <h4 className="text-[15px] font-black mb-5">Specialities</h4>
          <ul className="space-y-2.5">
            {footerData.specialities.map((item) => (
              <li key={item}><a href="#" className="text-[13px] text-gray-500 hover:text-[#e8402a] transition-colors">{item}</a></li>
            ))}
            <li><a href="#" className="text-[13px] font-bold text-gray-700">More +</a></li>
          </ul>
        </div>

        {/* Our Hospitals */}
        <div>
          <h4 className="text-[15px] font-black mb-5">Our Hospitals</h4>
          <ul className="space-y-2.5">
            {footerData.hospitals.map((item) => (
              <li key={item}><a href="#" className={`text-[13px] hover:text-[#e8402a] transition-colors ${item === "Medanta Ranchi" ? "font-bold text-gray-800" : "text-gray-500"}`}>{item}</a></li>
            ))}
          </ul>
        </div>

        {/* Corporate */}
        <div>
          <h4 className="text-[15px] font-black mb-5">Corporate</h4>
          <ul className="space-y-2.5">
            {footerData.corporate.map((item) => (
              <li key={item}><a href="#" className="text-[13px] text-gray-500 hover:text-[#e8402a] transition-colors">{item}</a></li>
            ))}
          </ul>
        </div>

        {/* Download App */}
        <div>
          <h4 className="text-[15px] font-black mb-5">Download Our App</h4>
          <p className="text-[13px] text-gray-500 mb-5 leading-relaxed">
            Download our all new Medanta App to book your appointments at your fingertips
          </p>
          <div className="flex flex-col gap-3 mb-5">
            <button className="flex items-center gap-2 border border-gray-200 rounded-lg px-4 py-2.5 text-sm font-semibold hover:border-[#e8402a] transition-colors">
              ▶ Get it on Google Play
            </button>
            <button className="flex items-center gap-2 border border-gray-200 rounded-lg px-4 py-2.5 text-sm font-semibold hover:border-[#e8402a] transition-colors">
              🍎 Get it on the App Store
            </button>
          </div>
          <button className="w-full bg-[#e8402a] text-white rounded-lg py-3.5 font-black flex items-center justify-center gap-2 hover:bg-[#c73520] transition-colors">
            🔔 Emergency 1068
          </button>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="max-w-[1400px] mx-auto border-t border-gray-100 mt-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex gap-3">
          {["f", "𝕏", "📷", "▶"].map((icon, i) => (
            <button key={i} className="w-9 h-9 border border-gray-200 rounded-full flex items-center justify-center text-sm hover:bg-[#e8402a] hover:text-white hover:border-[#e8402a] transition-all">
              {icon}
            </button>
          ))}
        </div>
        <p className="text-xs text-gray-400">© 2026 Medanta. All Rights Reserved.</p>
      </div>
      <div className="h-5" />
    </footer>
  );
}
