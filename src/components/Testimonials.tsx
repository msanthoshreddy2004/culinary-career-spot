import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Head Chef at Mumbai Delights PG",
      image: "/placeholder-avatar-1.jpg", 
      rating: 5,
      text: "ChefJobs helped me find the perfect position where I could showcase my North Indian cooking skills. The process was smooth and the opportunities were exactly what I was looking for."
    },
    {
      name: "Rajesh Kumar",
      role: "PG Owner",
      image: "/placeholder-avatar-2.jpg",
      rating: 5, 
      text: "Finding skilled chefs was always a challenge until I discovered ChefJobs. Within a week, I had multiple qualified candidates and hired an amazing chef who has transformed our meal quality."
    },
    {
      name: "Maria D'Souza", 
      role: "Sous Chef at Coastal Kitchen",
      image: "/placeholder-avatar-3.jpg",
      rating: 5,
      text: "As a beginner in the culinary world, ChefJobs provided me with opportunities to grow. The detailed job descriptions and company reviews helped me make the right career choice."
    }
  ];

  return (
    <section className="py-16 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            What Our Community Says
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of chefs and PG owners who have found success through our platform.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-background border border-border rounded-xl p-6 shadow-soft hover:shadow-medium transition-smooth animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Quote Icon */}
              <div className="mb-4">
                <Quote className="h-8 w-8 text-secondary-rich" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-secondary-rich text-secondary-rich" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-semibold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;