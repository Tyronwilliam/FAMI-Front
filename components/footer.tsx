import { Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-display text-2xl mb-4">FAMI RESTAURANT</h3>
            <p className="text-background/80 leading-relaxed">
              Restaurant & Résidence de Tablerie
              <br />
              Paris, France
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <div className="space-y-2 text-background/80">
              <p>39 bis rue de tourtille</p>
              <p>75020 Paris</p>
              <p>+33 1 23 45 67 89</p>
              <p>contact@famirestaurant.fr</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Suivez-nous</h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label="TikTok"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/60">
          <p>&copy; 2025 FAMI RESTAURANT. Tous droits réservés.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-background transition-colors">
              Mentions légales
            </a>
            <a href="#" className="hover:text-background transition-colors">
              Politique de confidentialité
            </a>
            <a href="#" className="hover:text-background transition-colors">
              CGV
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
