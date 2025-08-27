import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  MapPin, 
  ChefHat, 
  Store, 
  Users, 
  TrendingUp,
  ArrowRight
} from "lucide-react";
import heroImage from "@/assets/chef-hero-image.jpg";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="hero-section text-primary-foreground py-20 lg:py-32 relative overflow-hidden">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Connecting Chefs with
              <span className="block text-secondary-rich">
                PG Owners & Restaurants
              </span>
            </h1>
            
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Find your dream culinary position or hire talented chefs. 
              Join thousands of culinary professionals building amazing food experiences.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 transition-smooth font-semibold text-lg px-8 shadow-glow"
                asChild
              >
                <Link to="/register">
                  <ChefHat className="mr-2 h-5 w-5" />
                  Find Jobs
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary transition-smooth font-semibold text-lg px-8"
                asChild
              >
                <Link to="/register">
                  <Store className="mr-2 h-5 w-5" />
                  Post a Job
                </Link>
              </Button>
            </div>

            {/* Quick Search */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-medium">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input 
                    placeholder="Job title or cuisine type..." 
                    className="pl-10 bg-white border-0 text-foreground placeholder:text-muted-foreground"
                  />
                </div>
                <div className="flex-1 relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input 
                    placeholder="Location..." 
                    className="pl-10 bg-white border-0 text-foreground placeholder:text-muted-foreground"
                  />
                </div>
                <Button className="bg-gradient-warm hover:opacity-90 transition-smooth px-8">
                  <Search className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Stats & Visual Elements */}
          <div className="lg:pl-8">
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20 float" 
                   style={{ animationDelay: '0s' }}>
                <Users className="h-8 w-8 mx-auto mb-3 text-secondary-rich" />
                <div className="text-2xl font-bold">2,500+</div>
                <div className="text-sm text-primary-foreground/80">Active Chefs</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20 float" 
                   style={{ animationDelay: '0.5s' }}>
                <Store className="h-8 w-8 mx-auto mb-3 text-secondary-rich" />
                <div className="text-2xl font-bold">850+</div>
                <div className="text-sm text-primary-foreground/80">Restaurants</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20 float" 
                   style={{ animationDelay: '1s' }}>
                <ChefHat className="h-8 w-8 mx-auto mb-3 text-secondary-rich" />
                <div className="text-2xl font-bold">1,200+</div>
                <div className="text-sm text-primary-foreground/80">Jobs Posted</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20 float" 
                   style={{ animationDelay: '1.5s' }}>
                <TrendingUp className="h-8 w-8 mx-auto mb-3 text-secondary-rich" />
                <div className="text-2xl font-bold">95%</div>
                <div className="text-sm text-primary-foreground/80">Success Rate</div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-primary-foreground/80 font-medium">
                Trusted by leading restaurants and PG owners across India
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;