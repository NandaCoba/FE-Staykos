"use client"

import type React from "react"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"

interface FiltersState {
  priceMin: number
  priceMax: number
  location: string
  type: string
  amenities: string[]
  rating: number
}

interface ListingsFiltersProps {
  filters: FiltersState
  onFiltersChange: (filters: FiltersState) => void
}

const AMENITIES = ["WiFi", "AC", "Kitchen", "Pool", "Gym", "Parking", "Garden", "Beach Access"]
const TYPES = [
  { value: "all", label: "All Types" },
  { value: "apartment", label: "Apartment" },
  { value: "house", label: "House" },
  { value: "villa", label: "Villa" },
]

export function ListingsFilters({ filters, onFiltersChange }: ListingsFiltersProps) {
  const handlePriceChange = (value: number[]) => {
    onFiltersChange({
      ...filters,
      priceMin: value[0],
      priceMax: value[1],
    })
  }

  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFiltersChange({
      ...filters,
      location: e.target.value,
    })
  }

  const handleTypeChange = (type: string) => {
    onFiltersChange({
      ...filters,
      type,
    })
  }

  const handleAmenityChange = (amenity: string) => {
    const newAmenities = filters.amenities.includes(amenity)
      ? filters.amenities.filter((a) => a !== amenity)
      : [...filters.amenities, amenity]

    onFiltersChange({
      ...filters,
      amenities: newAmenities,
    })
  }

  const handleRatingChange = (rating: number) => {
    onFiltersChange({
      ...filters,
      rating,
    })
  }

  const handleReset = () => {
    onFiltersChange({
      priceMin: 50,
      priceMax: 600,
      location: "",
      type: "all",
      amenities: [],
      rating: 0,
    })
  }

  return (
    <Card className="p-6 sticky top-20 h-fit">
      <h3 className="font-semibold text-foreground mb-6">Filter Your Search</h3>

      {/* Price Range */}
      <div className="mb-6">
        <label className="text-sm font-medium text-foreground mb-3 block">Price Range</label>
        <Slider
          min={50}
          max={600}
          step={10}
          value={[filters.priceMin, filters.priceMax]}
          onValueChange={handlePriceChange}
          className="mb-3"
        />
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>${filters.priceMin}</span>
          <span>${filters.priceMax}</span>
        </div>
      </div>

      {/* Location */}
      <div className="mb-6">
        <label htmlFor="location" className="text-sm font-medium text-foreground mb-2 block">
          Location
        </label>
        <Input
          id="location"
          placeholder="Search location..."
          value={filters.location}
          onChange={handleLocationChange}
          className="bg-input"
        />
      </div>

      {/* Type */}
      <div className="mb-6">
        <label className="text-sm font-medium text-foreground mb-3 block">Type of Accommodation</label>
        <div className="space-y-2">
          {TYPES.map((type) => (
            <div key={type.value} className="flex items-center">
              <input
                type="radio"
                id={type.value}
                name="type"
                value={type.value}
                checked={filters.type === type.value}
                onChange={() => handleTypeChange(type.value)}
                className="w-4 h-4 cursor-pointer"
              />
              <label htmlFor={type.value} className="ml-2 text-sm text-foreground cursor-pointer">
                {type.label}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Amenities */}
      <div className="mb-6">
        <label className="text-sm font-medium text-foreground mb-3 block">Amenities</label>
        <div className="space-y-2">
          {AMENITIES.map((amenity) => (
            <div key={amenity} className="flex items-center">
              <Checkbox
                id={amenity}
                checked={filters.amenities.includes(amenity)}
                onCheckedChange={() => handleAmenityChange(amenity)}
              />
              <label htmlFor={amenity} className="ml-2 text-sm text-foreground cursor-pointer">
                {amenity}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Rating */}
      <div className="mb-6">
        <label className="text-sm font-medium text-foreground mb-3 block">Minimum Rating</label>
        <div className="space-y-2">
          {[0, 4, 4.5, 4.8].map((rating) => (
            <div key={rating} className="flex items-center">
              <input
                type="radio"
                id={`rating-${rating}`}
                name="rating"
                value={rating}
                checked={filters.rating === rating}
                onChange={() => handleRatingChange(rating)}
                className="w-4 h-4 cursor-pointer"
              />
              <label htmlFor={`rating-${rating}`} className="ml-2 text-sm text-foreground cursor-pointer">
                {rating === 0 ? "Any" : `${rating}+ stars`}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Reset Button */}
      <Button onClick={handleReset} variant="outline" className="w-full bg-transparent">
        Reset Filters
      </Button>
    </Card>
  )
}
