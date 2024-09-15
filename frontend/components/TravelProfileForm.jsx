'use client'
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MapPin } from 'lucide-react'
import { useToast } from "@/components/hooks/use-toast"

const MapComponent = () => (
  <div className="h-64 bg-gray-200 dark:bg-gray-700 rounded-md flex items-center justify-center">
    <MapPin className="h-12 w-12 text-gray-400" />
    <span className="ml-2 text-gray-500">Map Component Placeholder</span>
  </div>
);

export function TravelProfileForm() {
  const [activeTab, setActiveTab] = useState("personal");
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    username: '',
    firstName: '',
    lastName: '',
    profilePicture: null,
    email: '',
    age: '',
    location: '',
    hobbies: [],
    travelCategory: '',
    locationPreferences: [],
    personaType: '',
    userBio: '',
    visitedLocations: [],
    travelJournal: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prev) => ({ ...prev, profilePicture: file }));
  };

  const handleCheckboxChange = (name, value) => {
    setFormData((prev) => {
      const updatedArray = prev[name].includes(value)
        ? prev[name].filter(item => item !== value)
        : [...prev[name], value];
      return { ...prev, [name]: updatedArray };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast({
      title: "Profile Updated",
      description: "Your travel profile has been successfully updated.",
      duration: 3000,
    });
  };

  const validateTab = (tabName) => {
    switch (tabName) {
      case 'personal':
        return formData.username && formData.firstName && formData.lastName && formData.email && formData.age && formData.location && formData.profilePicture;
      case 'about':
        return formData.hobbies.length > 0 && formData.travelCategory && formData.locationPreferences.length > 0 && formData.personaType;
      case 'bio':
        return formData.userBio.length > 0;
      case 'locations':
        return formData.visitedLocations.length > 0;
      case 'journal':
        return formData.travelJournal.length > 0;
      default:
        return true;
    }
  };

  const handleTabChange = (value) => {
    if (validateTab(activeTab)) {
      setActiveTab(value);
    } else {
      toast({
        title: "Incomplete Information",
        description: "Please fill in all required fields before proceeding.",
        duration: 3000,
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center p-4">
      <form onSubmit={handleSubmit} className="w-full max-w-2xl bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 space-y-8">
        <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-6">
            <TabsTrigger value="personal">Personal</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
            <TabsTrigger value="bio">Bio</TabsTrigger>
            <TabsTrigger value="locations">Locations</TabsTrigger>
            <TabsTrigger value="journal">Journal</TabsTrigger>
          </TabsList>

          <TabsContent value="personal" className="space-y-4">
            <h2 className="text-2xl font-bold dark:text-white">Personal Information</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="username" className="dark:text-gray-300">Username</Label>
                <Input id="username" name="username" value={formData.username} onChange={handleInputChange} required className="dark:bg-gray-700 dark:text-white" />
              </div>
              <div>
                <Label htmlFor="email" className="dark:text-gray-300">Email</Label>
                <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} required className="dark:bg-gray-700 dark:text-white" />
              </div>
              <div>
                <Label htmlFor="firstName" className="dark:text-gray-300">First Name</Label>
                <Input id="firstName" name="firstName" value={formData.firstName} onChange={handleInputChange} required className="dark:bg-gray-700 dark:text-white" />
              </div>
              <div>
                <Label htmlFor="lastName" className="dark:text-gray-300">Last Name</Label>
                <Input id="lastName" name="lastName" value={formData.lastName} onChange={handleInputChange} required className="dark:bg-gray-700 dark:text-white" />
              </div>
              <div>
                <Label htmlFor="age" className="dark:text-gray-300">Age</Label>
                <Input id="age" name="age" type="number" value={formData.age} onChange={handleInputChange} required className="dark:bg-gray-700 dark:text-white" />
              </div>
              <div>
                <Label htmlFor="location" className="dark:text-gray-300">Current Location</Label>
                <Input id="location" name="location" value={formData.location} onChange={handleInputChange} required className="dark:bg-gray-700 dark:text-white" />
              </div>
            </div>
            <div>
              <Label htmlFor="profilePicture" className="dark:text-gray-300">Profile Picture</Label>
              <Input id="profilePicture" name="profilePicture" type="file" onChange={handleFileChange} required className="mt-1 dark:bg-gray-700 dark:text-white" />
              {formData.profilePicture && (
                <Avatar className="h-24 w-24 mt-2">
                  <AvatarImage src={URL.createObjectURL(formData.profilePicture)} alt="Profile" />
                  <AvatarFallback>PP</AvatarFallback>
                </Avatar>
              )}
            </div>
          </TabsContent>

          <TabsContent value="about" className="space-y-4">
            <h2 className="text-2xl font-bold dark:text-white">About Me</h2>
            <div>
              <Label htmlFor="hobbies" className="dark:text-gray-300">Hobbies (comma-separated)</Label>
              <Input id="hobbies" name="hobbies" value={formData.hobbies.join(', ')} onChange={(e) => setFormData((prev) => ({ ...prev, hobbies: e.target.value.split(',').map(item => item.trim()) }))} className="dark:bg-gray-700 dark:text-white" />
            </div>
            <div>
              <Label htmlFor="travelCategory" className="dark:text-gray-300">Travel Category</Label>
              <Select name="travelCategory" onValueChange={(value) => setFormData((prev) => ({ ...prev, travelCategory: value }))}>
                <SelectTrigger className="dark:bg-gray-700 dark:text-white">
                  <SelectValue placeholder="Select travel category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="adventure">Adventure</SelectItem>
                  <SelectItem value="relaxation">Relaxation</SelectItem>
                  <SelectItem value="cultural">Cultural</SelectItem>
                  <SelectItem value="foodie">Foodie</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label className="dark:text-gray-300">Location Preferences</Label>
              <div className="grid grid-cols-2 gap-2 mt-1">
                {['Beaches', 'Mountains', 'Cities', 'Countryside'].map((pref) => (
                  <div key={pref} className="flex items-center space-x-2">
                    <Checkbox 
                      id={pref} 
                      checked={formData.locationPreferences.includes(pref)}
                      onCheckedChange={(checked) => handleCheckboxChange('locationPreferences', pref)}
                    />
                    <Label htmlFor={pref} className="dark:text-gray-300">{pref}</Label>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <Label htmlFor="personaType" className="dark:text-gray-300">Persona Type</Label>
              <Select name="personaType" onValueChange={(value) => setFormData((prev) => ({ ...prev, personaType: value }))}>
                <SelectTrigger className="dark:bg-gray-700 dark:text-white">
                  <SelectValue placeholder="Select persona type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="introvert">Introvert</SelectItem>
                  <SelectItem value="extrovert">Extrovert</SelectItem>
                  <SelectItem value="ambivert">Ambivert</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </TabsContent>

          <TabsContent value="bio" className="space-y-4">
            <h2 className="text-2xl font-bold dark:text-white">User Bio</h2>
            <div>
              <Label htmlFor="userBio" className="dark:text-gray-300">Short description about yourself</Label>
              <Textarea id="userBio" name="userBio" value={formData.userBio} onChange={handleInputChange} className="h-32 dark:bg-gray-700 dark:text-white" />
            </div>
          </TabsContent>

          <TabsContent value="locations" className="space-y-4">
            <h2 className="text-2xl font-bold dark:text-white">Visited Locations</h2>
            <MapComponent />
            <div>
              <Label htmlFor="visitedLocations" className="dark:text-gray-300">Add visited locations (comma-separated)</Label>
              <Input 
                id="visitedLocations" 
                name="visitedLocations" 
                value={formData.visitedLocations.join(', ')} 
                onChange={(e) => setFormData((prev) => ({ ...prev, visitedLocations: e.target.value.split(',').map(item => item.trim()) }))} 
                className="dark:bg-gray-700 dark:text-white"
              />
            </div>
          </TabsContent>

          <TabsContent value="journal" className="space-y-4">
            <h2 className="text-2xl font-bold dark:text-white">Travel Journal</h2>
            <div>
              <Label htmlFor="travelJournal" className="dark:text-gray-300">Share your travel experiences</Label>
              <Textarea id="travelJournal" name="travelJournal" value={formData.travelJournal} onChange={handleInputChange} className="h-64 dark:bg-gray-700 dark:text-white" />
            </div>
          </TabsContent>
        </Tabs>

        <Button type="submit" className="w-full">Submit Travel Profile</Button>
      </form>
    </div>
  );
}