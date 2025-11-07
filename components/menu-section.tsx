"use client";

import { Button } from "@/components/ui/button";
import {
  LocateIcon,
  Timer,
  UtensilsCrossed,
  Wine,
  Download,
} from "lucide-react";
import { RiInstagramFill, RiFacebookFill, RiTiktokFill } from "react-icons/ri";
import { JSX } from "react";

const iconMap: Record<string, JSX.Element> = {
  forks: <UtensilsCrossed className="w-12 h-12 text-primary mx-auto mb-4" />,
  drink: <Wine className="w-12 h-12 text-primary mx-auto mb-4" />,
  location: <LocateIcon className="w-12 h-12 text-primary mx-auto mb-4" />,
  time: <Timer className="w-12 h-12 text-primary mx-auto mb-4" />,
  instagram: (
    <RiInstagramFill className="w-12 h-12 text-primary mx-auto mb-4" />
  ),
  facebook: <RiFacebookFill className="w-12 h-12 text-primary mx-auto mb-4" />,
  tiktok: <RiTiktokFill className="w-12 h-12 text-primary mx-auto mb-4" />,
  download: <Download className="w-12 h-12 text-primary mx-auto mb-4" />,
};

export default function MenuSection({ datas }: { datas: any }) {
  const cards = datas.cards ?? [];
  const redirections = datas.redirections ?? [];
  const grosTitre = datas.Gros_Titre?.label ?? "Notre Menu";
  const sousTitre =
    datas.sous_titre?.label ??
    "Découvrez notre sélection de plats et boissons préparés avec passion";

  return (
    <section
      id={datas.section ?? "menu"}
      className="py-20 md:py-32 bg-gradient-secondary"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Gros titre */}
          <h2 className="font-display text-5xl md:text-7xl text-accent-foreground mb-6">
            {grosTitre}
          </h2>

          {/* Sous-titre */}
          <p className="text-lg md:text-xl text-accent-foreground/80 mb-12 leading-relaxed">
            {sousTitre}
          </p>

          {/* Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {cards.map((card: any) => (
              <div
                key={card.id}
                className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                {/* Icône */}
                {card.icone && iconMap[card.icone]}

                {/* Titre */}
                {card.titre?.label && (
                  <h3 className="font-display text-2xl text-foreground mb-3">
                    {card.titre.label}
                  </h3>
                )}

                {/* Sous-titre */}
                {card.sous_titre?.label && (
                  <p className="text-muted-foreground leading-relaxed">
                    {card.sous_titre.label}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Redirections */}
          <div className="flex  gap-4 justify-center">
            {redirections.map((r: any) => {
              const pdfUrl = `${process.env.NEXT_PUBLIC_STRAPI_URL || ""}${
                r.content?.image?.url
              }`;
              if (!pdfUrl) return null; // Si pas de PDF, on ne rend rien

              return (
                <div key={r.id} className="flex gap-4">
                  {/* Bouton Voir PDF */}
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-primary text-white hover:opacity-90 border-0"
                  >
                    <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
                      {r.content?.label}
                    </a>
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
