import { Button } from "@/components/ui/button";
import { Play, CalendarPlus } from "lucide-react";

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"
        }}
      />
      <div className="absolute inset-0 hero-gradient" />
      
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 fade-in">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight" data-testid="text-hero-title">
          Welcome to Canon Mînae Private Resort
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-2xl mx-auto" data-testid="text-hero-description">
          Experience luxury and excitement at Kenya's premier private resort. Enjoy exclusive gardens, thrilling motorbike racing, authentic cuisine, and premium accommodation in the beautiful highlands of Thigio.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={scrollToContact}
            className="btn-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold text-lg"
            data-testid="button-book-adventure-hero"
          >
            <CalendarPlus className="mr-2 h-5 w-5" />
            Book Your Adventure
          </Button>
          <Button 
            variant="outline"
            className="border-2 border-white text-white hover:bg-white/90 hover:text-primary bg-black/20 backdrop-blur-sm px-8 py-3 rounded-lg font-semibold text-lg transition-all"
            data-testid="button-virtual-tour"
          >
            <Play className="mr-2 h-5 w-5" />
            Virtual Tour
          </Button>
        </div>
      </div>
    </section>
  );
}
