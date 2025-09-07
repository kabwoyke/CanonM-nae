import { Button } from "@/components/ui/button";
import { Utensils, Leaf, Flame, FileText, Calendar } from "lucide-react";

export default function DiningSection() {
  return (
    <section id="dining" className="py-16 section-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-dining-title">
            Garden Restaurant & Dining
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto" data-testid="text-dining-description">
            Savor delicious local cuisine while surrounded by nature's beauty. Our restaurant offers fresh, locally-sourced meals in a stunning garden setting.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Garden restaurant terrace"
              className="rounded-xl shadow-lg w-full"
              data-testid="img-restaurant-terrace"
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-card-foreground mb-6" data-testid="text-dining-subtitle">
              Authentic Kenyan Cuisine
            </h3>
            <p className="text-muted-foreground mb-8" data-testid="text-dining-intro">
              Our garden restaurant celebrates Kenyan culinary traditions with fresh ugali, sukuma wiki, and perfectly grilled nyama choma. Experience authentic flavors while surrounded by the natural beauty of Thigio's botanical gardens.
            </p>

            <div className="space-y-4">
              <div className="flex items-start" data-testid="feature-kenyan-specialties">
                <Utensils className="text-primary text-xl mr-4 mt-1 h-5 w-5" />
                <div>
                  <h4 className="font-semibold text-card-foreground">Traditional Kenyan Dishes</h4>
                  <p className="text-muted-foreground">Nyama choma, ugali, sukuma wiki, githeri, and other authentic Kenyan favorites</p>
                </div>
              </div>
              <div className="flex items-start" data-testid="feature-farm-to-table">
                <Leaf className="text-primary text-xl mr-4 mt-1 h-5 w-5" />
                <div>
                  <h4 className="font-semibold text-card-foreground">Local Thigio Ingredients</h4>
                  <p className="text-muted-foreground">Fresh vegetables and herbs sourced from local Kikuyu farmers and our own gardens</p>
                </div>
              </div>
              <div className="flex items-start" data-testid="feature-bbq-grills">
                <Flame className="text-primary text-xl mr-4 mt-1 h-5 w-5" />
                <div>
                  <h4 className="font-semibold text-card-foreground">Traditional Jiko Grilling</h4>
                  <p className="text-muted-foreground">Authentic charcoal grilling stations for the perfect nyama choma experience</p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button 
                className="btn-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold"
                data-testid="button-view-menu"
              >
                <FileText className="mr-2 h-4 w-4" />
                View Menu
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6 py-3 rounded-lg font-semibold transition-all"
                data-testid="button-reserve-table"
              >
                <Calendar className="mr-2 h-4 w-4" />
                Reserve Table
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
