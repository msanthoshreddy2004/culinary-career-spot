import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { 
  MapPin, 
  Clock, 
  IndianRupee, 
  Utensils, 
  Star,
  Calendar,
  Users,
  Building,
  ArrowLeft,
  Heart
} from "lucide-react";
import { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";

const JobDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isSaved, setIsSaved] = useState(false);

  // Mock job data - in real app this would come from API based on id
  const jobData = {
    id: id || "1",
    title: "Senior Chef - Italian Cuisine",
    company: "Villa Romana Restaurant",
    location: "Mumbai, Maharashtra",
    salary: "₹45,000 - ₹60,000",
    cuisineType: "Italian",
    experience: "3-5 years",
    rating: 4.5,
    isUrgent: true,
    postedDate: "2 days ago",
    applicants: 15,
    description: "We are seeking an experienced Italian Chef to join our prestigious restaurant. The ideal candidate will have extensive knowledge of traditional Italian cooking techniques and modern culinary innovations.",
    requirements: [
      "3-5 years of experience in Italian cuisine",
      "Knowledge of pasta making and sauce preparation",
      "Experience with wood-fired oven cooking",
      "Ability to work in fast-paced environment",
      "Food safety certification required"
    ],
    responsibilities: [
      "Prepare authentic Italian dishes following traditional recipes",
      "Manage kitchen operations during assigned shifts",
      "Train junior kitchen staff on Italian cooking techniques",
      "Maintain food quality and presentation standards",
      "Collaborate with management on menu development"
    ],
    benefits: [
      "Competitive salary with performance bonuses",
      "Health insurance coverage",
      "Professional development opportunities",
      "Meal allowances",
      "Flexible working hours"
    ],
    companyInfo: {
      name: "Villa Romana Restaurant",
      established: "2015",
      employees: "50-100",
      type: "Fine Dining Restaurant",
      description: "Villa Romana is a premier Italian restaurant known for authentic cuisine and exceptional dining experience."
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Button 
          variant="ghost" 
          onClick={() => navigate(-1)}
          className="mb-6 text-muted-foreground hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Jobs
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Job Header */}
            <Card className="job-card">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <CardTitle className="text-2xl text-foreground">
                        {jobData.title}
                      </CardTitle>
                      {jobData.isUrgent && (
                        <Badge variant="destructive">Urgent</Badge>
                      )}
                    </div>
                    <p className="text-lg text-muted-foreground font-medium mb-2">
                      {jobData.company}
                    </p>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-secondary-rich text-secondary-rich" />
                      <span className="text-sm text-muted-foreground">{jobData.rating}/5</span>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => setIsSaved(!isSaved)}
                    className="p-2 rounded-full hover:bg-muted transition-smooth"
                  >
                    <Heart 
                      className={`h-6 w-6 transition-smooth ${
                        isSaved 
                          ? 'fill-red-500 text-red-500' 
                          : 'text-muted-foreground hover:text-red-500'
                      }`} 
                    />
                  </button>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 text-accent-deep" />
                    <span>{jobData.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <IndianRupee className="h-4 w-4 text-secondary-rich" />
                    <span className="font-medium">{jobData.salary}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Utensils className="h-4 w-4 text-primary" />
                    <span>{jobData.cuisineType}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 text-accent-deep" />
                    <span>{jobData.experience}</span>
                  </div>
                </div>
              </CardHeader>
            </Card>

            {/* Job Description */}
            <Card className="job-card">
              <CardHeader>
                <CardTitle>Job Description</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {jobData.description}
                </p>
              </CardContent>
            </Card>

            {/* Requirements */}
            <Card className="job-card">
              <CardHeader>
                <CardTitle>Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {jobData.requirements.map((req, index) => (
                    <li key={index} className="flex items-start gap-2 text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      {req}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Responsibilities */}
            <Card className="job-card">
              <CardHeader>
                <CardTitle>Responsibilities</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {jobData.responsibilities.map((resp, index) => (
                    <li key={index} className="flex items-start gap-2 text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-secondary-rich rounded-full mt-2 flex-shrink-0" />
                      {resp}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Benefits */}
            <Card className="job-card">
              <CardHeader>
                <CardTitle>Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {jobData.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2 text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-accent-deep rounded-full mt-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Apply Section */}
            <Card className="job-card">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <Button 
                    asChild
                    className="w-full bg-gradient-hero hover:opacity-90 transition-smooth"
                    size="lg"
                  >
                    <Link to={`/apply/${jobData.id}`}>
                      Apply Now
                    </Link>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    size="lg"
                  >
                    Save Job
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Job Stats */}
            <Card className="job-card">
              <CardHeader>
                <CardTitle className="text-lg">Job Statistics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>Posted</span>
                  </div>
                  <span className="text-sm font-medium">{jobData.postedDate}</span>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span>Applicants</span>
                  </div>
                  <span className="text-sm font-medium">{jobData.applicants}</span>
                </div>
              </CardContent>
            </Card>

            {/* Company Info */}
            <Card className="job-card">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Building className="h-5 w-5" />
                  About Company
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="font-medium text-foreground">{jobData.companyInfo.name}</p>
                  <p className="text-sm text-muted-foreground">{jobData.companyInfo.type}</p>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {jobData.companyInfo.description}
                </p>
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div>
                    <p className="text-xs text-muted-foreground">Established</p>
                    <p className="text-sm font-medium">{jobData.companyInfo.established}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Employees</p>
                    <p className="text-sm font-medium">{jobData.companyInfo.employees}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;