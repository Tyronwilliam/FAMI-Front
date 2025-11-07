"use client";

import { Button } from "@/components/ui/button";
import { MapPin, Clock } from "lucide-react";

interface HeroSectionProps {
  datas: any; // données Strapi
}

export default function HeroSection({ datas }: HeroSectionProps) {
  const grosTitre = datas?.Gros_Titre?.label ?? "FAMI RESTAURANT";
  const sousTitres = datas?.sous_titre ?? [];
  const logo = datas?.logo;
  const redirections = datas?.redirections ?? [];
  const remplacerTitreParLogo = datas?.remplacer_titre_par_logo ?? false;

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      {datas?.video_en_fond ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src={`${process.env.NEXT_PUBLIC_STRAPI_URL || ""}${
              datas.video_en_fond.url
            }`}
            type="video/mp4"
          />
        </video>
      ) : (
        <div className="absolute inset-0 bg-muted" />
      )}
      {/* Overlay */}{" "}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-primary/30" />
      {/* <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-white/70 to-primary/80" /> */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-white/50 to-primary/30" /> */}
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        {/* Logo ou titre */}
        {remplacerTitreParLogo && logo?.url ? (
          <img
            src={
              logo.url.startsWith("http")
                ? logo.url
                : `${process.env.NEXT_PUBLIC_STRAPI_URL || ""}${logo.url}`
            }
            alt={logo.name || "Logo"}
            className="
              w-48 h-auto 
              md:w-72 
              lg:w-96 
              xl:w-[500px] 
              mb-6
              object-contain
            "
          />
        ) : (
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl text-white mb-6 animate-fade-in">
            {grosTitre}
          </h1>
        )}
        {/* Sous-titres */}
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-white/90 mb-8">
          {sousTitres.slice(0, 2).map((item: any) => (
            <div key={item.id} className="flex items-center gap-2">
              {item.ajouter_icone && item.icone === "location" && (
                <MapPin size={20} />
              )}
              {item.ajouter_icone && item.icone === "time" && (
                <Clock size={20} />
              )}
              <span className="text-lg md:text-xl">{item.label}</span>
            </div>
          ))}
        </div>{" "}
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-white/90 mb-8">
          {sousTitres.slice(-1).map((item: any) => (
            <div key={item.id} className="flex items-center gap-2">
              {item.ajouter_icone && item.icone === "location" && (
                <MapPin size={20} />
              )}
              {item.ajouter_icone && item.icone === "time" && (
                <Clock size={20} />
              )}
              <span className="text-lg md:text-xl">{item.label}</span>
            </div>
          ))}{" "}
        </div>
        {/* Redirections / boutons */}
        <div className="flex flex-col sm:flex-row gap-4">
          {redirections.map((r: any) => (
            <Button
              key={r.id}
              asChild
              size="lg"
              className="bg-gradient-secondary text-accent-foreground hover:opacity-90 text-lg px-8 py-6 border-0"
            >
              <a href={`#${r.identifiant.replace(/\s+/g, "-")}`}>
                {r.identifiant}
              </a>
            </Button>
          ))}
        </div>
      </div>
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
