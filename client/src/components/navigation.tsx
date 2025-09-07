import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "services", label: "Activities" },
    { id: "gallery", label: "Gallery" },
    { id: "dining", label: "Dining" },
    { id: "team-building", label: "Team Building" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className={`fixed w-full top-0 z-50 nav-backdrop border-b border-border transition-all duration-300 ${scrolled ? 'bg-card/95' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center" data-testid="brand-logo">
            <i className="fas fa-leaf text-primary text-2xl mr-3"></i>
            <span className="text-xl font-bold text-primary">Canon Mînae</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-foreground hover:text-primary transition-colors font-medium"
                  data-testid={`nav-${item.id}`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <Button 
              onClick={() => scrollToSection("contact")}
              className="btn-primary text-primary-foreground px-6 py-2 rounded-lg font-semibold"
              data-testid="button-book-adventure"
            >
              Book Your Adventure
            </Button>
          </div>

          {/* Mobile menu */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon"
                  data-testid="button-mobile-menu"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-64">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center">
                    <i className="fas fa-leaf text-primary text-xl mr-2"></i>
                    <span className="text-lg font-bold text-primary">Canon Mînae</span>
                  </div>
                </div>
                <div className="space-y-4">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="block text-foreground hover:text-primary transition-colors font-medium py-2 w-full text-left"
                      data-testid={`mobile-nav-${item.id}`}
                    >
                      {item.label}
                    </button>
                  ))}
                  <Button 
                    onClick={() => scrollToSection("contact")}
                    className="btn-primary text-primary-foreground px-6 py-2 rounded-lg font-semibold w-full mt-4"
                    data-testid="button-mobile-book"
                  >
                    Book Your Adventure
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
