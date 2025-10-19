"use client"

import { Button } from "@/components/ui/button"
import { Heart, MapPin, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Data awal 8 properti
const BASE_PROPERTIES = [
  {
    id: 1,
    name: "Modern Loft Downtown",
    location: "Downtown District",
    price: 120,
    rating: 4.92,
    reviews: 48,
    image: "/home.jpg",
    facilities: ["WiFi", "AC", "Kitchen"],
  },
  {
    id: 2,
    name: "Cozy Beachside Villa",
    location: "Coastal Area",
    price: 250,
    rating: 4.98,
    reviews: 32,
    image: "/home.jpg",
    facilities: ["WiFi", "AC", "Pool"],
  },
  {
    id: 3,
    name: "Forest Cabin Retreat",
    location: "Mountain Region",
    price: 95,
    rating: 4.85,
    reviews: 28,
    image: "/home.jpg",
    facilities: ["WiFi", "Kitchen", "Garden"],
  },
  {
    id: 4,
    name: "Suburban Family Home",
    location: "Residential Area",
    price: 180,
    rating: 5.0,
    reviews: 15,
    image: "/home.jpg",
    facilities: ["WiFi", "AC", "Parking"],
  },
  {
    id: 5,
    name: "Urban Studio Apartment",
    location: "City Center",
    price: 140,
    rating: 4.7,
    reviews: 22,
    image: "/home.jpg",
    facilities: ["WiFi", "AC"],
  },
  {
    id: 6,
    name: "Lakeview Cottage",
    location: "Lakeside",
    price: 200,
    rating: 4.9,
    reviews: 18,
    image: "/home.jpg",
    facilities: ["WiFi", "Kitchen", "Boat Dock"],
  },
  {
    id: 7,
    name: "Downtown Penthouse",
    location: "Downtown",
    price: 300,
    rating: 5.0,
    reviews: 40,
    image: "/home.jpg",
    facilities: ["WiFi", "AC", "Gym"],
  },
  {
    id: 8,
    name: "Cozy Suburban Apartment",
    location: "Suburb",
    price: 110,
    rating: 4.8,
    reviews: 30,
    image: "/home.jpg",
    facilities: ["WiFi", "Parking"],
  },
]

// Buat 100 data dummy dengan loop
const FEATURED_PROPERTIES = [...BASE_PROPERTIES]

for (let i = 9; i <= 100; i++) {
  FEATURED_PROPERTIES.push({
    id: i,
    name: `Dummy Property #${i}`,
    location: `Location ${i}`,
    price: Math.floor(Math.random() * 300) + 50, // random 50 - 350
    rating: +(Math.random() * 1.5 + 3.5).toFixed(2), // random 3.5 - 5.0
    reviews: Math.floor(Math.random() * 100), // random 0 - 99
    image: "/home.jpg",
    facilities: ["WiFi", "AC", "Kitchen"], // bisa diacak juga
  })
}

export function FeaturedListings() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Featured Properties</h2>
          <p className="text-muted-foreground text-lg">Explore our handpicked selection of premium boarding houses</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURED_PROPERTIES.map((property) => (
            <Link key={property.id} href={`/property/${property.id}`}>
              <div className="group cursor-pointer">
                <div className="relative aspect-square bg-muted overflow-hidden rounded-lg mb-3">
                  <Image
                    src={property.image || "/placeholder.svg"}
                    alt={property.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <button className="absolute top-3 right-3 bg-white rounded-full p-2 hover:bg-gray-100 transition shadow-md">
                    <Heart className="w-5 h-5 text-gray-600 hover:text-red-500" />
                  </button>
                </div>

                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground line-clamp-2">{property.name}</h3>

                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 flex-shrink-0" />
                    <span className="line-clamp-1">{property.location}</span>
                  </div>

                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-foreground text-foreground" />
                    <span className="text-sm font-medium text-foreground">{property.rating}</span>
                    <span className="text-sm text-muted-foreground">({property.reviews})</span>
                  </div>

                  <p className="text-sm font-semibold text-foreground">
                    ${property.price}
                    <span className="font-normal text-muted-foreground">/month</span>
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" variant="outline">
            View All Properties
          </Button>
        </div>
      </div>
    </section>
  )
}
