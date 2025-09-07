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
    image: "https://naiposha.com/wp-content/uploads/2023/11/Naiposha-Gardens-Home-Intro-0001.jpg"
  },
  {
    icon: Car,
    title: "VIP Parking",
    description: "Premium valet parking service with dedicated spaces for our exclusive resort guests and private event attendees.",
    image: "https://maishashades.co.ke/wp-content/uploads/2023/03/car-shades-in-Kenya-1.jpeg"
  },
  {
    icon: Home,
    title: "Private Fitness Pavilion",
    description: "Exclusive outdoor fitness facility with premium equipment in elegant covered pavilions for resort guest workouts.",
    image: "https://naturalmeddoc.com/wp-content/uploads/2019/06/phoenix-gyms.jpg"
  },
  {
    icon: Baby,
    title: "Kids Club",
    description: "Private children's recreation area with luxury playground equipment and supervised activities for resort families.",
    image: "https://okplay.in/wp-content/uploads/2021/06/Blog-1-May.jpg"
  },
  {
    icon: Zap,
    title: "Horseback Adventures",
    description: "Exclusive guided horseback riding experiences through private resort grounds with professional equestrian instructors.",
    image: "https://www.lakenakurukenya.com/wp-content/uploads/2022/09/5f96adb97334bb2aae0d9441_2.jpg"
  },
  {
    icon: Bike,
    title: "Adventure Racing",
    description: "Exclusive motorbike racing experiences on private resort tracks designed for thrill-seeking guests and corporate events.",
    image: "https://www.motorbike-safari.com/wp-content/uploads/2020/05/Giraffe-Kenya-motorcycle-tour.jpg"
  },
  {
    icon: Mountain,
    title: "Private Hiking Expeditions",
    description: "Exclusive guided hiking adventures with personal guides offering scenic viewpoints and luxury outdoor experiences.",
    image: "https://kenyawonderland.weebly.com/uploads/1/9/7/7/19771923/1169799_orig.jpg"
  },
  {
    icon: Tent,
    title: "Luxury Glamping",
    description: "Premium camping experience with upscale amenities, private sites, and concierge services for discerning guests.",
    image: "https://www.kabiraugandasafaris.com/wp-content/uploads/2021/09/Kenya-Camping-Safari-1024x533.jpg"
  },
  {
    icon: Users,
    title: "Corporate Retreat Center",
    description: "Exclusive conference facilities and team building programs designed for high-end corporate events and executive retreats.",
    image: "https://redgiant.co.ke/wp-content/uploads/2023/08/DSSDC_7811-01-1024x683.jpg"
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
    image: "https://theexpatmummy.com/wp-content/uploads/2021/05/Talisman-nairobi-.jpg"
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
