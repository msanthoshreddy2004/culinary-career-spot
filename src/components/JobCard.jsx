import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Clock, 
  IndianRupee, 
  Utensils, 
  Star,
  Heart
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const JobCard = ({
  id,
  title,
  company,
  location,
  salary,
  cuisineType,
  experience,
  rating,
  isUrgent = false,
  description
}) => {
  const [isSaved, setIsSaved] = useState(false);
  
  // Generate consistent ID if none provided
  const jobId = id || title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');

  return (
    <div className="job-card group">
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-smooth">
              {title}
            </h3>
            {isUrgent && (
              <Badge variant="destructive" className="text-xs">
                Urgent
              </Badge>
            )}
          </div>
          <p className="text-muted-foreground font-medium">{company}</p>
          {rating && (
            <div className="flex items-center gap-1 mt-1">
              <Star className="h-4 w-4 fill-secondary-rich text-secondary-rich" />
              <span className="text-sm text-muted-foreground">{rating}/5</span>
            </div>
          )}
        </div>
        
        <button
          onClick={() => setIsSaved(!isSaved)}
          className="p-2 rounded-full hover:bg-muted transition-smooth"
        >
          <Heart 
            className={`h-5 w-5 transition-smooth ${
              isSaved 
                ? 'fill-red-500 text-red-500' 
                : 'text-muted-foreground hover:text-red-500'
            }`} 
          />
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4 text-accent-deep" />
          <span>{location}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <IndianRupee className="h-4 w-4 text-secondary-rich" />
          <span className="font-medium">{salary}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Utensils className="h-4 w-4 text-primary" />
          <span>{cuisineType}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Clock className="h-4 w-4 text-accent-deep" />
          <span>{experience}</span>
        </div>
      </div>

      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
        {description}
      </p>

      <div className="flex gap-3">
        <Button 
          asChild
          className="flex-1 bg-gradient-hero hover:opacity-90 transition-smooth"
          size="sm"
        >
          <Link to={`/apply/${jobId}`}>
            Apply Now
          </Link>
        </Button>
        <Button 
          asChild
          variant="outline" 
          size="sm"
          className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
        >
          <Link to={`/job/${jobId}`}>
            View Details
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default JobCard;