import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { MapPin, Phone, Mail, Clock, Send, Navigation } from "lucide-react";
import type { InsertContactInquiry } from "@shared/schema";

export default function ContactSection() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [formData, setFormData] = useState<InsertContactInquiry>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    visitType: "",
    message: "",
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactInquiry) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your inquiry. We'll get back to you soon.",
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        visitType: "",
        message: "",
      });
      queryClient.invalidateQueries({ queryKey: ["/api/contact"] });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(formData);
  };

  const handleInputChange = (field: keyof InsertContactInquiry, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-contact-title">
            Plan Your Visit
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto" data-testid="text-contact-description">
            Ready to experience the magic of Canon Mînae? Get in touch with us to book your adventure or learn more about our facilities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-card rounded-xl shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-card-foreground mb-6" data-testid="text-contact-form-title">
                Send Us a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6" data-testid="form-contact">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="block text-sm font-medium text-card-foreground mb-2">
                      First Name
                    </Label>
                    <Input
                      id="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      className="w-full"
                      placeholder="John"
                      required
                      data-testid="input-first-name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="block text-sm font-medium text-card-foreground mb-2">
                      Last Name
                    </Label>
                    <Input
                      id="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      className="w-full"
                      placeholder="Doe"
                      required
                      data-testid="input-last-name"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email" className="block text-sm font-medium text-card-foreground mb-2">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="w-full"
                    placeholder="john@example.com"
                    required
                    data-testid="input-email"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="block text-sm font-medium text-card-foreground mb-2">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone || ""}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="w-full"
                    placeholder="+254 700 000 000"
                    data-testid="input-phone"
                  />
                </div>
                <div>
                  <Label htmlFor="visitType" className="block text-sm font-medium text-card-foreground mb-2">
                    Type of Visit
                  </Label>
                  <Select value={formData.visitType || ""} onValueChange={(value) => handleInputChange("visitType", value)}>
                    <SelectTrigger className="w-full" data-testid="select-visit-type">
                      <SelectValue placeholder="Select visit type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="family">Family Visit</SelectItem>
                      <SelectItem value="camping">Camping</SelectItem>
                      <SelectItem value="corporate">Corporate Retreat</SelectItem>
                      <SelectItem value="hiking">Hiking Adventure</SelectItem>
                      <SelectItem value="dining">Restaurant Reservation</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="message" className="block text-sm font-medium text-card-foreground mb-2">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message || ""}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    rows={4}
                    className="w-full"
                    placeholder="Tell us about your plans..."
                    data-testid="textarea-message"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="btn-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold w-full"
                  disabled={contactMutation.isPending}
                  data-testid="button-send-message"
                >
                  <Send className="mr-2 h-4 w-4" />
                  {contactMutation.isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information & Map */}
          <div className="space-y-8">
            <Card className="bg-card rounded-xl shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-card-foreground mb-6" data-testid="text-contact-info-title">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start" data-testid="contact-address">
                    <MapPin className="text-primary text-xl mr-4 mt-1 h-5 w-5" />
                    <div>
                      <h4 className="font-semibold text-card-foreground">Address</h4>
                      <p className="text-muted-foreground">Nguirubi, Thigio, Kenya</p>
                    </div>
                  </div>
                  <div className="flex items-start" data-testid="contact-phone">
                    <Phone className="text-primary text-xl mr-4 mt-1 h-5 w-5" />
                    <div>
                      <h4 className="font-semibold text-card-foreground">Phone</h4>
                      <p className="text-muted-foreground">+254 700 123 456</p>
                    </div>
                  </div>
                  <div className="flex items-start" data-testid="contact-email">
                    <Mail className="text-primary text-xl mr-4 mt-1 h-5 w-5" />
                    <div>
                      <h4 className="font-semibold text-card-foreground">Email</h4>
                      <p className="text-muted-foreground">info@canonminae.com</p>
                    </div>
                  </div>
                  <div className="flex items-start" data-testid="contact-hours">
                    <Clock className="text-primary text-xl mr-4 mt-1 h-5 w-5" />
                    <div>
                      <h4 className="font-semibold text-card-foreground">Opening Hours</h4>
                      <p className="text-muted-foreground">Daily: 7:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card className="bg-card rounded-xl shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-card-foreground mb-6" data-testid="text-map-title">
                  Find Us
                </h3>
                <div className="w-full h-64 bg-muted rounded-lg flex items-center justify-center" data-testid="map-placeholder">
                  <div className="text-center text-muted-foreground">
                    <MapPin className="text-4xl mb-4 h-16 w-16 mx-auto" />
                    <p className="font-semibold">Interactive Map</p>
                    <p className="text-sm">Google Maps integration</p>
                  </div>
                </div>
                <Button 
                  className="btn-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold w-full mt-4"
                  data-testid="button-get-directions"
                >
                  <Navigation className="mr-2 h-4 w-4" />
                  Get Directions
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
