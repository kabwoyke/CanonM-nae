import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { UserCog, Building, CalendarCheck, Handshake, CheckCircle } from "lucide-react";

const teamBuildingFeatures = [
  {
    icon: UserCog,
    title: "Team Activities",
    items: [
      "Problem-solving challenges",
      "Outdoor adventure courses",
      "Trust-building exercises",
      "Leadership workshops"
    ]
  },
  {
    icon: Building,
    title: "Facilities",
    items: [
      "Conference halls",
      "Outdoor meeting spaces",
      "Audio/visual equipment",
      "Accommodation options"
    ]
  },
  {
    icon: CalendarCheck,
    title: "Packages",
    items: [
      "Half-day programs",
      "Full-day experiences",
      "Multi-day retreats",
      "Custom programs"
    ]
  }
];

export default function TeamBuildingSection() {
  return (
    <section id="team-building" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-team-building-title">
            Corporate Retreats & Team Building
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto" data-testid="text-team-building-description">
            Transform your team dynamics with our comprehensive corporate retreat packages designed to inspire collaboration and boost morale in nature's embrace.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {teamBuildingFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="bg-card rounded-xl shadow-lg p-8 card-hover" data-testid={`card-team-building-${index}`}>
                <CardContent className="p-0">
                  <div className="text-center mb-6">
                    <IconComponent className="text-primary text-4xl mb-4 h-12 w-12 mx-auto" />
                    <h3 className="text-xl font-bold text-card-foreground" data-testid={`text-team-building-feature-title-${index}`}>
                      {feature.title}
                    </h3>
                  </div>
                  <ul className="space-y-3 text-muted-foreground">
                    {feature.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center" data-testid={`item-team-building-${index}-${itemIndex}`}>
                        <CheckCircle className="text-primary mr-3 h-4 w-4 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button 
            className="btn-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold text-lg"
            data-testid="button-corporate-quote"
          >
            <Handshake className="mr-2 h-5 w-5" />
            Request Corporate Quote
          </Button>
        </div>
      </div>
    </section>
  );
}
