"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Users, Target, Heart, Zap } from "lucide-react"
import { useState } from "react"
import { AISearchModal } from "@/components/ai-search-modal"
import Link from "next/link"

export default function AboutPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <main className="min-h-screen bg-background">
      <Navbar onSearchClick={() => setIsModalOpen(true)} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-background py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">About StayKos</h1>
            <p className="text-xl text-muted-foreground">
              We're on a mission to make finding the perfect boarding house simple, transparent, and accessible to
              everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                StayKos was founded with a simple belief: finding a boarding house shouldn't be complicated. We connect
                students and professionals with quality accommodations that fit their lifestyle and budget.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Through AI-powered search and transparent listings, we're making it easier than ever to find your next
                home.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">10K+</div>
                <p className="text-sm text-muted-foreground">Properties Listed</p>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">50K+</div>
                <p className="text-sm text-muted-foreground">Happy Users</p>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">15+</div>
                <p className="text-sm text-muted-foreground">Cities Covered</p>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">4.8★</div>
                <p className="text-sm text-muted-foreground">Average Rating</p>
              </Card>
            </div>
          </div>

          {/* Values */}
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                icon: Target,
                title: "Transparency",
                description: "Real photos, honest reviews, and clear pricing",
              },
              {
                icon: Users,
                title: "Community",
                description: "Connect with hosts and fellow residents",
              },
              {
                icon: Heart,
                title: "Trust",
                description: "Verified listings and secure transactions",
              },
              {
                icon: Zap,
                title: "Innovation",
                description: "AI-powered search for better matches",
              },
            ].map((value, index) => {
              const Icon = value.icon
              return (
                <Card key={index} className="p-6 text-center">
                  <Icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-pink-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Ready to find your perfect stay?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of students and professionals who have found their ideal boarding house on StayKos.
          </p>
          <Link href={"/listings"}><Button size="lg">
            Start Searching
          </Button></Link>
        </div>
      </section>

      <Footer />
      <AISearchModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  )
}
