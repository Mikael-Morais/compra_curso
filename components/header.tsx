"use client"

import Link from "next/link"
import Image from "next/image"
import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function Header() {
  const [cartCount] = useState(0)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container max-w-7xl mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="Curso Método" width={50} height={50} className="h-10 w-auto" />
          <span className="text-xl font-bold text-primary">Curso Método</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-accent">
            Início
          </Link>
          <Link href="/sobre" className="text-sm font-medium transition-colors hover:text-accent">
            Sobre Nós
          </Link>
          <Link href="#cursos" className="text-sm font-medium transition-colors hover:text-accent">
            Cursos
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="relative">
            <ShoppingCart className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-accent text-xs font-bold flex items-center justify-center text-accent-foreground">
                {cartCount}
              </span>
            )}
          </Button>
          <Button className="hidden md:inline-flex bg-accent hover:bg-accent/90 text-accent-foreground">Entrar</Button>
        </div>
      </div>
    </header>
  )
}
