import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactUsPage() {
  return (
    <main className="bg-[#fdfdfd] min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex flex-col items-center justify-center py-20 px-6">
        <h1 className="text-[42px] font-bold text-gray-800 mb-6 tracking-tight">Contact Us</h1>
        <p className="text-[16px] text-gray-500 max-w-xl mx-auto text-center leading-relaxed">
          Get in touch with us across our various emergency numbers and hospital branches. This section is currently under construction. Please check back later.
        </p>
      </div>
      <Footer />
    </main>
  );
}
