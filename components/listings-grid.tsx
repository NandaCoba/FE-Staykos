"use client"
import { Heart, MapPin, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface Listing {
  id: number
  name: string
  location: string
  price: number
  rating: number
  reviews: number
  image: string
  facilities: string[]
  type: string
}

interface ListingsGridProps {
  listings: Listing[]
}

export function ListingsGrid({ listings }: ListingsGridProps) {
  if (listings.length === 0) {
    return (
      <div className="col-span-full flex flex-col items-center justify-center py-12">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-foreground mb-2">No properties found</h3>
          <p className="text-muted-foreground">Try adjusting your filters to find more options</p>
        </div>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {listings.map((listing) => (
        <Link key={listing.id} href={`/property/${listing.id}`}>
          <div className="group cursor-pointer">
            <div className="relative aspect-square bg-muted overflow-hidden rounded-lg mb-3">
              <Image
                src={listing.image || "/placeholder.svg"}
                alt={listing.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <button className="absolute top-3 right-3 bg-white rounded-full p-2 hover:bg-gray-100 transition shadow-md">
                <Heart className="w-5 h-5 text-gray-600 hover:text-red-500" />
              </button>
            </div>

            {/* Content section */}
            <div className="space-y-2">
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-semibold text-foreground line-clamp-2 flex-1">{listing.name}</h3>
              </div>

              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span className="line-clamp-1">{listing.location}</span>
              </div>

              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-foreground text-foreground" />
                <span className="text-sm font-medium text-foreground">{listing.rating}</span>
                <span className="text-sm text-muted-foreground">({listing.reviews})</span>
              </div>

              <p className="text-sm font-semibold text-foreground">
                ${listing.price}
                <span className="font-normal text-muted-foreground">/month</span>
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
