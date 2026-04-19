import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Specialities from "@/components/Specialities";
import ServicesSection from "@/components/ServicesSection";
import ModelOfCareSection from "@/components/ModelOfCareSection";
import StoriesSection from "@/components/StoriesSection";
import BeyondBoundariesSection from "@/components/BeyondBoundariesSection";
import UpdatesSection from "@/components/UpdatesSection";
import NetworkSection from "@/components/NetworkSection";
import BlogsSection from "@/components/BlogsSection";
import AwardsSection from "@/components/AwardsSection";
import NewsEventsSection from "@/components/NewsEventsSection";
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
      <StoriesSection />
      <BeyondBoundariesSection />
      <UpdatesSection />
      <NetworkSection />
      <BlogsSection />
      <AwardsSection />
      <NewsEventsSection />
      <Footer />
    </main>
  );
}
