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
  Plus,
  Eye
} from "lucide-react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";

const OwnerDashboard = () => {
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
    },
    {
      title: "Sous Chef - Italian",
      applications: 15,
      posted: "5 days ago",
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

      {/* Dashboard Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-primary">Employer Dashboard</h1>
            <p className="text-muted-foreground">Manage your job postings and find great chefs</p>
          </div>
          
          <div className="flex gap-3">
            <Button asChild>
              <Link to="/owner-profile">
                <User className="h-4 w-4 mr-2" />
                View Profile
              </Link>
            </Button>
            
            <Button className="bg-gradient-hero hover:opacity-90" asChild>
              <Link to="/post-job">
                <Plus className="h-4 w-4 mr-2" />
                Post New Job
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
                  <p className="text-sm text-muted-foreground">Total Jobs Posted</p>
                  <p className="text-2xl font-bold text-primary">12</p>
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
                  <p className="text-sm text-muted-foreground">Total Applications</p>
                  <p className="text-2xl font-bold text-primary">47</p>
                </div>
                <div className="bg-gradient-warm p-2 rounded-lg">
                  <User className="h-6 w-6 text-secondary-foreground" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Shortlisted</p>
                  <p className="text-2xl font-bold text-primary">15</p>
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
                  <p className="text-2xl font-bold text-primary">78%</p>
                </div>
                <div className="bg-secondary p-2 rounded-lg">
                  <Store className="h-6 w-6 text-secondary-rich" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
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
                  <Button className="bg-gradient-hero hover:opacity-90" asChild>
                    <Link to="/post-job">
                      <Plus className="h-4 w-4 mr-2" />
                      Post New Job
                    </Link>
                  </Button>
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
                    <span className="text-sm font-medium">92%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-gradient-hero h-2 rounded-full" style={{ width: '92%' }}></div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link to="/owner-profile">
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
                      <p className="font-medium">New application received</p>
                      <p className="text-muted-foreground">2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary-rich rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-medium">Job posting published</p>
                      <p className="text-muted-foreground">5 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-deep rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-medium">Candidate shortlisted</p>
                      <p className="text-muted-foreground">1 day ago</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start" size="sm" asChild>
                  <Link to="/post-job">
                    <Plus className="h-4 w-4 mr-2" />
                    Post New Job
                  </Link>
                </Button>
                <Button variant="outline" className="w-full justify-start" size="sm">
                  <Eye className="h-4 w-4 mr-2" />
                  View All Applications
                </Button>
                <Button variant="outline" className="w-full justify-start" size="sm">
                  <User className="h-4 w-4 mr-2" />
                  Browse Chef Profiles
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OwnerDashboard;