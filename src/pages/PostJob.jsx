import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { 
  ChefHat, 
  ArrowLeft,
  Settings,
  Bell,
  LogOut,
  MapPin,
  DollarSign,
  Clock,
  Users
} from "lucide-react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";

const PostJob = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle job posting logic here
    console.log("Job posted successfully!");
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Navigation */}
      <nav className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-gradient-hero p-2 rounded-lg">
                <ChefHat className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold text-primary">ChefJobs</span>
            </Link>
            
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <Button variant="ghost" size="sm">
                <Bell className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link to="/owner-profile">
                  <Settings className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link to="/">
                  <LogOut className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button variant="outline" size="sm" asChild>
            <Link to="/owner-dashboard">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Link>
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-primary">Post New Job</h1>
            <p className="text-muted-foreground">Find the perfect chef for your restaurant</p>
          </div>
        </div>

        {/* Job Posting Form */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle>Job Details</CardTitle>
            <CardDescription>
              Fill in the details below to attract the right candidates
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Basic Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="title">Job Title *</Label>
                  <Input 
                    id="title" 
                    placeholder="e.g., Head Chef, Sous Chef, Kitchen Assistant"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="company">Restaurant/Company Name *</Label>
                  <Input 
                    id="company" 
                    placeholder="Your restaurant name"
                    required
                  />
                </div>
              </div>

              {/* Location and Salary */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="location">Location *</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input 
                      id="location" 
                      placeholder="City, State"
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="salary">Salary Range *</Label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input 
                      id="salary" 
                      placeholder="₹25,000 - ₹40,000"
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Experience and Cuisine */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="experience">Experience Required</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select experience level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0-1">0-1 years (Entry Level)</SelectItem>
                      <SelectItem value="1-3">1-3 years</SelectItem>
                      <SelectItem value="3-5">3-5 years</SelectItem>
                      <SelectItem value="5-10">5-10 years</SelectItem>
                      <SelectItem value="10+">10+ years (Senior)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="cuisine">Cuisine Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select cuisine type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="indian">Indian</SelectItem>
                      <SelectItem value="chinese">Chinese</SelectItem>
                      <SelectItem value="italian">Italian</SelectItem>
                      <SelectItem value="continental">Continental</SelectItem>
                      <SelectItem value="multi">Multi-cuisine</SelectItem>
                      <SelectItem value="seafood">Seafood</SelectItem>
                      <SelectItem value="vegetarian">Vegetarian</SelectItem>
                      <SelectItem value="bakery">Bakery & Desserts</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Job Type and Team Size */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="type">Job Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select job type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="full-time">Full-time</SelectItem>
                      <SelectItem value="part-time">Part-time</SelectItem>
                      <SelectItem value="contract">Contract</SelectItem>
                      <SelectItem value="internship">Internship</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="team-size">Kitchen Team Size</Label>
                  <div className="relative">
                    <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input 
                      id="team-size" 
                      placeholder="e.g., 5-10 people"
                      className="pl-10"
                    />
                  </div>
                </div>
              </div>

              {/* Job Description */}
              <div className="space-y-2">
                <Label htmlFor="description">Job Description *</Label>
                <Textarea 
                  id="description"
                  placeholder="Describe the role, responsibilities, and what you're looking for in a candidate..."
                  className="min-h-32"
                  required
                />
              </div>

              {/* Requirements */}
              <div className="space-y-2">
                <Label htmlFor="requirements">Requirements & Skills</Label>
                <Textarea 
                  id="requirements"
                  placeholder="List the required skills, qualifications, and experience..."
                  className="min-h-24"
                />
              </div>

              {/* Benefits */}
              <div className="space-y-2">
                <Label htmlFor="benefits">Benefits & Perks</Label>
                <Textarea 
                  id="benefits"
                  placeholder="Mention benefits like accommodation, meals, insurance, etc..."
                  className="min-h-24"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 pt-6">
                <Button type="submit" className="bg-gradient-hero hover:opacity-90">
                  <Clock className="h-4 w-4 mr-2" />
                  Post Job
                </Button>
                <Button variant="outline" type="button">
                  Save as Draft
                </Button>
                <Button variant="ghost" type="button" asChild>
                  <Link to="/owner-dashboard">
                    Cancel
                  </Link>
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Preview Section */}
        <Card className="shadow-soft mt-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Badge variant="secondary">Preview</Badge>
              How your job will appear to chefs
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="job-card">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-primary">Your Job Title</h3>
                  <p className="text-muted-foreground">Your Restaurant Name</p>
                </div>
                <Badge className="bg-gradient-hero text-primary-foreground">New</Badge>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="h-4 w-4 text-accent-deep" />
                  <span>Location will appear here</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <DollarSign className="h-4 w-4 text-secondary-rich" />
                  <span>Salary range</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span>Experience level</span>
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground">Your job description will appear here...</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PostJob;