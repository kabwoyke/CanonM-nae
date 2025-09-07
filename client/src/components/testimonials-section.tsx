import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Kamau",
    role: "Family Visitor",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&fit=face",
    text: "Canon Mînae exceeded all our expectations! The gardens are absolutely stunning, and our kids had a blast at the children's park. The camping experience was perfect for our family getaway.",
    rating: 5
  },
  {
    name: "David Mwangi",
    role: "HR Director",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&fit=face",
    text: "Our corporate retreat at Canon Mînae was transformative. The team building activities brought our staff closer together, and the natural setting provided the perfect backdrop for innovation.",
    rating: 5
  },
  {
    name: "Grace Wanjiku",
    role: "Adventure Enthusiast",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b17c?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&fit=face",
    text: "The hiking trails are incredible! The guided tour to Cave Hill was an adventure of a lifetime. The staff is knowledgeable and the facilities are top-notch.",
    rating: 5
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 section-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-testimonials-title">
            What Our Visitors Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto" data-testid="text-testimonials-description">
            Hear from families, adventure seekers, and corporate teams who have experienced the magic of Canon Mînae.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card rounded-xl shadow-lg p-8 card-hover" data-testid={`card-testimonial-${index}`}>
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <div className="flex text-accent text-lg" data-testid={`rating-testimonial-${index}`}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground mb-6 italic" data-testid={`text-testimonial-content-${index}`}>
                  "{testimonial.text}"
                </p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                    data-testid={`img-testimonial-${index}`}
                  />
                  <div>
                    <h4 className="font-semibold text-card-foreground" data-testid={`text-testimonial-name-${index}`}>
                      {testimonial.name}
                    </h4>
                    <p className="text-muted-foreground text-sm" data-testid={`text-testimonial-role-${index}`}>
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
