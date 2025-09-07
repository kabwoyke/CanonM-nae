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
    title: "Beautiful Gardens",
    description: "Stroll through our meticulously maintained botanical gardens featuring native Kenyan and exotic East African plant species.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
  },
  {
    icon: Car,
    title: "Picnic Parking",
    description: "Convenient and secure parking spaces specifically designed for families and groups coming for picnics.",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
  },
  {
    icon: Home,
    title: "Tent Gym",
    description: "Unique outdoor fitness experience with modern gym equipment housed in weather-resistant tents.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
  },
  {
    icon: Baby,
    title: "Children's Park",
    description: "Safe and fun playground area designed for Kenyan families with modern equipment and secure surroundings.",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
  },
  {
    icon: Zap,
    title: "Mike Riding",
    description: "Guided horseback riding experiences through the scenic landscapes of Thigio with trained local guides.",
    image: "https://images.unsplash.com/photo-1553284966-19b8815c7817?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
  },
  {
    icon: Bike,
    title: "Motorbike Racing",
    description: "Thrilling motorbike racing adventures on specially designed tracks through the Kenyan countryside.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
  },
  {
    icon: Mountain,
    title: "Cave Hill Hiking & SGR Guides",
    description: "Expert-guided hiking expeditions to Cave Hill with views of the Standard Gauge Railway and Rift Valley.",
    image: "https://images.unsplash.com/photo-1445308394109-4ec2920981b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
  },
  {
    icon: Tent,
    title: "Camping Site",
    description: "Sleep under the African stars in our well-equipped camping grounds with modern facilities and scenic views.",
    image: "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
  },
  {
    icon: Users,
    title: "Retreat & Team Building",
    description: "Professional retreat facilities and team building activities designed for Kenyan corporate groups and organizations.",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
  },
  {
    icon: ParkingCircle,
    title: "Parking",
    description: "Ample secure parking space for vehicles of all sizes, from matatus to private cars and tour buses.",
    image: "https://images.unsplash.com/photo-1590674899484-d5640e854abe?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
  },
  {
    icon: Flame,
    title: "Grills & Kitchens",
    description: "Modern outdoor grilling facilities and fully equipped kitchens for preparing traditional Kenyan barbecue.",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
  },
  {
    icon: Utensils,
    title: "Restaurant Service",
    description: "Full-service restaurant featuring authentic Kenyan cuisine, nyama choma, and fresh local ingredients.",
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
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
