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

  const removeSkill = (skillToRemove) => {
    setSkills(skills.filter(skill => skill !== skillToRemove));
  };

  const handleSave = () => {
    setIsEditing(false);
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

        {/* Profile Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <Card className="shadow-soft">
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary-foreground">
                      {profileData.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{profileData.name}</h3>
                  <p className="text-muted-foreground mb-4">Professional Chef</p>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="lg:col-span-2">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Profile management interface for chefs</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefProfile;
