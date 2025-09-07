import { Button } from "@/components/ui/button";
import { Utensils, Leaf, Flame, FileText, Calendar } from "lucide-react";

export default function DiningSection() {
  return (
    <section id="dining" className="py-16 section-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-dining-title">
            Executive Dining Experience
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto" data-testid="text-dining-description">
            Indulge in premium cuisine at our exclusive resort restaurant. Our chef creates exceptional meals using the finest ingredients in an elegant private setting.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://theexpatmummy.com/wp-content/uploads/2021/05/Talisman-nairobi-.jpg" 
              alt="Garden restaurant terrace"
              className="rounded-xl shadow-lg w-full"
              data-testid="img-restaurant-terrace"
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-card-foreground mb-6" data-testid="text-dining-subtitle">
              Gourmet Cuisine & Premium Service
            </h3>
            <p className="text-muted-foreground mb-8" data-testid="text-dining-intro">
              Our executive chef creates exceptional dining experiences featuring premium ingredients and refined presentation. Enjoy personalized service in our exclusive resort dining rooms and private terrace settings.
            </p>

            <div className="space-y-4">
              <div className="flex items-start" data-testid="feature-kenyan-specialties">
                <Utensils className="text-primary text-xl mr-4 mt-1 h-5 w-5" />
                <div>
                  <h4 className="font-semibold text-card-foreground">Signature Menu</h4>
                  <p className="text-muted-foreground">Curated selection of gourmet dishes with international cuisine and local specialties</p>
                </div>
              </div>
              <div className="flex items-start" data-testid="feature-farm-to-table">
                <Leaf className="text-primary text-xl mr-4 mt-1 h-5 w-5" />
                <div>
                  <h4 className="font-semibold text-card-foreground">Premium Ingredients</h4>
                  <p className="text-muted-foreground">Finest quality ingredients sourced exclusively for our resort guests</p>
                </div>
              </div>
              <div className="flex items-start" data-testid="feature-bbq-grills">
                <Flame className="text-primary text-xl mr-4 mt-1 h-5 w-5" />
                <div>
                  <h4 className="font-semibold text-card-foreground">Private BBQ Service</h4>
                  <p className="text-muted-foreground">Personal chef service for exclusive outdoor grilling experiences</p>
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
