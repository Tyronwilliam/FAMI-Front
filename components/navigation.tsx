"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

type NavigationLink = {
  label: string;
  page?: { slug: string }; // si tu as un lien interne vers une page
  url?: string; // si tu as un lien externe
};

type NavigationBlock = {
  logo?: { url: string; name: string };
  lien?: NavigationLink[];
};

interface NavigationProps {
  datas: NavigationBlock;
}

export default function Navigation({ datas }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Récupère les liens depuis Strapi, fallback sur ancre si vide
  const navLinks: NavigationLink[] =
    datas?.lien?.length !== undefined && datas?.lien?.length > 0
      ? datas.lien
      : [
          { label: "Menu", url: "#menu" },
          { label: "Qui sommes-nous", url: "#about" },
          { label: "Galerie", url: "#gallery" },
          { label: "Événements", url: "#events" },
          { label: "Contact", url: "#contact" },
        ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          className="flex items-center font-display text-2xl md:text-3xl text-foreground"
        >
          {datas?.logo ? (
            <img
              src={
                datas.logo.url.startsWith("http")
                  ? datas.logo.url
                  : `${process.env.NEXT_PUBLIC_STRAPI_URL || ""}${
                      datas.logo.url
                    }`
              }
              alt={datas.logo.name}
              className="h-8 md:h-20 mr-2"
            />
          ) : null}
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={
                link.url ?? `#${link.label.toLowerCase().replace(/\s+/g, "-")}`
              }
              className="text-secondary hover:text-primary transition-colors duration-300"
            >
              {link.label}
            </a>
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
            <a
              key={link.label}
              href={
                link.url ?? `#${link.label.toLowerCase().replace(/\s+/g, "-")}`
              }
              className="text-secondary hover:text-primary transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
