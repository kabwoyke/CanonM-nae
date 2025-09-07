import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
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
  };

  return (
    <footer className="bg-primary text-primary-foreground py-12" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div data-testid="footer-brand">
            <div className="flex items-center mb-4">
              <i className="fas fa-leaf text-2xl mr-3"></i>
              <span className="text-xl font-bold">Canon Mînae</span>
            </div>
            <p className="text-primary-foreground/80 mb-4">
              Experience nature's paradise in the heart of Kenya. Adventure, relaxation, and unforgettable memories await.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors" data-testid="link-facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors" data-testid="link-instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors" data-testid="link-twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors" data-testid="link-whatsapp">
                <i className="fab fa-whatsapp text-xl"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div data-testid="footer-quick-links">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection("home")} 
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-left"
                  data-testid="footer-link-home"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("services")} 
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-left"
                  data-testid="footer-link-activities"
                >
                  Activities
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("gallery")} 
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-left"
                  data-testid="footer-link-gallery"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("dining")} 
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-left"
                  data-testid="footer-link-dining"
                >
                  Dining
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("contact")} 
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-left"
                  data-testid="footer-link-contact"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div data-testid="footer-services">
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors" data-testid="footer-service-gardens">Botanical Gardens</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors" data-testid="footer-service-camping">Camping</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors" data-testid="footer-service-hiking">Hiking Trails</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors" data-testid="footer-service-team-building">Team Building</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors" data-testid="footer-service-restaurant">Restaurant</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div data-testid="footer-contact">
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2">
              <p className="text-primary-foreground/80 flex items-center" data-testid="footer-address">
                <i className="fas fa-map-marker-alt mr-2"></i>
                Nguirubi, Thigio, Kenya
              </p>
              <p className="text-primary-foreground/80 flex items-center" data-testid="footer-phone">
                <i className="fas fa-phone mr-2"></i>
                +254 700 123 456
              </p>
              <p className="text-primary-foreground/80 flex items-center" data-testid="footer-email">
                <i className="fas fa-envelope mr-2"></i>
                info@canonminae.com
              </p>
              <p className="text-primary-foreground/80 flex items-center" data-testid="footer-hours">
                <i className="fas fa-clock mr-2"></i>
                Daily: 7:00 AM - 6:00 PM
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/80" data-testid="footer-copyright">
            © 2024 Canon Mînae Botanical Park. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
}
