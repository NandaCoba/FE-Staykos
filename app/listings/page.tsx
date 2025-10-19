"use client"

import { useState, useMemo } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ListingsGrid } from "@/components/listings-grid"
import { ListingsFilters } from "@/components/listings-filters"
import { useSearchParams } from "next/navigation"

export default function ListingsPage() {
  const searchParams = useSearchParams()
  const query = searchParams.get("query") || ""

  const [filters, setFilters] = useState({
    priceMin: 50,
    priceMax: 600,
    location: "",
    type: "all",
    amenities: [] as string[],
    rating: 0,
  })

  const [isModalOpen, setIsModalOpen] = useState(false)

  // Mock data - in production, this would come from your API
  const allListings = [
    {
      id: 1,
      name: "Modern Loft Downtown",
      location: "Downtown District",
      price: 120,
      rating: 4.92,
      reviews: 48,
      image: "/modern-loft-apartment.png",
      facilities: ["WiFi", "AC", "Kitchen"],
      type: "apartment",
    },
    {
      id: 2,
      name: "Cozy Beachside Villa",
      location: "Coastal Area",
      price: 250,
      rating: 4.98,
      reviews: 32,
      image: "/beachside-villa.jpg",
      facilities: ["WiFi", "AC", "Pool"],
      type: "villa",
    },
    {
      id: 3,
      name: "Forest Cabin Retreat",
      location: "Mountain Region",
      price: 95,
      rating: 4.85,
      reviews: 28,
      image: "/cozy-forest-cabin.png",
      facilities: ["WiFi", "Kitchen", "Garden"],
      type: "house",
    },
    {
      id: 4,
      name: "Suburban Family Home",
      location: "Residential Area",
      price: 180,
      rating: 5.0,
      reviews: 15,
      image: "/suburban-family-home.png",
      facilities: ["WiFi", "AC", "Parking"],
      type: "house",
    },
    {
      id: 5,
      name: "Urban Studio Apartment",
      location: "City Center",
      price: 150,
      rating: 4.7,
      reviews: 22,
      image: "/urban-studio-apartment.jpg",
      facilities: ["WiFi", "AC"],
      type: "apartment",
    },
    {
      id: 6,
      name: "Luxury Penthouse",
      location: "Premium District",
      price: 500,
      rating: 4.95,
      reviews: 18,
      image: "/luxury-penthouse.png",
      facilities: ["WiFi", "AC", "Pool", "Gym"],
      type: "apartment",
    },
    {
      id: 7,
      name: "Cozy Guest House",
      location: "Quiet Neighborhood",
      price: 85,
      rating: 4.6,
      reviews: 35,
      image: "/cozy-guest-house.jpg",
      facilities: ["WiFi", "Kitchen"],
      type: "house",
    },
    {
      id: 8,
      name: "Beachfront Bungalow",
      location: "Beach Town",
      price: 220,
      rating: 4.88,
      reviews: 42,
      image: "/beachfront-bungalow.png",
      facilities: ["WiFi", "AC", "Beach Access"],
      type: "villa",
    },
  ]

  const filteredListings = useMemo(() => {
    return allListings.filter((listing) => {
      const matchesPrice = listing.price >= filters.priceMin && listing.price <= filters.priceMax
      const matchesLocation =
        !filters.location || listing.location.toLowerCase().includes(filters.location.toLowerCase())
      const matchesType = filters.type === "all" || listing.type === filters.type
      const matchesRating = listing.rating >= filters.rating
      const matchesAmenities =
        filters.amenities.length === 0 || filters.amenities.some((amenity) => listing.facilities.includes(amenity))

      return matchesPrice && matchesLocation && matchesType && matchesRating && matchesAmenities
    })
  }, [filters])

  return (
    <main className="min-h-screen bg-background">
      <Navbar onSearchClick={() => setIsModalOpen(true)} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Browse Boarding Houses</h1>
          {query && <p className="text-muted-foreground">Results for: {query}</p>}
          <p className="text-muted-foreground">Showing {filteredListings.length} properties</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <ListingsFilters filters={filters} onFiltersChange={setFilters} />
          </div>
          <div className="lg:col-span-3">
            <ListingsGrid listings={filteredListings} />
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
