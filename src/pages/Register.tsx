import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChefHat, Store, Eye, EyeOff, ArrowLeft, CheckCircle, Star, Users, Building2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Register = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [userType, setUserType] = useState<"chef" | "owner" | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false
  });

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords don't match!",
        variant: "destructive"
      });
      return;
    }
    
    // Frontend only - simulate successful registration
    toast({
      title: "Welcome to ChefJobs!",
      description: "Your account has been created successfully.",
    });
    
    // Redirect based on user type
    if (userType === "owner") {
      navigate('/owner-dashboard');
    } else {
      navigate('/chef-dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary-glow transition-smooth mb-4">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          
          <div className="flex justify-center mb-4">
            <div className="bg-gradient-hero p-3 rounded-xl">
              <ChefHat className="h-8 w-8 text-primary-foreground" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-primary">Join ChefJobs</h1>
          <p className="text-muted-foreground">Start your culinary journey with us</p>
        </div>

        <Card className="shadow-medium border-border">
          <CardHeader>
            <CardTitle>Create Your Account</CardTitle>
            <CardDescription>
              First, let us know what type of account you'd like to create
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            {!userType ? (
              /* Role Selection */
              <div className="grid md:grid-cols-2 gap-4">
                <button
                  onClick={() => setUserType("chef")}
                  className="p-6 border-2 border-border rounded-xl hover:border-primary hover:bg-primary/5 transition-smooth text-left group"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-gradient-hero rounded-lg group-hover:scale-110 transition-transform">
                      <ChefHat className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold">I'm a Chef</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Looking for exciting culinary opportunities in PGs and restaurants
                  </p>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-accent-deep" />
                      <span>Browse job opportunities</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-accent-deep" />
                      <span>Create professional profile</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-accent-deep" />
                      <span>Apply to jobs instantly</span>
                    </div>
                  </div>
                </button>

                <button
                  onClick={() => setUserType("owner")}
                  className="p-6 border-2 border-border rounded-xl hover:border-primary hover:bg-primary/5 transition-smooth text-left group"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-gradient-warm rounded-lg group-hover:scale-110 transition-transform">
                      <Store className="h-6 w-6 text-secondary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold">I'm a PG/Restaurant Owner</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Looking to hire talented chefs for my establishment
                  </p>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-accent-deep" />
                      <span>Post job openings</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-accent-deep" />
                      <span>Browse chef profiles</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-accent-deep" />
                      <span>Manage applications</span>
                    </div>
                  </div>
                </button>
              </div>
            ) : (
              /* Registration Form */
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <Badge variant="outline" className="border-primary text-primary">
                    {userType === "chef" ? (
                      <>
                        <ChefHat className="h-3 w-3 mr-1" />
                        Chef Account
                      </>
                    ) : (
                      <>
                        <Store className="h-3 w-3 mr-1" />
                        PG/Restaurant Owner
                      </>
                    )}
                  </Badge>
                  <button
                    onClick={() => setUserType(null)}
                    className="text-sm text-muted-foreground hover:text-primary transition-smooth"
                  >
                    Change
                  </button>
                </div>

                <form onSubmit={handleRegister} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <div className="relative">
                        <Input
                          id="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="Create a strong password"
                          value={formData.password}
                          onChange={(e) => setFormData({...formData, password: e.target.value})}
                          className="pr-10"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-smooth"
                        >
                          {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </button>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">Confirm Password</Label>
                      <div className="relative">
                        <Input
                          id="confirmPassword"
                          type={showConfirmPassword ? "text" : "password"}
                          placeholder="Confirm your password"
                          value={formData.confirmPassword}
                          onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                          className="pr-10"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-smooth"
                        >
                          {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="terms"
                      checked={formData.agreeToTerms}
                      onChange={(e) => setFormData({...formData, agreeToTerms: e.target.checked})}
                      className="w-4 h-4 mt-1 text-primary border-border rounded focus:ring-2 focus:ring-primary/20"
                      required
                    />
                    <label htmlFor="terms" className="text-sm text-muted-foreground">
                      I agree to the{" "}
                      <Link to="/terms" className="text-primary hover:text-primary-glow transition-smooth">
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link to="/privacy" className="text-primary hover:text-primary-glow transition-smooth">
                        Privacy Policy
                      </Link>
                    </label>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-hero hover:opacity-90 transition-smooth"
                    size="lg"
                    disabled={!formData.agreeToTerms}
                  >
                    Create Account
                  </Button>
                </form>
              </div>
            )}

            {userType && (
              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-center text-sm text-muted-foreground">
                  Already have an account?{" "}
                  <Link to="/login" className="text-primary hover:text-primary-glow font-medium transition-smooth">
                    Sign in here
                  </Link>
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Register;