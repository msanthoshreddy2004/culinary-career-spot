import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  ChefHat, 
  User, 
  LogOut, 
  Settings,
  Bell,
  Briefcase,
  Heart,
  Eye
} from "lucide-react";
import { Link } from "react-router-dom";
import JobCard from "@/components/JobCard";
import { ThemeToggle } from "@/components/ThemeToggle";

const ChefDashboard = () => {
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
                <Link to="/chef-profile">
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
            <h1 className="text-3xl font-bold text-primary">Chef Dashboard</h1>
            <p className="text-muted-foreground">Find your next culinary opportunity</p>
          </div>
          
          <div className="flex gap-3">
            <Button asChild>
              <Link to="/chef-profile">
                <User className="h-4 w-4 mr-2" />
                View Profile
              </Link>
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Applications Sent</p>
                  <p className="text-2xl font-bold text-primary">23</p>
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
                  <p className="text-sm text-muted-foreground">Saved Jobs</p>
                  <p className="text-2xl font-bold text-primary">8</p>
                </div>
                <div className="bg-gradient-warm p-2 rounded-lg">
                  <Heart className="h-6 w-6 text-secondary-foreground" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Profile Views</p>
                  <p className="text-2xl font-bold text-primary">156</p>
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
                  <p className="text-2xl font-bold text-primary">22%</p>
                </div>
                <div className="bg-secondary p-2 rounded-lg">
                  <ChefHat className="h-6 w-6 text-secondary-rich" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
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
                    <Link to="/chef-profile">
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
                      <p className="font-medium">Applied to Sous Chef position</p>
                      <p className="text-muted-foreground">2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary-rich rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-medium">Profile viewed by employer</p>
                      <p className="text-muted-foreground">5 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-deep rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-medium">Saved new job posting</p>
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

export default ChefDashboard;