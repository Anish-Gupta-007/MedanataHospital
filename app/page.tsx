import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Specialities from "@/components/Specialities";
import ServicesSection from "@/components/ServicesSection";
import ModelOfCareSection from "@/components/ModelOfCareSection";
import Footer from "@/components/Footer";
import DoctorsSection from "@/components/DoctorsSection";



// Medanta Model of Care


export default function Home() {
  return (
    <main className="bg-[#fdfdfd]">
      <Navbar />
      <Hero />
      <Specialities />
      <DoctorsSection />
      <ModelOfCareSection />
      <ServicesSection />
    </main>
  );
}
