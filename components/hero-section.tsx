"use client"

import { Button } from "@/components/ui/button"
import { Sparkles, MapPin, Calendar, Users } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

interface HeroSectionProps {
  onSearchClick: () => void
}

export function HeroSection({ onSearchClick }: HeroSectionProps) {
  const [destination, setDestination] = useState("")
  const [checkIn, setCheckIn] = useState("")
  const [guests, setGuests] = useState("")

  return (
    <section className="relative w-full">
      <div
        className="relative w-full h-96 bg-cover bg-pink-400 bg-center overflow-hidden"
        // style={{
        //   backgroundImage: "url(/home_image.jpg)",
        // }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/40 to-blue-300/20"></div>

        {/* Content */}
        <div className="relative h-full flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
          <div className="text-center space-y-6 w-full">
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight text-balance">
              Find your next stay, anywhere.
            </h1>
            <p className="text-lg text-white/90">Book with confidence and enjoy your trip.</p>

            <div className="flex flex-col sm:flex-row gap-3 bg-white rounded-lg p-3 max-w-3xl mx-auto w-full shadow-lg">
              <div className="flex-1 flex items-center gap-2 px-3 border-r border-gray-200">
                <MapPin className="w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search destination"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="flex-1 outline-none text-sm placeholder-gray-400"
                />
              </div>
              <div className="flex-1 flex items-center gap-2 px-3 border-r border-gray-200">
                <Calendar className="w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Check-in - Check-out"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="flex-1 outline-none text-sm placeholder-gray-400"
                />
              </div>
              <div className="flex-1 flex items-center gap-2 px-3 border-r border-gray-200">
                <Users className="w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Add guests"
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="flex-1 outline-none text-sm placeholder-gray-400"
                />
              </div>
              <Button className="bg-black text-white px-6 h-12 cursor-pointer">Search</Button>
            </div>

            <button
              onClick={onSearchClick}
              className=" cursor-pointer inline-flex items-center gap-2 w-32 justify-center h-6 bg-white/20 rounded-xl text-black hover:bg-white/30 hover:text-black/80 transition-colors"
            >
              <Sparkles color="white" className="w-4 h-4" />
              <span className="text-sm text-white">Search by AI</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap gap-3">
          <Link href="/listings">
            <Button variant="outline" className="gap-2 bg-transparent">
              <MapPin className="w-4 h-4" />
              Near Campus
            </Button>
          </Link>
          <Link href="/listings">
            <Button variant="outline" className="gap-2 bg-transparent">
              <MapPin className="w-4 h-4" />
              By City
            </Button>
          </Link>
          <Link href="/listings">
            <Button variant="outline" className="gap-2 bg-transparent">
              More Filters
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
