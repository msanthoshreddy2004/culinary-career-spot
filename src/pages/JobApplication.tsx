import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft,
  Upload,
  MapPin, 
  IndianRupee, 
  Utensils, 
  Clock,
  FileText,
  CheckCircle
} from "lucide-react";
import { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { useToast } from "@/hooks/use-toast";

const JobApplication = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Mock job data
  const jobData = {
    id: id || "1",
    title: "Senior Chef - Italian Cuisine",
    company: "Villa Romana Restaurant",
    location: "Mumbai, Maharashtra",
    salary: "₹45,000 - ₹60,000",
    cuisineType: "Italian",
    experience: "3-5 years"
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Application Submitted!",
      description: "Your application has been sent successfully. The employer will contact you soon.",
    });
    
    setIsSubmitting(false);
    navigate('/dashboard');
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
          Back to Job Details
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Application Form */}
          <div className="lg:col-span-2">
            <Card className="job-card">
              <CardHeader>
                <CardTitle className="text-2xl">Apply for Position</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below to apply for this position
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground">Personal Information</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input id="firstName" placeholder="Enter your first name" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input id="lastName" placeholder="Enter your last name" required />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input id="email" type="email" placeholder="your.email@example.com" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input id="phone" type="tel" placeholder="+91 98765 43210" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="location">Current Location *</Label>
                      <Input id="location" placeholder="City, State" required />
                    </div>
                  </div>

                  {/* Professional Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground">Professional Information</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="experience">Total Experience *</Label>
                        <Select required>
                          <SelectTrigger>
                            <SelectValue placeholder="Select experience" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="0-1">0-1 years</SelectItem>
                            <SelectItem value="1-3">1-3 years</SelectItem>
                            <SelectItem value="3-5">3-5 years</SelectItem>
                            <SelectItem value="5-8">5-8 years</SelectItem>
                            <SelectItem value="8+">8+ years</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="currentSalary">Current Salary</Label>
                        <Input id="currentSalary" placeholder="₹ 35,000" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="expectedSalary">Expected Salary *</Label>
                      <Input id="expectedSalary" placeholder="₹ 50,000" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="skills">Key Skills *</Label>
                      <Textarea 
                        id="skills" 
                        placeholder="List your key culinary skills (e.g., Italian cuisine, pasta making, sauce preparation...)"
                        className="min-h-[100px]"
                        required 
                      />
                    </div>
                  </div>

                  {/* Documents */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground">Documents</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="resume">Resume/CV *</Label>
                        <div className="border-2 border-dashed border-border rounded-lg p-4 text-center hover:border-primary transition-smooth cursor-pointer">
                          <Upload className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
                          <p className="text-sm text-muted-foreground">
                            Click to upload or drag and drop
                          </p>
                          <p className="text-xs text-muted-foreground">PDF, DOC, DOCX (Max 5MB)</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="portfolio">Portfolio (Optional)</Label>
                        <div className="border-2 border-dashed border-border rounded-lg p-4 text-center hover:border-primary transition-smooth cursor-pointer">
                          <Upload className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
                          <p className="text-sm text-muted-foreground">
                            Upload portfolio images
                          </p>
                          <p className="text-xs text-muted-foreground">JPG, PNG (Max 10MB)</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Cover Letter */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground">Cover Letter</h3>
                    <div className="space-y-2">
                      <Label htmlFor="coverLetter">Why are you interested in this position? *</Label>
                      <Textarea 
                        id="coverLetter"
                        placeholder="Tell us why you're the perfect fit for this role..."
                        className="min-h-[120px]"
                        required
                      />
                    </div>
                  </div>

                  {/* Availability */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground">Availability</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="joinDate">Available to Join *</Label>
                        <Select required>
                          <SelectTrigger>
                            <SelectValue placeholder="Select availability" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="immediate">Immediately</SelectItem>
                            <SelectItem value="15days">Within 15 days</SelectItem>
                            <SelectItem value="1month">Within 1 month</SelectItem>
                            <SelectItem value="2months">Within 2 months</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="noticePeriod">Current Notice Period</Label>
                        <Input id="noticePeriod" placeholder="e.g., 30 days" />
                      </div>
                    </div>
                  </div>

                  {/* Terms */}
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" required />
                    <Label htmlFor="terms" className="text-sm text-muted-foreground">
                      I agree that the information provided is accurate and I consent to the processing of my personal data for recruitment purposes.
                    </Label>
                  </div>

                  {/* Submit Button */}
                  <div className="flex gap-4 pt-4">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 bg-gradient-hero hover:opacity-90 transition-smooth"
                      size="lg"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Submitting...
                        </>
                      ) : (
                        <>
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Submit Application
                        </>
                      )}
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => navigate(-1)}
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      Cancel
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Job Summary Sidebar */}
          <div className="space-y-6">
            <Card className="job-card">
              <CardHeader>
                <CardTitle className="text-lg">Job Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{jobData.title}</h4>
                  <p className="text-sm text-muted-foreground">{jobData.company}</p>
                </div>
                
                <div className="space-y-3">
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
              </CardContent>
            </Card>

            <Card className="job-card">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Application Tips
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <Badge variant="outline" className="text-xs">Tip 1</Badge>
                  <p className="text-sm text-muted-foreground">
                    Highlight your experience with Italian cuisine specifically
                  </p>
                </div>
                <div className="space-y-2">
                  <Badge variant="outline" className="text-xs">Tip 2</Badge>
                  <p className="text-sm text-muted-foreground">
                    Include photos of your signature dishes in your portfolio
                  </p>
                </div>
                <div className="space-y-2">
                  <Badge variant="outline" className="text-xs">Tip 3</Badge>
                  <p className="text-sm text-muted-foreground">
                    Mention any specialized certifications or training
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobApplication;