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
    description: "Premium PG facility with modern amenities and in-house restaurant serving authentic North Indian cuisine. We focus on providing a homely atmosphere with quality food service.",
    website: "www.spiceroute.com"
  });

  const addFacility = () => {
    if (newFacility && !facilities.includes(newFacility)) {
      setFacilities([...facilities, newFacility]);
      setNewFacility("");
    }
  };

  const removeFacility = (facilityToRemove: string) => {
    setFacilities(facilities.filter(facility => facility !== facilityToRemove));
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
            <h1 className="text-3xl font-bold text-primary">Business Profile</h1>
            <p className="text-muted-foreground">Manage your PG/Restaurant profile</p>
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
          {/* Business Summary */}
          <div className="lg:col-span-1">
            <Card className="shadow-soft">
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="relative mb-4">
                    <div className="w-24 h-24 bg-gradient-warm rounded-full flex items-center justify-center mx-auto">
                      <Store className="h-12 w-12 text-secondary-foreground" />
                    </div>
                    {isEditing && (
                      <button className="absolute bottom-0 right-1/2 transform translate-x-1/2 translate-y-1/2 bg-white border border-border rounded-full p-2 hover:bg-muted transition-smooth">
                        <Upload className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-1">{profileData.businessName}</h3>
                  <p className="text-muted-foreground mb-1">by {profileData.ownerName}</p>
                  <Badge variant="outline" className="mb-4">
                    {profileData.businessType === "pg" ? "PG Facility" : "Restaurant"}
                  </Badge>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{profileData.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>Est. {profileData.established}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Users className="h-4 w-4" />
                      <span>{profileData.capacity} capacity</span>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-border">
                    <div className="flex justify-center gap-4">
                      <div className="text-center">
                        <div className="text-xl font-bold text-primary">4.6</div>
                        <div className="text-xs text-muted-foreground">Rating</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold text-primary">12</div>
                        <div className="text-xs text-muted-foreground">Jobs Posted</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold text-primary">8</div>
                        <div className="text-xs text-muted-foreground">Hires Made</div>
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
                  Recognition
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                      <Star className="h-4 w-4 text-secondary-rich" />
                    </div>
                    <div>
                      <div className="font-medium">Top Employer</div>
                      <div className="text-xs text-muted-foreground">Highly rated by chefs</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                      <Building2 className="h-4 w-4 text-accent-deep" />
                    </div>
                    <div>
                      <div className="font-medium">Verified Business</div>
                      <div className="text-xs text-muted-foreground">Documents verified</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Profile Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Business Information */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle>Business Information</CardTitle>
                <CardDescription>Update your business details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="businessName">Business Name</Label>
                    <Input
                      id="businessName"
                      value={profileData.businessName}
                      onChange={(e) => setProfileData({...profileData, businessName: e.target.value})}
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="ownerName">Owner Name</Label>
                    <Input
                      id="ownerName"
                      value={profileData.ownerName}
                      onChange={(e) => setProfileData({...profileData, ownerName: e.target.value})}
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
                    <Label htmlFor="location">Location</Label>
                    <Input
                      id="location"
                      value={profileData.location}
                      onChange={(e) => setProfileData({...profileData, location: e.target.value})}
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="website">Website (Optional)</Label>
                    <Input
                      id="website"
                      value={profileData.website}
                      onChange={(e) => setProfileData({...profileData, website: e.target.value})}
                      disabled={!isEditing}
                      placeholder="www.yourbusiness.com"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Business Details */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle>Business Details</CardTitle>
                <CardDescription>Describe your establishment</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="businessType">Business Type</Label>
                    <Select 
                      value={profileData.businessType} 
                      onValueChange={(value) => setProfileData({...profileData, businessType: value})}
                      disabled={!isEditing}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pg">PG Facility</SelectItem>
                        <SelectItem value="restaurant">Restaurant</SelectItem>
                        <SelectItem value="both">PG with Restaurant</SelectItem>
                        <SelectItem value="hotel">Hotel</SelectItem>
                        <SelectItem value="canteen">Corporate Canteen</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="established">Established Year</Label>
                    <Input
                      id="established"
                      value={profileData.established}
                      onChange={(e) => setProfileData({...profileData, established: e.target.value})}
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="capacity">Capacity</Label>
                    <Input
                      id="capacity"
                      type="number"
                      value={profileData.capacity}
                      onChange={(e) => setProfileData({...profileData, capacity: e.target.value})}
                      disabled={!isEditing}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Business Description</Label>
                  <Textarea
                    id="description"
                    value={profileData.description}
                    onChange={(e) => setProfileData({...profileData, description: e.target.value})}
                    disabled={!isEditing}
                    rows={4}
                    placeholder="Describe your business, the atmosphere, cuisine types, target customers..."
                  />
                </div>
              </CardContent>
            </Card>

            {/* Facilities & Amenities */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle>Facilities & Amenities</CardTitle>
                <CardDescription>List the facilities and amenities you provide</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label>Available Facilities</Label>
                  <div className="flex flex-wrap gap-2 mt-2 mb-4">
                    {facilities.map((facility) => (
                      <Badge key={facility} variant="secondary" className="flex items-center gap-1">
                        {facility}
                        {isEditing && (
                          <button
                            onClick={() => removeFacility(facility)}
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
                        value={newFacility}
                        onChange={(e) => setNewFacility(e.target.value)}
                        placeholder="Add a facility..."
                        onKeyPress={(e) => e.key === 'Enter' && addFacility()}
                      />
                      <Button onClick={addFacility} size="sm">
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Business Documents */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle>Business Documents</CardTitle>
                <CardDescription>Upload business registration and other documents</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="border-2 border-dashed border-border rounded-lg p-4 text-center">
                    <Upload className="h-6 w-6 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground mb-2">
                      {isEditing ? "Business License" : "business_license.pdf"}
                    </p>
                    {isEditing && (
                      <Button variant="outline" size="sm">
                        Upload
                      </Button>
                    )}
                  </div>
                  
                  <div className="border-2 border-dashed border-border rounded-lg p-4 text-center">
                    <Upload className="h-6 w-6 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground mb-2">
                      {isEditing ? "FSSAI Certificate" : "fssai_certificate.pdf"}
                    </p>
                    {isEditing && (
                      <Button variant="outline" size="sm">
                        Upload
                      </Button>
                    )}
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

export default OwnerProfile;