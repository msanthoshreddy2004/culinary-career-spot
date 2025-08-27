import JobCard from "./JobCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, Flame } from "lucide-react";

const FeaturedJobs = () => {
  const featuredJobs = [
    {
      title: "Head Chef",
      company: "The Spice Route PG",
      location: "Mumbai, Maharashtra",
      salary: "₹35,000 - ₹45,000",
      cuisineType: "North Indian",
      experience: "3-5 years",
      rating: 4.8,
      isUrgent: true,
      description: "Looking for an experienced head chef to manage kitchen operations and create authentic North Indian dishes for our premium PG facility."
    },
    {
      title: "Sous Chef",
      company: "Coastal Kitchen Restaurant",
      location: "Goa",
      salary: "₹25,000 - ₹35,000",
      cuisineType: "Seafood & Continental",
      experience: "2-4 years",
      rating: 4.6,
      description: "Join our beachside restaurant team as a sous chef specializing in fresh seafood and continental cuisine."
    },
    {
      title: "Kitchen Assistant",
      company: "Green Valley PG",
      location: "Bangalore, Karnataka",
      salary: "₹18,000 - ₹25,000",
      cuisineType: "Multi-cuisine",
      experience: "0-2 years",
      rating: 4.4,
      description: "Entry-level position for passionate individuals to start their culinary journey in a supportive environment."
    },
    {
      title: "Pastry Chef",
      company: "Sweet Dreams Bakery & PG",
      location: "Pune, Maharashtra",
      salary: "₹30,000 - ₹40,000",
      cuisineType: "Bakery & Desserts",
      experience: "2-3 years",
      rating: 4.7,
      isUrgent: true,
      description: "Creative pastry chef needed to develop innovative desserts and manage bakery operations for our upscale PG."
    },
    {
      title: "Regional Cuisine Specialist",
      company: "Heritage Foods Restaurant",
      location: "Chennai, Tamil Nadu",
      salary: "₹28,000 - ₹38,000",
      cuisineType: "South Indian",
      experience: "3-6 years",
      rating: 4.9,
      description: "Authentic South Indian cuisine expert needed to preserve traditional flavors and techniques."
    },
    {
      title: "Executive Chef",
      company: "Luxury Stays PG Chain",
      location: "Delhi NCR",
      salary: "₹50,000 - ₹70,000",
      cuisineType: "Multi-cuisine",
      experience: "5+ years",
      rating: 4.8,
      description: "Leadership role managing multiple kitchen locations and developing standardized recipes across our PG chain."
    }
  ];

  return (
    <section className="py-16 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Flame className="h-6 w-6 text-secondary-rich" />
            <h2 className="text-3xl lg:text-4xl font-bold text-primary">
              Featured Job Opportunities
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover handpicked opportunities from top PG owners and restaurants. 
            Start your culinary journey with the best in the industry.
          </p>
        </div>

        {/* Jobs Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
          {featuredJobs.map((job, index) => (
            <div 
              key={index}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <JobCard {...job} />
            </div>
          ))}
        </div>

        {/* View All Jobs CTA */}
        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-gradient-hero hover:opacity-90 transition-smooth text-lg px-8"
          >
            View All Jobs
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobs;