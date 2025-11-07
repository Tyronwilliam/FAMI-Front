"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Instagram, Facebook } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-gradient-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-5xl md:text-7xl text-center text-primary-foreground mb-16">
            Contact
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="font-display text-3xl text-foreground mb-6">
                Nous contacter
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    placeholder="Nom complet"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    placeholder="Téléphone"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Votre message..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows={4}
                    className="w-full"
                  />
                </div>
                <div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-secondary text-accent-foreground hover:opacity-90 border-0"
                  >
                    Envoyer le message
                  </Button>
                </div>
              </form>
            </div>

            {/* Map & Info */}
            <div className="space-y-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg h-80">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.2891234567890!2d2.3897!3d48.8697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66dfa123456%3A0x123456789abcdef!2s39%20Bis%20Rue%20de%20Tourtille%2C%2075020%20Paris!5e0!3m2!1sfr!2sfr!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="FAMI RESTAURANT Location"
                />
              </div>

              <div className="bg-white rounded-lg p-8 shadow-lg">
                <h3 className="font-display text-2xl text-foreground mb-4">
                  Informations
                </h3>
                <div className="space-y-3 text-foreground/80">
                  <p>
                    <strong>Adresse:</strong>
                    <br />
                    39 bis rue de tourtille
                    <br />
                    75020 Paris, France
                  </p>
                  <p>
                    <strong>Horaires:</strong>
                    <br />
                    Mardi - Dimanche: 12h00 - 23h00
                    <br />
                    Fermé le lundi
                  </p>
                  <p>
                    <strong>Téléphone:</strong>
                    <br />
                    +33 1 23 45 67 89
                  </p>
                </div>

                <div className="flex gap-4 mt-6">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-secondary rounded-full flex items-center justify-center text-accent-foreground hover:opacity-90 transition-opacity"
                    aria-label="Instagram"
                  >
                    <Instagram size={24} />
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-secondary rounded-full flex items-center justify-center text-accent-foreground hover:opacity-90 transition-opacity"
                    aria-label="Facebook"
                  >
                    <Facebook size={24} />
                  </a>
                  <a
                    href="https://tiktok.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-secondary rounded-full flex items-center justify-center text-accent-foreground hover:opacity-90 transition-opacity"
                    aria-label="TikTok"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6"
                    >
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                    </svg>
                  </a>
                </div>

                <p className="text-sm text-muted-foreground mt-6">
                  En partenariat avec <strong>Résident Tablerie</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
