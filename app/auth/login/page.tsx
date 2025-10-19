"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Eye, EyeOff } from "lucide-react"
import { useAuth } from "@/components/auth-context"

export default function LoginPage() {
  const router = useRouter()
  const { login } = useAuth()
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setTimeout(() => {
      login()
      setIsLoading(false)
      router.push("/")
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 py-12">
      <Card className="w-full max-w-md p-8 shadow-lg">
        <div className="text-center mb-8">
          <div className="flex justify-center gap-2 mb-6">
            <div className="w-10 h-10 bg-primary rounded-full" />
            <div className="w-8 h-8 bg-primary/60 rounded-full" />
          </div>
          <h1 className="text-2xl font-bold text-foreground mb-2">Masuk ke Akun Anda</h1>
          <p className="text-sm text-muted-foreground">Selamat datang kembali! Silakan masuk untuk melanjutkan.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <div className="flex gap-4 mb-4">
              <button
                type="button"
                className="flex-1 pb-2 text-sm font-medium text-foreground border-b-2 border-primary"
              >
                Penyedia
              </button>
              <button type="button" className="flex-1 pb-2 text-sm font-medium text-muted-foreground">
                Penyewa
              </button>
            </div>
          </div>

          <div>
            <label htmlFor="email" className="text-sm font-medium text-foreground block mb-2">
              Email atau Username
            </label>
            <Input
              id="email"
              type="email"
              placeholder="Masukkan email atau username Anda"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-background border-border"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="text-sm font-medium text-foreground block mb-2">
              Password
            </label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Masukkan password Anda"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-background border-border pr-10"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <div className="flex justify-end">
            <Link href="/auth/forgot-password" className="text-sm text-primary hover:text-primary/80 font-medium">
              Lupa Password?
            </Link>
          </div>

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Masuk..." : "Masuk"}
          </Button>
        </form>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-border" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-background text-muted-foreground">Atau masuk dengan</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <Button variant="outline" className="bg-transparent">
            Google
          </Button>
          <Button variant="outline" className="bg-transparent">
            Facebook
          </Button>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-6">
          Belum punya akun?{" "}
          <Link href="/auth/signup" className="text-primary hover:text-primary/80 font-medium">
            Daftar sekarang
          </Link>
        </p>
      </Card>
    </div>
  )
}
