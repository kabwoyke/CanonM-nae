import { Button } from "@/components/ui/button";
import { Images } from "lucide-react";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400",
    alt: "Garden pond with lily pads",
    title: "Garden Pond",
    description: "Peaceful water features"
  },
  {
    src: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400",
    alt: "Camping tents at sunset",
    title: "Camping Experience",
    description: "Sleep under the stars"
  },
  {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400",
    alt: "Mountain hiking trail view",
    title: "Hiking Trails",
    description: "Spectacular views"
  },
  {
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400",
    alt: "Outdoor restaurant dining",
    title: "Garden Dining",
    description: "Al fresco experiences"
  },
  {
    src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400",
    alt: "Team building outdoor activities",
    title: "Team Events",
    description: "Corporate retreats"
  },
  {
    src: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400",
    alt: "Children at playground",
    title: "Family Fun",
    description: "Kid-friendly activities"
  }
];

export default function GallerySection() {
  return (
    <section id="gallery" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-gallery-title">
            Nature's Gallery
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto" data-testid="text-gallery-description">
            Immerse yourself in the beauty of Canon Mînae through our stunning collection of moments captured in nature.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="relative overflow-hidden rounded-xl shadow-lg card-hover cursor-pointer group"
              data-testid={`card-gallery-${index}`}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                data-testid={`img-gallery-${index}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="font-semibold" data-testid={`text-gallery-title-${index}`}>
                    {image.title}
                  </h4>
                  <p className="text-sm" data-testid={`text-gallery-description-${index}`}>
                    {image.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            className="btn-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold"
            data-testid="button-view-gallery"
          >
            <Images className="mr-2 h-5 w-5" />
            View Full Gallery
          </Button>
        </div>
      </div>
    </section>
  );
}
