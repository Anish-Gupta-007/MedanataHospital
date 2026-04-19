// PatientStories.tsx
export function PatientStories() {
  const stories = [
    { title: "Mauritian Patient Treated For Esophageal Cancer", sub: "Mr Fazl Hosany", bg: "from-[#8fa8c8] to-[#6888a8]", size: "tall" },
    { title: "Liver Failure", sub: "Baby Bhavika", bg: "from-[#a8c8a8] to-[#789878]", size: "short" },
    { title: "Jaw Cancer", sub: "Dr. Abhilasha Agarwal", bg: "from-[#c8a8a8] to-[#a88888]", size: "short" },
    { title: "Pre-term Babies", sub: "Ms Sakshi", bg: "from-[#c8a8c8] to-[#a888a8]", size: "wide" },
    { title: "Neurosurgical Treatment", sub: "Mr. Devender Jeet Singh", bg: "from-[#c8c8a8] to-[#a8a878]", size: "short" },
    { title: "Bone Marrow Transplant", sub: "Patient Father Mr Haider", bg: "from-[#a8b8c8] to-[#8898a8]", size: "short" },
    { title: "Mother Saves Daughter By Donating A Kidney", sub: "Ms Paluk Sunger", bg: "from-[#b8c8d8] to-[#98a8c8]", size: "tall" },
  ];

  const StoryCard = ({ story, className }: { story: typeof stories[0]; className?: string }) => (
    <div className={`rounded-xl overflow-hidden relative cursor-pointer hover:scale-[1.02] transition-transform ${className}`}>
      <div className={`w-full h-full bg-gradient-to-br ${story.bg} flex items-center justify-center text-4xl opacity-60`}>👤</div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-11 h-11 bg-white/90 rounded-full flex items-center justify-center text-[#e8402a] text-lg">▶</div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
        <h4 className="text-[13px] font-bold leading-snug">{story.title}</h4>
        <p className="text-[11px] opacity-80">{story.sub}</p>
      </div>
    </div>
  );

  return (
    <section className="py-16 px-6 lg:px-10 bg-gray-50">
      <h2 className="text-center text-4xl font-black mb-10" style={{ fontFamily: "'Playfair Display', serif" }}>Patient Stories</h2>
      
      <div className="max-w-[1300px] mx-auto grid grid-cols-5 gap-3 items-center" style={{ gridTemplateRows: "160px 160px" }}>
        {/* Col 1 - tall */}
        <StoryCard story={stories[0]} className="row-span-2 col-span-1" />
        {/* Col 2 - two short */}
        <StoryCard story={stories[1]} className="col-span-1" />
        <StoryCard story={stories[2]} className="col-span-1" />
        {/* Col 3 - wide */}
        <StoryCard story={stories[3]} className="row-span-2 col-span-1" />
        {/* Col 4 - two short */}
        <StoryCard story={stories[4]} className="col-span-1" />
        <StoryCard story={stories[5]} className="col-span-1" />
        {/* Col 5 - tall */}
        <StoryCard story={stories[6]} className="row-span-2 col-span-1" />
      </div>

      <div className="text-center mt-8">
        <button className="flex items-center gap-2 text-[#e8402a] font-bold text-sm mx-auto">
          View All Patients Stories
          <span className="w-7 h-7 bg-[#e8402a] rounded-full flex items-center justify-center text-white text-xs">›</span>
        </button>
      </div>
    </section>
  );
}

// News.tsx
export function News() {
  const newsItems = [
    { date: "Mar 07, 2026", title: "Medanta Drives Jabalpur Outreach to Improve Thalassemia and Aplastic Anemia Care", icon: "📋" },
    { date: "Feb 26, 2026", title: "Medanta ranked India's best hospital by Newsweek", icon: "🏆" },
    { date: "Feb 20, 2026", title: "Medanta Enhances India's Neurological Care Landscape with Advanced 'Brain Pacemaker' Surgery", icon: "🧠" },
  ];
  const newsItems2 = [
    { date: "Feb 07, 2026", title: "Advanced Radiation Therapy at Medanta to Give New Hope to Cancer Patients in Haryana", icon: "☢️" },
    { date: "Feb 06, 2026", title: "Medanta Launches Dedicated 24x7 Chest Trauma Support Service to Strengthen Emergency Care in North India", icon: "🚑" },
    { date: "Feb 04, 2026", title: "Medanta Mediclinic Defence Colony Marks World Cancer Day with Purple Illumination and Awareness Activities", icon: "🌟" },
  ];

  return (
    <section className="py-16 px-6 lg:px-10 bg-white">
      <h2 className="text-center text-4xl font-black mb-10" style={{ fontFamily: "'Playfair Display', serif" }}>News & Events</h2>
      <div className="max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-[400px_1fr_1fr] gap-8">
        {/* Featured */}
        <div className="bg-gray-50 rounded-2xl overflow-hidden cursor-pointer hover:-translate-y-1 transition-transform">
          <div className="h-60 bg-gradient-to-br from-[#d0d8e0] to-[#a0b0c0] flex items-center justify-center text-7xl opacity-40">📰</div>
          <div className="p-6">
            <p className="text-sm text-gray-400 mb-3">Apr 04, 2026</p>
            <h3 className="text-xl font-black leading-snug mb-4">
              Medanta's Brain Pacemaker Surgery Restores Hope, Offers Second Chance at Life to J&K Patients
            </h3>
            <button className="flex items-center gap-2 text-sm font-bold">
              Read Post <span className="w-6 h-6 bg-[#e8402a] rounded-full flex items-center justify-center text-white text-xs">›</span>
            </button>
          </div>
        </div>

        {/* Col 2 */}
        <div className="flex flex-col gap-5">
          {newsItems.map((n, i) => (
            <div key={i} className="flex gap-4 pb-5 border-b border-gray-100 cursor-pointer">
              <div className="w-20 h-[70px] rounded-lg bg-gradient-to-br from-[#d0d8e0] to-[#a0b0c0] flex items-center justify-center text-2xl opacity-50 flex-shrink-0">
                {n.icon}
              </div>
              <div>
                <p className="text-[12px] text-gray-400 mb-1">{n.date}</p>
                <h4 className="text-[14px] font-bold leading-snug mb-2">{n.title}</h4>
                <button className="flex items-center gap-1.5 text-[12px] font-bold">
                  Read Post <span className="w-5 h-5 bg-[#e8402a] rounded-full flex items-center justify-center text-white text-[9px]">›</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Col 3 */}
        <div className="flex flex-col gap-5">
          {newsItems2.map((n, i) => (
            <div key={i} className="flex gap-4 pb-5 border-b border-gray-100 cursor-pointer">
              <div className="w-20 h-[70px] rounded-lg bg-gradient-to-br from-[#d0d8e0] to-[#a0b0c0] flex items-center justify-center text-2xl opacity-50 flex-shrink-0">
                {n.icon}
              </div>
              <div>
                <p className="text-[12px] text-gray-400 mb-1">{n.date}</p>
                <h4 className="text-[14px] font-bold leading-snug mb-2">{n.title}</h4>
                <button className="flex items-center gap-1.5 text-[12px] font-bold">
                  Read Post <span className="w-5 h-5 bg-[#e8402a] rounded-full flex items-center justify-center text-white text-[9px]">›</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
