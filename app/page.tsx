"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { FeaturedListings } from "@/components/featured-listings"
import { Footer } from "@/components/footer"
import { AISearchModal } from "@/components/ai-search-modal"

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <main className="min-h-screen bg-background">
      <Navbar onSearchClick={() => setIsModalOpen(true)} />
      <HeroSection onSearchClick={() => setIsModalOpen(true)} />
      <FeaturedListings />
      <Footer />
      <AISearchModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  )
}
