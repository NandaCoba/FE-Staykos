"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Heart, MapPin, Users, Wifi, Wind, UtensilsCrossed, Zap, Star, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { AISearchModal } from "@/components/ai-search-modal"
import Image from "next/image"

// Mock property data
const PROPERTIES: Record<string, any> = {
  "1": {
    id: 1,
    name: "Modern Loft Downtown",
    location: "Downtown District, City Center",
    price: 120,
    rating: 4.92,
    reviews: 48,
    images: [
      "/modern-loft-apartment.png",
      "/luxury-apartment-interior.jpg",
      "/modern-bedroom.jpg",
      "/apartment-kitchen.jpg",
      "/living-room-modern.jpg",
    ],
    description:
      "A stunning modern loft in the heart of downtown with floor-to-ceiling windows and contemporary design. Perfect for professionals and students looking for a vibrant urban lifestyle.",
    facilities: ["WiFi", "AC", "Kitchen", "Parking", "Gym"],
    bedrooms: 1,
    bathrooms: 1,
    guests: 2,
    host: {
      name: "Alex Morgan",
      image: "/professional-avatar.jpg",
      rating: 4.9,
      reviews: 120,
    },
    amenities: [
      { icon: Wifi, label: "High-Speed WiFi" },
      { icon: Wind, label: "Air Conditioning" },
      { icon: UtensilsCrossed, label: "Full Kitchen" },
      { icon: Zap, label: "24/7 Power" },
    ],
    rules: ["No smoking", "No pets", "Quiet hours after 10 PM"],
  },
  "2": {
    id: 2,
    name: "Cozy Beachside Villa",
    location: "Coastal Area, Beach Town",
    price: 250,
    rating: 4.98,
    reviews: 32,
    images: [
      "/beachside-villa.jpg",
      "/beach-villa-pool.jpg",
      "/beach-bedroom.jpg",
      "/beach-view.jpg",
      "/villa-interior.jpg",
    ],
    description:
      "Luxurious beachside villa with direct beach access, infinity pool, and stunning ocean views. Ideal for a relaxing getaway or long-term stay.",
    facilities: ["WiFi", "AC", "Pool", "Beach Access", "Kitchen"],
    bedrooms: 2,
    bathrooms: 2,
    guests: 4,
    host: {
      name: "Sarah Johnson",
      image: "/professional-avatar-woman.jpg",
      rating: 4.95,
      reviews: 85,
    },
    amenities: [
      { icon: Wifi, label: "High-Speed WiFi" },
      { icon: Wind, label: "Air Conditioning" },
      { icon: UtensilsCrossed, label: "Full Kitchen" },
      { icon: Zap, label: "24/7 Power" },
    ],
    rules: ["No smoking", "Quiet hours after 11 PM", "Beach rules apply"],
  },
}

export default function PropertyPage({ params }: { params: any }) {
  const property = PROPERTIES[params.id] || PROPERTIES["1"]
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("preview")

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % property.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + property.images.length) % property.images.length)
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar onSearchClick={() => setIsModalOpen(true)} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link href="/listings" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6">
          <ChevronLeft className="w-4 h-4" />
          Back to Listings
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {/* Main Image */}
          <div className="md:col-span-2 relative h-96 md:h-[500px] bg-muted rounded-2xl overflow-hidden group">
            <img
              src={property.images[currentImageIndex] || "/placeholder.svg"}
              alt={property.name}
              className="w-full h-full object-cover"
            />
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 transition opacity-0 group-hover:opacity-100"
            >
              <ChevronLeft className="w-6 h-6 text-foreground" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 transition opacity-0 group-hover:opacity-100"
            >
              <ChevronRight className="w-6 h-6 text-foreground" />
            </button>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            {property.images.slice(1, 5).map((image : any, index : any) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index + 1)}
                className="relative h-40 md:h-48 bg-muted rounded-lg overflow-hidden hover:opacity-80 transition"
              >
                <img
                  src={image || "/placeholder.svg"}
                  alt={`${property.name} ${index + 2}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-8">
            {/* Header */}
            <div>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-foreground mb-2">{property.name}</h1>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <MapPin className="w-4 h-4" />
                    {property.location}
                  </div>
                </div>
                <button className="bg-white rounded-full p-3 hover:bg-gray-100 transition border border-border">
                  <Heart className="w-6 h-6 text-muted-foreground" />
                </button>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  <span className="font-semibold text-foreground">{property.rating}</span>
                  <span className="text-muted-foreground text-sm">({property.reviews} reviews)</span>
                </div>
              </div>
            </div>

            <div className="border-b border-border">
              <div className="flex gap-8">
                {[
                  { id: "preview", label: "Preview" },
                  { id: "amenities", label: "Amenities" },
                  { id: "reviews", label: "Reviews" },
                  { id: "location", label: "Location" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`pb-4 font-medium text-sm transition ${
                      activeTab === tab.id
                        ? "text-primary border-b-2 border-primary"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            {activeTab === "preview" && (
              <div className="space-y-8">
                {/* Property Details */}
                <div className="grid grid-cols-3 gap-4">
                  <Card className="p-4 text-center">
                    <Users className="w-6 h-6 text-primary mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Guests</p>
                    <p className="text-2xl font-bold text-foreground">{property.guests}</p>
                  </Card>
                  <Card className="p-4 text-center">
                    <div className="w-6 h-6 text-primary mx-auto mb-2 text-lg">🛏️</div>
                    <p className="text-sm text-muted-foreground">Bedrooms</p>
                    <p className="text-2xl font-bold text-foreground">{property.bedrooms}</p>
                  </Card>
                  <Card className="p-4 text-center">
                    <div className="w-6 h-6 text-primary mx-auto mb-2 text-lg">🚿</div>
                    <p className="text-sm text-muted-foreground">Bathrooms</p>
                    <p className="text-2xl font-bold text-foreground">{property.bathrooms}</p>
                  </Card>
                </div>

                {/* Description */}
                <div>
                  <h2 className="text-xl font-bold text-foreground mb-3">About this space</h2>
                  <p className="text-muted-foreground leading-relaxed text-sm">{property.description}</p>
                </div>

                {/* What this place offers */}
                <div>
                  <h2 className="text-xl font-bold text-foreground mb-4">What this place offers</h2>
                  <div className="grid grid-cols-2 gap-4">
                    {property.amenities.map((amenity: any, index: number) => {
                      const Icon = amenity.icon
                      return (
                        <div key={index} className="flex items-center gap-3">
                          <Icon className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-foreground text-sm">{amenity.label}</span>
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* House Rules */}
                <div>
                  <h2 className="text-xl font-bold text-foreground mb-3">House rules</h2>
                  <ul className="space-y-2">
                    {property.rules.map((rule: string, index: number) => (
                      <li key={index} className="flex items-center gap-2 text-foreground text-sm">
                        <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                        {rule}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {activeTab === "amenities" && (
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-foreground">All Amenities</h2>
                <div className="grid grid-cols-2 gap-4">
                  {property.amenities.map((amenity: any, index: number) => {
                    const Icon = amenity.icon
                    return (
                      <div key={index} className="flex items-center gap-3 p-3 border border-border rounded-lg">
                        <Icon className="w-6 h-6 text-primary flex-shrink-0" />
                        <span className="text-foreground">{amenity.label}</span>
                      </div>
                    )
                  })}
                </div>
              </div>
            )}

            {activeTab === "reviews" && (
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-foreground">Guest Reviews</h2>
                <div className="space-y-4">
                  {[
                    {
                      name: "Michael",
                      date: "October 2024",
                      rating: 4.9,
                      comment:
                        "Amazing place! The host was very responsive and the location is perfect for exploring the city.",
                      avatar: "/male-avatar.jpg",
                    },
                    {
                      name: "Emily",
                      date: "September 2024",
                      rating: 4.8,
                      comment:
                        "Great experience! Everything was clean and well-maintained. Would definitely stay here again.",
                      avatar: "/female-avatar.jpg",
                    },
                  ].map((review, index) => (
                    <div key={index} className="border border-border rounded-lg p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <img
                          src={review.avatar || "/placeholder.svg"}
                          alt={review.name}
                          className="w-10 h-10 rounded-full"
                        />
                        <div>
                          <p className="font-semibold text-foreground text-sm">{review.name}</p>
                          <p className="text-muted-foreground text-xs">{review.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 mb-2">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${i < Math.floor(review.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                          />
                        ))}
                      </div>
                      <p className="text-foreground text-sm">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "location" && (
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-foreground">Where you'll be</h2>
                <div className="w-full h-96 bg-muted rounded-lg overflow-hidden">
                  <Image src="/map-location.jpg" alt="Location map" className="w-full h-full object-cover" />
                </div>
                <p className="text-foreground text-sm">{property.location}</p>
              </div>
            )}

            {/* Host Info */}
            <div className="border-t border-border pt-8">
              <h2 className="text-xl font-bold text-foreground mb-4">Hosted by {property.host.name}</h2>
              <div className="flex items-center gap-4">
                <img
                  src={property.host.image || "/placeholder.svg"}
                  alt={property.host.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-foreground">{property.host.name}</h3>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    {property.host.rating} ({property.host.reviews} reviews)
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Card */}
          <div className="md:col-span-1">
            <Card className="p-6 sticky top-20 space-y-4">
              <div>
                <p className="text-3xl font-bold text-foreground">
                  ${property.price}
                  <span className="text-lg font-normal text-muted-foreground">/month</span>
                </p>
              </div>

              <div className="space-y-3">
                <div>
                  <label className="text-sm font-medium text-foreground block mb-2">Check-in</label>
                  <input type="date" className="w-full px-3 py-2 border border-border rounded-lg text-sm" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground block mb-2">Check-out</label>
                  <input type="date" className="w-full px-3 py-2 border border-border rounded-lg text-sm" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground block mb-2">Guests</label>
                  <select className="w-full px-3 py-2 border border-border rounded-lg text-sm">
                    {Array.from({ length: property.guests }, (_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1} {i === 0 ? "guest" : "guests"}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <Button className="w-full" size="lg">
                Reserve
              </Button>

              <div className="text-center text-xs text-muted-foreground">
                <p>You won't be charged yet</p>
              </div>

              <div className="border-t border-border pt-4 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">${property.price} × 30 nights</span>
                  <span className="text-foreground font-medium">${property.price * 30}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Service fee</span>
                  <span className="text-foreground font-medium">${Math.round(property.price * 30 * 0.1)}</span>
                </div>
                <div className="border-t border-border pt-2 flex justify-between font-semibold">
                  <span className="text-foreground">Total</span>
                  <span className="text-foreground">${Math.round(property.price * 30 * 1.1)}</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
      <AISearchModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  )
}
