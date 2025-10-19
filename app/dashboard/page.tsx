"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, MapPin, Calendar, LogOut, HelpCircle, MessageSquare } from "lucide-react"
import Image from "next/image"

const BOOKINGS = [
  {
    id: 1,
    property: "Modern Loft Downtown",
    location: "Downtown District",
    checkIn: "2025-11-15",
    checkOut: "2025-12-15",
    price: 120,
    image: "/modern-loft-apartment.png",
    status: "upcoming",
  },
  {
    id: 2,
    property: "Cozy Beachside Villa",
    location: "Coastal Area",
    checkIn: "2025-09-01",
    checkOut: "2025-09-30",
    price: 250,
    image: "/beachside-villa.jpg",
    status: "completed",
  },
]

const SAVED_PROPERTIES = [
  {
    id: 1,
    name: "Modern Loft Downtown",
    location: "Downtown District",
    price: 120,
    rating: 4.92,
    image: "/modern-loft-apartment.png",
  },
  {
    id: 3,
    name: "Forest Cabin Retreat",
    location: "Mountain Region",
    price: 95,
    rating: 4.85,
    image: "/cozy-forest-cabin.png",
  },
]

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("bookings")

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 to-primary/5 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">Welcome back, Alex!</h1>
              <p className="text-muted-foreground">Manage your bookings and saved properties</p>
            </div>
            <Link href="/">
              <Button variant="outline" className="bg-transparent">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <Card className="p-6 space-y-4">
              <div className="flex items-center gap-4 pb-4 border-b border-border">
                <Image src="/placeholder.svg?key=profile" alt="Profile" className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h3 className="font-semibold text-foreground">Alex Morgan</h3>
                  <p className="text-sm text-muted-foreground">alex@example.com</p>
                </div>
              </div>

              <nav className="space-y-2">
                <button className="w-full text-left px-4 py-2 rounded-lg bg-primary/10 text-primary font-medium">
                  Dashboard
                </button>
                <button className="w-full text-left px-4 py-2 rounded-lg text-foreground hover:bg-muted transition">
                  Profile Settings
                </button>
                <button className="w-full text-left px-4 py-2 rounded-lg text-foreground hover:bg-muted transition flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  Messages
                </button>
                <button className="w-full text-left px-4 py-2 rounded-lg text-foreground hover:bg-muted transition flex items-center gap-2">
                  <HelpCircle className="w-4 h-4" />
                  Help & Support
                </button>
              </nav>

              <Button variant="outline" className="w-full bg-transparent gap-2">
                <LogOut className="w-4 h-4" />
                Logout
              </Button>
            </Card>
          </div>

          {/* Main Content */}
          <div className="md:col-span-3">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="bookings">My Bookings</TabsTrigger>
                <TabsTrigger value="saved">Saved Properties</TabsTrigger>
              </TabsList>

              <TabsContent value="bookings" className="space-y-4">
                {BOOKINGS.length === 0 ? (
                  <Card className="p-12 text-center">
                    <p className="text-muted-foreground mb-4">No bookings yet</p>
                    <Link href="/listings">
                      <Button>Browse Properties</Button>
                    </Link>
                  </Card>
                ) : (
                  BOOKINGS.map((booking) => (
                    <Card key={booking.id} className="overflow-hidden">
                      <div className="flex flex-col md:flex-row">
                        <Image
                          src={booking.image || "/placeholder.svg"}
                          alt={booking.property}
                          className="w-full md:w-48 h-48 object-cover"
                        />
                        <div className="flex-1 p-6 flex flex-col justify-between">
                          <div>
                            <div className="flex justify-between items-start mb-2">
                              <div>
                                <h3 className="text-lg font-semibold text-foreground">{booking.property}</h3>
                                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                  <MapPin className="w-4 h-4" />
                                  {booking.location}
                                </div>
                              </div>
                              <span
                                className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                  booking.status === "upcoming"
                                    ? "bg-primary/10 text-primary"
                                    : "bg-muted text-muted-foreground"
                                }`}
                              >
                                {booking.status === "upcoming" ? "Upcoming" : "Completed"}
                              </span>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {booking.checkIn} to {booking.checkOut}
                              </div>
                              <div className="font-semibold text-foreground">${booking.price}/month</div>
                            </div>
                          </div>
                          <div className="flex gap-2 mt-4">
                            <Button variant="outline" size="sm" className="bg-transparent">
                              View Details
                            </Button>
                            {booking.status === "upcoming" && (
                              <Button variant="outline" size="sm" className="bg-transparent text-destructive">
                                Cancel Booking
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))
                )}
              </TabsContent>

              <TabsContent value="saved" className="space-y-4">
                {SAVED_PROPERTIES.length === 0 ? (
                  <Card className="p-12 text-center">
                    <p className="text-muted-foreground mb-4">No saved properties yet</p>
                    <Link href="/listings">
                      <Button>Browse Properties</Button>
                    </Link>
                  </Card>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {SAVED_PROPERTIES.map((property) => (
                      <Card key={property.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="relative h-48 bg-muted overflow-hidden">
                          <Image
                            src={property.image || "/placeholder.svg"}
                            alt={property.name}
                            className="w-full h-full object-cover hover:scale-105 transition-transform"
                          />
                          <button className="absolute top-3 right-3 bg-white rounded-full p-2 hover:bg-gray-100 transition">
                            <Heart className="w-5 h-5 text-primary fill-primary" />
                          </button>
                        </div>
                        <div className="p-4">
                          <h3 className="font-semibold text-foreground mb-1">{property.name}</h3>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground mb-3">
                            <MapPin className="w-4 h-4" />
                            {property.location}
                          </div>
                          <div className="flex justify-between items-center">
                            <div>
                              <p className="text-lg font-bold text-foreground">
                                ${property.price}
                                <span className="text-sm font-normal text-muted-foreground">/month</span>
                              </p>
                              <p className="text-sm text-muted-foreground">★ {property.rating}</p>
                            </div>
                            <Link href={`/property/${property.id}`}>
                              <Button size="sm">View</Button>
                            </Link>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}
