import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Leaf, 
  Tent, 
  Mountain, 
  Baby, 
  Bike, 
  Users,
  Car,
  Home,
  Utensils,
  Flame,
  ParkingCircle,
  Zap
} from "lucide-react";

const services = [
  {
    icon: Leaf,
    title: "Private Gardens",
    description: "Stroll through our exclusively designed landscape gardens featuring curated collections and private walking paths for resort guests.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
  },
  {
    icon: Car,
    title: "VIP Parking",
    description: "Premium valet parking service with dedicated spaces for our exclusive resort guests and private event attendees.",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
  },
  {
    icon: Home,
    title: "Private Fitness Pavilion",
    description: "Exclusive outdoor fitness facility with premium equipment in elegant covered pavilions for resort guest workouts.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
  },
  {
    icon: Baby,
    title: "Kids Club",
    description: "Private children's recreation area with luxury playground equipment and supervised activities for resort families.",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
  },
  {
    icon: Zap,
    title: "Horseback Adventures",
    description: "Exclusive guided horseback riding experiences through private resort grounds with professional equestrian instructors.",
    image: "https://images.unsplash.com/photo-1553284966-19b8815c7817?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
  },
  {
    icon: Bike,
    title: "Adventure Racing",
    description: "Exclusive motorbike racing experiences on private resort tracks designed for thrill-seeking guests and corporate events.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
  },
  {
    icon: Mountain,
    title: "Private Hiking Expeditions",
    description: "Exclusive guided hiking adventures with personal guides offering scenic viewpoints and luxury outdoor experiences.",
    image: "https://images.unsplash.com/photo-1445308394109-4ec2920981b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
  },
  {
    icon: Tent,
    title: "Luxury Glamping",
    description: "Premium camping experience with upscale amenities, private sites, and concierge services for discerning guests.",
    image: "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
  },
  {
    icon: Users,
    title: "Corporate Retreat Center",
    description: "Exclusive conference facilities and team building programs designed for high-end corporate events and executive retreats.",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
  },
  {
    icon: ParkingCircle,
    title: "Secure Valet Parking",
    description: "Premium parking services with valet assistance for luxury vehicles, executive cars, and private transportation.",
    image: "https://images.unsplash.com/photo-1590674899484-d5640e854abe?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
  },
  {
    icon: Flame,
    title: "Private BBQ Pavilions",
    description: "Exclusive outdoor grilling stations with professional-grade equipment and private dining areas for resort guests.",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
  },
  {
    icon: Utensils,
    title: "Fine Dining Restaurant",
    description: "Upscale restaurant offering gourmet cuisine, premium service, and exclusive dining experiences for resort guests.",
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 section-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-services-title">
            Premium Resort Facilities
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto" data-testid="text-services-description">
            Experience luxury amenities and exclusive activities at Canon Mînae Private Resort, designed for discerning guests seeking comfort and excitement.
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
