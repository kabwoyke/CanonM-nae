import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import GallerySection from "@/components/gallery-section";
import DiningSection from "@/components/dining-section";
import TeamBuildingSection from "@/components/team-building-section";
import TestimonialsSection from "@/components/testimonials-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <GallerySection />
      <DiningSection />
      <TeamBuildingSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
