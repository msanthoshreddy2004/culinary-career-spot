import { ChefHat, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-white p-2 rounded-lg">
                <ChefHat className="h-6 w-6 text-primary" />
              </div>
              <span className="text-xl font-bold">ChefJobs</span>
            </div>
            <p className="text-primary-foreground/80 mb-4 leading-relaxed">
              Connecting talented chefs with amazing opportunities at PG facilities and restaurants across India.
            </p>
            <div className="flex space-x-3">
              <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white hover:text-primary">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white hover:text-primary">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white hover:text-primary">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white hover:text-primary">
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* For Chefs */}
          <div>
            <h3 className="font-semibold text-lg mb-4">For Chefs</h3>
            <ul className="space-y-3 text-primary-foreground/80">
              <li>
                <a href="#" className="hover:text-white transition-smooth">Find Jobs</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-smooth">Browse Companies</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-smooth">Career Tips</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-smooth">Salary Guide</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-smooth">Resume Builder</a>
              </li>
            </ul>
          </div>

          {/* For Employers */}
          <div>
            <h3 className="font-semibold text-lg mb-4">For Employers</h3>
            <ul className="space-y-3 text-primary-foreground/80">
              <li>
                <a href="#" className="hover:text-white transition-smooth">Post a Job</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-smooth">Search Chefs</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-smooth">Pricing Plans</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-smooth">Hiring Guide</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-smooth">Success Stories</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Get in Touch</h3>
            <div className="space-y-3 text-primary-foreground/80">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4" />
                <span>hello@chefjobs.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4" />
                <span>Mumbai, India</span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-6">
              <h4 className="font-medium mb-3">Stay Updated</h4>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
                />
                <Button size="sm" className="bg-white text-primary hover:bg-white/90">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-primary-foreground/80 text-sm">
            © 2024 ChefJobs. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm text-primary-foreground/80">
            <a href="#" className="hover:text-white transition-smooth">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-smooth">Terms of Service</a>
            <a href="#" className="hover:text-white transition-smooth">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;