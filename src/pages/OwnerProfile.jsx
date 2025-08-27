import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Building2, 
  MapPin, 
  Phone, 
  Mail, 
  Upload, 
  Store,
  Users,
  Calendar,
  Award,
  Plus,
  X,
  Star
} from "lucide-react";

const OwnerProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [facilities, setFacilities] = useState(["AC Dining", "WiFi", "Parking", "24/7 Security"]);
  const [newFacility, setNewFacility] = useState("");

  const [profileData, setProfileData] = useState({
    businessName: "Spice Route PG & Restaurant",
    ownerName: "Rajesh Kumar",
    email: "rajesh.kumar@spiceroute.com",
    phone: "+91 98765 43210",
    location: "Andheri West, Mumbai",
    businessType: "pg",
    established: "2018",
    capacity: "50",
    description: "Premium PG facility with modern amenities and in-house restaurant serving authentic North Indian cuisine.",
    website: "www.spiceroute.com"
  });

  const handleSave = () => {
    setIsEditing(false);
    console.log("Saving profile:", profileData);
  };

  return (
    <div className="min-h-screen bg-gradient-subtle py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-primary">Business Profile</h1>
            <p className="text-muted-foreground">Manage your PG/Restaurant profile</p>
          </div>
          <Button
            onClick={isEditing ? handleSave : () => setIsEditing(true)}
            variant={isEditing ? "default" : "outline"}
          >
            {isEditing ? "Save Profile" : "Edit Profile"}
          </Button>
        </div>

        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle>Business Information</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Profile management interface for business owners</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default OwnerProfile;