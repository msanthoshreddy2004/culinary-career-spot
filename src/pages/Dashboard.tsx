import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ChefHat, 
  Store, 
  User, 
  LogOut, 
  Settings,
  Bell,
  Briefcase,
  Heart,
  Plus,
  Eye
} from "lucide-react";
import { Link } from "react-router-dom";
import JobCard from "@/components/JobCard";

const Dashboard = () => {
  const [userType] = useState<"chef" | "owner">("chef"); // Demo - would come from auth
  
  const recentJobs = [
    {
      title: "Sous Chef",
      company: "Ocean View Restaurant",
      location: "Goa",
      salary: "₹25,000 - ₹35,000",
      cuisineType: "Seafood",
      experience: "2-4 years",
      rating: 4.6,
      description: "Join our beachside team for an exciting culinary adventure with fresh seafood."
    },
    {
      title: "Kitchen Assistant", 
      company: "Urban PG",
      location: "Bangalore",
      salary: "₹18,000 - ₹25,000",
      cuisineType: "Multi-cuisine",
      experience: "0-2 years", 
      description: "Perfect entry-level position for passionate culinary enthusiasts."
    }
  ];

  const myJobs = [
    {
      title: "Head Chef Position",
      applications: 12,
      posted: "3 days ago",
      status: "active"
    },
    {
      title: "Kitchen Helper",
      applications: 8,
      posted: "1 week ago", 
      status: "active"
    }
  ];

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
              <Button variant="ghost" size="sm">
                <Bell className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link to={userType === "chef" ? "/chef-profile" : "/owner-profile"}>
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

      {/* Dashboard Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-primary">
              {userType === "chef" ? "Chef Dashboard" : "Employer Dashboard"}
            </h1>
            <p className="text-muted-foreground">
              {userType === "chef" 
                ? "Find your next culinary opportunity" 
                : "Manage your job postings and find great chefs"
              }
            </p>
          </div>
          
          <div className="flex gap-3">
            <Button asChild>
              <Link to={userType === "chef" ? "/chef-profile" : "/owner-profile"}>
                <User className="h-4 w-4 mr-2" />
                View Profile
              </Link>
            </Button>
            
            {userType === "owner" && (
              <Button className="bg-gradient-hero hover:opacity-90">
                <Plus className="h-4 w-4 mr-2" />
                Post New Job
              </Button>
            )}
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">
                    {userType === "chef" ? "Applications Sent" : "Total Jobs Posted"}
                  </p>
                  <p className="text-2xl font-bold text-primary">
                    {userType === "chef" ? "23" : "12"}
                  </p>
                </div>
                <div className="bg-gradient-hero p-2 rounded-lg">
                  <Briefcase className="h-6 w-6 text-primary-foreground" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">
                    {userType === "chef" ? "Saved Jobs" : "Total Applications"}
                  </p>
                  <p className="text-2xl font-bold text-primary">
                    {userType === "chef" ? "8" : "47"}
                  </p>
                </div>
                <div className="bg-gradient-warm p-2 rounded-lg">
                  {userType === "chef" ? (
                    <Heart className="h-6 w-6 text-secondary-foreground" />
                  ) : (
                    <User className="h-6 w-6 text-secondary-foreground" />
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">
                    {userType === "chef" ? "Profile Views" : "Shortlisted"}
                  </p>
                  <p className="text-2xl font-bold text-primary">
                    {userType === "chef" ? "156" : "15"}
                  </p>
                </div>
                <div className="bg-accent p-2 rounded-lg">
                  <Eye className="h-6 w-6 text-accent-deep" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Success Rate</p>
                  <p className="text-2xl font-bold text-primary">
                    {userType === "chef" ? "22%" : "78%"}
                  </p>
                </div>
                <div className="bg-secondary p-2 rounded-lg">
                  {userType === "chef" ? (
                    <ChefHat className="h-6 w-6 text-secondary-rich" />
                  ) : (
                    <Store className="h-6 w-6 text-secondary-rich" />
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {userType === "chef" ? (
              <>
                {/* Recommended Jobs */}
                <Card className="shadow-soft">
                  <CardHeader>
                    <CardTitle>Recommended for You</CardTitle>
                    <CardDescription>
                      Jobs that match your skills and preferences
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentJobs.map((job, index) => (
                        <JobCard key={index} {...job} />
                      ))}
                    </div>
                    
                    <div className="text-center mt-6">
                      <Button variant="outline">View All Jobs</Button>
                    </div>
                  </CardContent>
                </Card>
              </>
            ) : (
              <>
                {/* Posted Jobs */}
                <Card className="shadow-soft">
                  <CardHeader>
                    <CardTitle>Your Job Postings</CardTitle>
                    <CardDescription>
                      Manage your posted jobs and applications
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {myJobs.map((job, index) => (
                        <div key={index} className="border border-border rounded-lg p-4 hover:bg-muted/20 transition-smooth">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-semibold">{job.title}</h3>
                              <p className="text-sm text-muted-foreground">
                                {job.applications} applications • Posted {job.posted}
                              </p>
                            </div>
                            <div className="flex gap-2">
                              <Badge variant="outline" className="text-xs">
                                {job.status}
                              </Badge>
                              <Button size="sm" variant="outline">
                                View Applications
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="text-center mt-6">
                      <Button className="bg-gradient-hero hover:opacity-90">
                        <Plus className="h-4 w-4 mr-2" />
                        Post New Job
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Profile Completion */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-lg">Profile Completion</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Profile Progress</span>
                    <span className="text-sm font-medium">85%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-gradient-hero h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link to={userType === "chef" ? "/chef-profile" : "/owner-profile"}>
                      Complete Profile
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-lg">Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-medium">
                        {userType === "chef" 
                          ? "Applied to Sous Chef position" 
                          : "New application received"
                        }
                      </p>
                      <p className="text-muted-foreground">2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary-rich rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-medium">
                        {userType === "chef" 
                          ? "Profile viewed by employer" 
                          : "Job posting published"
                        }
                      </p>
                      <p className="text-muted-foreground">5 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-deep rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-medium">
                        {userType === "chef" 
                          ? "Saved new job posting" 
                          : "Candidate shortlisted"
                        }
                      </p>
                      <p className="text-muted-foreground">1 day ago</p>
                    </div>
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

export default Dashboard;