import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function SpecialityPage() {
  return (
    <main className="bg-[#fdfdfd] min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex flex-col items-center justify-center py-20 px-6">
        <h1 className="text-[42px] font-bold text-gray-800 mb-6 tracking-tight">Specialities</h1>
        <p className="text-[16px] text-gray-500 max-w-xl mx-auto text-center leading-relaxed">
          Learn more about our dedicated centers of excellence and medical specialities. This section is currently under construction. Please check back later.
        </p>
      </div>
      <Footer />
    </main>
  );
}
