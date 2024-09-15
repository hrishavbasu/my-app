import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/hooks/use-toast"

export function SignIn({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    username: ''
  });
  const { toast } = useToast()

  if (!isOpen) return null;

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e, mode) => {
    e.preventDefault();
    console.log(`${mode} form submitted:`, formData);
    // Add your authentication logic here
    
    // Show success toast
    toast({
      title: mode === 'signin' ? "Signed In Successfully" : "Signed Up Successfully",
      description: `Welcome${mode === 'signup' ? ' to our platform' : ''}!`,
      duration: 3000,
    })
    
    onClose(); // Close the modal after submission
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 dark:bg-opacity-70 flex justify-center items-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-8 max-w-md w-full shadow-lg">
        <Tabs defaultValue="signin" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="signin">Sign In</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>
          <TabsContent value="signin">
            <form onSubmit={(e) => handleSubmit(e, 'signin')} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="signin-email">Email</Label>
                <Input
                  id="signin-email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="dark:bg-gray-700 dark:text-white"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="signin-password">Password</Label>
                <Input
                  id="signin-password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  className="dark:bg-gray-700 dark:text-white"
                />
              </div>
              <Button type="submit" className="w-full">Sign In</Button>
            </form>
          </TabsContent>
          <TabsContent value="signup">
            <form onSubmit={(e) => handleSubmit(e, 'signup')} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="signup-username">Username</Label>
                <Input
                  id="signup-username"
                  name="username"
                  type="text"
                  value={formData.username}
                  onChange={handleInputChange}
                  required
                  className="dark:bg-gray-700 dark:text-white"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="signup-email">Email</Label>
                <Input
                  id="signup-email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="dark:bg-gray-700 dark:text-white"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="signup-password">Password</Label>
                <Input
                  id="signup-password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  className="dark:bg-gray-700 dark:text-white"
                />
              </div>
              <Button type="submit" className="w-full">Sign Up</Button>
            </form>
          </TabsContent>
        </Tabs>
        <Button onClick={onClose} variant="outline" className="w-full mt-6">
          Close
        </Button>
      </div>
    </div>
  );
}