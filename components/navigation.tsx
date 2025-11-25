'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

type NavigationLink = {
  label: string
  id: number // si tu as un lien interne vers une page
}

type NavigationBlock = {
  logo?: { url: string; name: string; width: number; height: number }
  lien?: NavigationLink[]
}

interface NavigationProps {
  datas: NavigationBlock
}

export default function Navigation({ datas }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isScrolledMenu, setIsScrolledMenu] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      setIsScrolledMenu(window.scrollY > 735 && window.scrollY < 1303)
    }
    window.addEventListener('scroll', handleScroll)
    // nettoyage à la fin (très important)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Récupère les liens depuis Strapi, fallback sur ancre si vide
  const navLinks: NavigationLink[] | boolean =
    datas?.lien?.length !== undefined && datas?.lien?.length > 0 ? datas.lien : []

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex md:items-center justify-between md:justify-center">
        {/* Logo */}
        <Link
          href="#accueil"
          className="flex items-center  font-display text-2xl md:text-3xl text-foreground"
        >
          {datas?.logo ? (
            <Image
              src={
                datas.logo.url.startsWith('http')
                  ? datas.logo.url
                  : `${process.env.NEXT_PUBLIC_STRAPI_URL || ''}${datas.logo.url}`
              }
              width={datas.logo.width}
              height={datas.logo.height}
              alt={datas.logo.name}
              className="h-8 md:h-20 w-auto mr-2 text-sm"
            />
          ) : null}
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center md:mx-auto gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={`#${link.label.toLowerCase().replace(/\s+/g, '-')}`}
              className={cn(
                'text-xl text-secondary hover:text-primary transition-colors duration-300',
                isScrolledMenu && 'text-white'
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-secondary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 p-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={`#${link.label.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-secondary hover:text-primary transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
