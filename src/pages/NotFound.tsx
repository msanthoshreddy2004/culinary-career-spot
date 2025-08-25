import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ChefHat } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-subtle">
      <div className="text-center max-w-lg mx-auto px-4">
        <div className="bg-gradient-hero p-6 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
          <ChefHat className="h-12 w-12 text-primary-foreground" />
        </div>
        
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-foreground mb-4">Page Not Found</h2>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          Oops! The page you're looking for seems to have wandered off the menu. 
          Let's get you back to finding great culinary opportunities.
        </p>
        
        <Button 
          onClick={() => window.location.href = '/'}
          className="bg-gradient-hero hover:opacity-90 transition-smooth"
          size="lg"
        >
          <Home className="mr-2 h-5 w-5" />
          Back to Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
