"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sparkles, LogOut, User } from "lucide-react"
import { useAuth } from "@/components/auth-context"

interface NavbarProps {
  onSearchClick: () => void
}

export function Navbar({ onSearchClick }: NavbarProps) {
  const router = useRouter()
  const { isLoggedIn, user, logout } = useAuth()

  const handleSignIn = () => {
    router.push("/auth/login")
  }

  const handleSignUp = () => {
    router.push("/auth/signup")
  }

  const handleSignOut = () => {
    logout()
  }

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="font-bold text-lg hidden sm:inline">StayKos</span>
            </Link>
            <div className="hidden md:flex gap-6">
              <Link href="/" className="text-sm font-medium text-foreground hover:text-primary transition">
                Home
              </Link>
              <Link href="/listings" className="text-sm font-medium text-foreground hover:text-primary transition">
                Listings
              </Link>
              <Link href="/blogs" className="text-sm font-medium text-foreground hover:text-primary transition">
                Blogs
              </Link>
              <Link href="/helpdesk" className="text-sm font-medium text-foreground hover:text-primary transition">
                Help
              </Link>
              <Link href="/about" className="text-sm font-medium text-foreground hover:text-primary transition">
                About
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" onClick={onSearchClick} className="gap-2 bg-transparent">
              <Sparkles className="w-4 h-4" />
              <span className="hidden sm:inline">Search by AI</span>
            </Button>
            {isLoggedIn ? (
              <div className="flex items-center gap-2">
                <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-lg bg-primary/10">
                  <User className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">{user?.name}</span>
                </div>
                <Button size="sm" variant="ghost" onClick={handleSignOut} className="gap-2">
                  <LogOut className="w-4 h-4" />
                  <span className="hidden sm:inline">Sign Out</span>
                </Button>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Button size="sm" variant="outline" onClick={handleSignUp}>
                  Sign Up
                </Button>
                <Button size="sm" onClick={handleSignIn}>
                  Sign In
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
