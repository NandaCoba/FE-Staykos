"use client"

import { useState } from "react"
import { Search, ChevronDown, Mail, MessageSquare, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface FAQItem {
  id: string
  question: string
  answer: string
  category: string
}

const faqItems: FAQItem[] = [
  {
    id: "1",
    category: "Booking",
    question: "How do I book a boarding house?",
    answer:
      "To book a boarding house, browse our listings, select your preferred property, choose your dates, and complete the booking process. You'll receive a confirmation email with all the details.",
  },
  {
    id: "2",
    category: "Booking",
    question: "Can I cancel my booking?",
    answer:
      "Yes, you can cancel your booking up to 7 days before your check-in date for a full refund. Cancellations within 7 days may incur a fee depending on the property's cancellation policy.",
  },
  {
    id: "3",
    category: "Booking",
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, debit cards, and digital payment methods including bank transfers and e-wallets.",
  },
  {
    id: "4",
    category: "Account",
    question: "How do I create an account?",
    answer:
      "Click on 'Sign Up' in the top right corner, enter your email address, create a password, and verify your email. You can also sign up using your Google or Facebook account.",
  },
  {
    id: "5",
    category: "Account",
    question: "How do I reset my password?",
    answer:
      "Click 'Forgot Password' on the login page, enter your email address, and follow the instructions sent to your email to reset your password.",
  },
  {
    id: "6",
    category: "Account",
    question: "Can I edit my profile information?",
    answer:
      "Yes, you can edit your profile information anytime by going to your dashboard and clicking on 'Profile Settings'. You can update your name, email, phone number, and profile picture.",
  },
  {
    id: "7",
    category: "Property",
    question: "How are properties verified?",
    answer:
      "All properties on StayKos are verified by our team. We check property details, photos, and host information to ensure quality and accuracy.",
  },
  {
    id: "8",
    category: "Property",
    question: "What should I do if I find an issue with my booking?",
    answer:
      "Contact our support team immediately through the help center or email support@staykos.com. We'll work with you and the property owner to resolve any issues.",
  },
  {
    id: "9",
    category: "Safety",
    question: "Is my personal information secure?",
    answer:
      "Yes, we use industry-standard encryption and security measures to protect your personal information. Your data is never shared with third parties without your consent.",
  },
  {
    id: "10",
    category: "Safety",
    question: "What safety measures are in place?",
    answer:
      "All properties must meet our safety standards. We verify fire safety equipment, secure locks, and emergency procedures. Guests can also report safety concerns to our team.",
  },
]

const categories = ["All", "Booking", "Account", "Property", "Safety"]

export default function HelpdeskPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const filteredFAQs = faqItems.filter((item) => {
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-b from-primary/5 to-background border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Help Center</h1>
          <p className="text-lg text-muted-foreground mb-8">Find answers to common questions about StayKos</p>

          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search for help..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 py-3 text-base"
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full font-medium transition ${
                selectedCategory === category ? "bg-primary text-white" : "bg-muted text-foreground hover:bg-muted/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 mb-16">
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((item) => (
              <div
                key={item.id}
                className="border border-border rounded-lg overflow-hidden hover:border-primary/50 transition"
              >
                <button
                  onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-muted/50 transition"
                >
                  <div className="flex items-center gap-4 text-left">
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground">{item.question}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{item.category}</p>
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-muted-foreground transition-transform ${
                      expandedId === item.id ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {expandedId === item.id && (
                  <div className="px-6 py-4 bg-muted/30 border-t border-border">
                    <p className="text-foreground leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No results found. Try a different search.</p>
            </div>
          )}
        </div>

        {/* Contact Section */}
        <div className="border-t border-border pt-12">
          <h2 className="text-2xl font-bold text-foreground mb-8">Still need help?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 border border-border rounded-lg hover:border-primary/50 transition">
              <Mail className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Email Support</h3>
              <p className="text-muted-foreground text-sm mb-4">Send us an email and we'll respond within 24 hours</p>
              <Button variant="outline" size="sm">
                support@staykos.com
              </Button>
            </div>
            <div className="p-6 border border-border rounded-lg hover:border-primary/50 transition">
              <MessageSquare className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Live Chat</h3>
              <p className="text-muted-foreground text-sm mb-4">Chat with our support team in real-time</p>
              <Button variant="outline" size="sm">
                Start Chat
              </Button>
            </div>
            <div className="p-6 border border-border rounded-lg hover:border-primary/50 transition">
              <Phone className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Phone Support</h3>
              <p className="text-muted-foreground text-sm mb-4">Call us during business hours</p>
              <Button variant="outline" size="sm">
                +1 (555) 123-4567
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
