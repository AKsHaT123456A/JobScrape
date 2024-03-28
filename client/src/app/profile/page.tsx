import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <Card className="w-full max-w-3xl">
      <CardHeader>
        <CardTitle>Profile</CardTitle>
        <CardDescription>
          Update your profile information. Changes will be reflected across the platform.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="full-name">Full Name</Label>
            <Input id="full-name" placeholder="Enter your full name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="Enter your email" type="email" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" placeholder="Enter your phone number" type="tel" />
          </div>
          <div className="space-y-2">
            <Label>Date of Birth</Label>
            <Input type="date" />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="address">Address</Label>
          <Input id="address" placeholder="Enter your address" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="bio">Bio</Label>
          <Textarea id="bio" placeholder="Enter your bio" />
        </div>
        <div className="space-y-2">
          <Label>Profile Picture</Label>
          <Input accept="image/*" id="profile-picture" placeholder="Select a file" type="file" />
        </div>
        <div className="space-y-2">
          <Label>Social Media Links</Label>
          <div className="space-y-2">
            <Input placeholder="Facebook" />
            <Input placeholder="Twitter" />
            <Input placeholder="LinkedIn" />
          </div>
        </div>
        <div className="space-y-2">
          <Label>Skills</Label>
          <div className="space-y-2">
            <Input placeholder="Skill 1" />
            <Input placeholder="Skill 2" />
            <Input placeholder="Skill 3" />
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button>Save</Button>
      </CardFooter>
    </Card>
  )
}

