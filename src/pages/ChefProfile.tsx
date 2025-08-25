import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  User, 
  MapPin, 
  Phone, 
  Mail, 
  IndianRupee, 
  Upload, 
  ChefHat,
  Star,
  Calendar,
  Award,
  Plus,
  X
} from "lucide-react";

const ChefProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [skills, setSkills] = useState(["North Indian", "South Indian", "Continental", "Chinese"]);
  const [newSkill, setNewSkill] = useState("");

  const [profileData, setProfileData] = useState({
    name: "Priya Sharma",
    email: "priya.sharma@email.com",
    phone: "+91 98765 43210",
    location: "Mumbai, Maharashtra",
    experience: "5",
    expectedSalary: "35000",
    bio: "Passionate chef with 5 years of experience in creating authentic North Indian cuisine. Specialized in traditional cooking methods and modern presentation techniques.",
    cuisines: ["North Indian", "Mughlai", "Continental"],
    availability: "immediate"
  });

  const addSkill = () => {
    if (newSkill && !skills.includes(newSkill)) {
      setSkills([...skills, newSkill]);
      setNewSkill("");
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setSkills(skills.filter(skill => skill !== skillToRemove));
  };

  const handleSave = () => {
    setIsEditing(false);
    // Save profile data
    console.log("Saving profile:", profileData);
  };

  return (
    <div className="min-h-screen bg-gradient-subtle py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-primary">Chef Profile</h1>
            <p className="text-muted-foreground">Manage your professional profile</p>
          </div>
          <Button
            onClick={isEditing ? handleSave : () => setIsEditing(true)}
            className={isEditing ? "bg-gradient-hero hover:opacity-90" : ""}
            variant={isEditing ? "default" : "outline"}
          >
            {isEditing ? "Save Profile" : "Edit Profile"}
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Summary */}
          <div className="lg:col-span-1">
            <Card className="shadow-soft">
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="relative mb-4">
                    <div className="w-24 h-24 bg-gradient-hero rounded-full flex items-center justify-center mx-auto">
                      <span className="text-2xl font-bold text-primary-foreground">
                        {profileData.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    {isEditing && (
                      <button className="absolute bottom-0 right-1/2 transform translate-x-1/2 translate-y-1/2 bg-white border border-border rounded-full p-2 hover:bg-muted transition-smooth">
                        <Upload className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-1">{profileData.name}</h3>
                  <p className="text-muted-foreground mb-4">Professional Chef</p>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{profileData.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{profileData.experience} years experience</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <IndianRupee className="h-4 w-4" />
                      <span>₹{profileData.expectedSalary}/month</span>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-border">
                    <div className="flex justify-center gap-4">
                      <div className="text-center">
                        <div className="text-xl font-bold text-primary">4.8</div>
                        <div className="text-xs text-muted-foreground">Rating</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold text-primary">23</div>
                        <div className="text-xs text-muted-foreground">Jobs Applied</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold text-primary">5</div>
                        <div className="text-xs text-muted-foreground">Offers</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="shadow-soft mt-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                      <Star className="h-4 w-4 text-secondary-rich" />
                    </div>
                    <div>
                      <div className="font-medium">Top Rated Chef</div>
                      <div className="text-xs text-muted-foreground">Maintained 4.8+ rating</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                      <ChefHat className="h-4 w-4 text-accent-deep" />
                    </div>
                    <div>
                      <div className="font-medium">Verified Chef</div>
                      <div className="text-xs text-muted-foreground">Profile verified</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Profile Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Basic Information */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
                <CardDescription>Update your basic profile details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={profileData.name}
                      onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      value={profileData.phone}
                      onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                      disabled={!isEditing}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      value={profileData.email}
                      onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input
                      id="location"
                      value={profileData.location}
                      onChange={(e) => setProfileData({...profileData, location: e.target.value})}
                      disabled={!isEditing}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Professional Details */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle>Professional Details</CardTitle>
                <CardDescription>Your culinary experience and preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="experience">Experience (Years)</Label>
                    <Input
                      id="experience"
                      type="number"
                      value={profileData.experience}
                      onChange={(e) => setProfileData({...profileData, experience: e.target.value})}
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="salary">Expected Salary (₹/month)</Label>
                    <Input
                      id="salary"
                      type="number"
                      value={profileData.expectedSalary}
                      onChange={(e) => setProfileData({...profileData, expectedSalary: e.target.value})}
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="availability">Availability</Label>
                    <Select 
                      value={profileData.availability} 
                      onValueChange={(value) => setProfileData({...profileData, availability: value})}
                      disabled={!isEditing}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="immediate">Immediate</SelectItem>
                        <SelectItem value="1-week">Within 1 week</SelectItem>
                        <SelectItem value="2-weeks">Within 2 weeks</SelectItem>
                        <SelectItem value="1-month">Within 1 month</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bio">Professional Bio</Label>
                  <Textarea
                    id="bio"
                    value={profileData.bio}
                    onChange={(e) => setProfileData({...profileData, bio: e.target.value})}
                    disabled={!isEditing}
                    rows={4}
                    placeholder="Tell us about your culinary journey, specialties, and what makes you unique..."
                  />
                </div>
              </CardContent>
            </Card>

            {/* Skills & Cuisines */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle>Skills & Cuisines</CardTitle>
                <CardDescription>Add your culinary specialties and skills</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label>Cuisine Specialties</Label>
                  <div className="flex flex-wrap gap-2 mt-2 mb-4">
                    {skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="flex items-center gap-1">
                        {skill}
                        {isEditing && (
                          <button
                            onClick={() => removeSkill(skill)}
                            className="ml-1 hover:text-destructive"
                          >
                            <X className="h-3 w-3" />
                          </button>
                        )}
                      </Badge>
                    ))}
                  </div>
                  
                  {isEditing && (
                    <div className="flex gap-2">
                      <Input
                        value={newSkill}
                        onChange={(e) => setNewSkill(e.target.value)}
                        placeholder="Add a cuisine type..."
                        onKeyPress={(e) => e.key === 'Enter' && addSkill()}
                      />
                      <Button onClick={addSkill} size="sm">
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Resume Upload */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle>Resume & Documents</CardTitle>
                <CardDescription>Upload your resume and certificates</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                  <Upload className="h-8 w-8 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-muted-foreground mb-2">
                    {isEditing ? "Upload your resume (PDF, DOC)" : "chef_resume.pdf"}
                  </p>
                  {isEditing && (
                    <Button variant="outline" size="sm">
                      Choose File
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefProfile;