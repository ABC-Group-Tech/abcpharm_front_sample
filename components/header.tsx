"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Search, Globe, Menu, X } from "lucide-react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/827e493ebc831a4e34c3520d05058c4b4c07552b.png"
              alt="ABC PHARM"
              width={180}
              height={40}
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#platform" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Platform
            </Link>
            <Link href="#rd" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              R&D
            </Link>
            <Link
              href="#solutions"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Solutions
            </Link>
            <Link href="#news" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              News
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <Globe className="h-5 w-5" />
            </Button>
            <Button className="hidden sm:flex bg-accent text-accent-foreground hover:bg-accent/90">Contact us</Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              <Link href="/about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Link
                href="#platform"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Platform
              </Link>
              <Link href="#rd" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                R&D
              </Link>
              <Link
                href="#solutions"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Solutions
              </Link>
              <Link href="#news" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                News
              </Link>
              <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">Contact us</Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
