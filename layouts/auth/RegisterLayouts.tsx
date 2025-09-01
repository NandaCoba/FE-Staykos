"use client";
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { toast } from "sonner"



export function RegisterLayouts() {
  return (
    <Card className="w-full max-w-lg shadow-none border-none">
      <CardHeader>
        <CardTitle>Register your account</CardTitle>
        <CardDescription>
          Enter your details below to create your account
        </CardDescription>
        <CardAction>
        </CardAction>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                type="text"
                placeholder="John"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                type="text"
                placeholder="Doe"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="phone">Phone Number</Label>
              <div className="flex gap-2">
                <select
                  id="countryCode"
                  className="flex h-10 w-20 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  required
                >
                  <option value="+62">+62</option>
                  <option value="+1">+1</option>
                  <option value="+65">+65</option>
                  <option value="+60">+60</option>
                  <option value="+66">+66</option>
                </select>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="812 3456 7890"
                  className="flex-1"
                  required
                />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="gender">Gender</Label>
              <select
                id="gender"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                required
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input id="confirmPassword" type="password" required />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button
          className=" w-full cursor-pointer"
          onClick={() =>
            toast("Registration Successful!", {
              description: "Welcome to StayKos! Your account has been created.",
              action: {
                label: "Continue",
                onClick: () => console.log("Continue"),
              },
            })
          }
        >
          Register
        </Button>
        <Button variant="outline" className="w-full">
          Register with Google
        </Button>
        <p className="text-sm text-center mt-4">
          Already have an account? 
          <Link href="/auth/login" className="ml-1 underline text-muted-foreground">
            Sign In
          </Link>
        </p>
      </CardFooter>
    </Card>
  )
}
