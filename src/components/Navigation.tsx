import { Button } from "@/components/ui/button";
import { ChefHat, LogIn, UserPlus, Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-card/95 backdrop-blur-md border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-gradient-hero p-2 rounded-lg">
              <ChefHat className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-primary">ChefJobs</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#jobs" className="text-foreground hover:text-primary transition-smooth font-medium">
              Find Jobs
            </a>
            <a href="#post-job" className="text-foreground hover:text-primary transition-smooth font-medium">
              Post a Job
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-smooth font-medium">
              About
            </a>
            <div className="flex items-center space-x-3">
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary" asChild>
                <Link to="/login">
                  <LogIn className="h-4 w-4 mr-2" />
                  Login
                </Link>
              </Button>
              <Button size="sm" className="bg-gradient-hero hover:opacity-90 transition-smooth" asChild>
                <Link to="/register">
                  <UserPlus className="h-4 w-4 mr-2" />
                  Sign Up
                </Link>
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-smooth"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border mt-4">
            <div className="flex flex-col space-y-4">
              <a href="#jobs" className="text-foreground hover:text-primary transition-smooth font-medium">
                Find Jobs
              </a>
              <a href="#post-job" className="text-foreground hover:text-primary transition-smooth font-medium">
                Post a Job
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition-smooth font-medium">
                About
              </a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="ghost" size="sm" className="justify-start" asChild>
                  <Link to="/login">
                    <LogIn className="h-4 w-4 mr-2" />
                    Login
                  </Link>
                </Button>
                <Button size="sm" className="bg-gradient-hero hover:opacity-90 transition-smooth justify-start" asChild>
                  <Link to="/register">
                    <UserPlus className="h-4 w-4 mr-2" />
                    Sign Up
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;