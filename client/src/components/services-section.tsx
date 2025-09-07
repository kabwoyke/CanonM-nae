import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Leaf, 
  Tent, 
  Mountain, 
  Baby, 
  Bike, 
  Users 
} from "lucide-react";

const services = [
  {
    icon: Leaf,
    title: "Beautiful Gardens",
    description: "Stroll through our meticulously maintained botanical gardens featuring native and exotic plant species.",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
  },
  {
    icon: Tent,
    title: "Camping Site",
    description: "Sleep under the stars in our well-equipped camping grounds with modern facilities and scenic views.",
    image: "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
  },
  {
    icon: Mountain,
    title: "Cave Hill Hiking",
    description: "Explore scenic hiking trails leading to Cave Hill with guided tours and breathtaking viewpoints.",
    image: "https://images.unsplash.com/photo-1445308394109-4ec2920981b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
  },
  {
    icon: Baby,
    title: "Children's Park",
    description: "Safe and fun playground area designed for kids with modern equipment and secure surroundings.",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
  },
  {
    icon: Bike,
    title: "Adventure Racing",
    description: "Experience the thrill of motorbike racing and bike riding on our specially designed adventure tracks.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
  },
  {
    icon: Users,
    title: "Team Building",
    description: "Professional retreat facilities and team building activities designed for corporate groups.",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 section-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-services-title">
            Adventures & Attractions
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto" data-testid="text-services-description">
            From serene garden walks to thrilling adventures, discover all the exciting activities Canon Mînae has to offer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="bg-card rounded-xl shadow-lg overflow-hidden card-hover" data-testid={`card-service-${index}`}>
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-48 object-cover"
                  data-testid={`img-service-${index}`}
                />
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <IconComponent className="text-primary text-2xl mr-3 h-6 w-6" />
                    <h3 className="text-xl font-semibold text-card-foreground" data-testid={`text-service-title-${index}`}>
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-4" data-testid={`text-service-description-${index}`}>
                    {service.description}
                  </p>
                  <Button 
                    variant="link" 
                    className="text-primary font-semibold p-0 h-auto"
                    data-testid={`button-learn-more-${index}`}
                  >
                    Learn More →
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
