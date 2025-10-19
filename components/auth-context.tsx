"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

interface AuthContextType {
  isLoggedIn: boolean
  user: { name: string; email: string } | null
  login: () => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState<{ name: string; email: string } | null>(null)

  const login = () => {
    setIsLoggedIn(true)
    setUser({ name: "Alex Morgan", email: "alex@example.com" })
  }

  const logout = () => {
    setIsLoggedIn(false)
    setUser(null)
  }

  return <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider")
  }
  return context
}
