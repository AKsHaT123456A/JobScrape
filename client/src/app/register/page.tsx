"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase/initialize";
import { RadioGroupDemo } from "@/components/radio";
interface User {
  accessToken: string;
  displayName: string;
  email: string;
}
export default function Component() {
  async function loginWithGoogle() {
    try {
      const result = await signInWithPopup(auth, provider);
      // The signed-in user info.
      const user = result.user;
    } catch (error) {
      // Handle Errors here.
      console.error(error);
    }
  }
  return (
    <div>
      <div className="flex items-center py-12">
        <div className="mx-auto max-w-sm space-y-6">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Register</h1>
            <p className="text-gray-500 dark:text-gray-400">
              Enter your information to create an account
            </p>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="m@example.com"
                required
                type="email"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" required type="password" />
            </div>
            <div className="space-y-2 flex flex-col items-center justify-center">
            <div className="">You Are a</div>
            <div>
            <RadioGroupDemo/>
            </div>
          </div>
            <Button className="w-full" type="submit">
              Register
            </Button>
          </div>
          <Separator className="my-6" />
          <div className="space-y-4">
            <Button
              className="w-full"
              variant="outline"
              onClick={loginWithGoogle}
            >
              Sign up with Google
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
