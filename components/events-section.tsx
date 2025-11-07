import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const events = [
  {
    date: "15 Juin 2025",
    title: "Soirée Jazz Live",
    description:
      "Profitez d'une soirée musicale avec des artistes locaux dans une ambiance intimiste.",
  },
  {
    date: "22 Juin 2025",
    title: "Menu Dégustation",
    description:
      "Découvrez notre menu spécial en 5 services avec accord mets et vins.",
  },
  {
    date: "30 Juin 2025",
    title: "Exposition Tablerie",
    description:
      "Vernissage de l'exposition des artistes en résidence à la Tablerie.",
  },
];

export default function EventsSection() {
  return (
    <section id="events" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-5xl md:text-7xl text-center text-foreground mb-16">
            Événements
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <div
                key={index}
                className="bg-card rounded-lg p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-border"
              >
                <div className="flex items-center gap-2 text-primary mb-4">
                  <Calendar size={20} />
                  <span className="font-semibold">{event.date}</span>
                </div>
                <h3 className="font-display text-2xl text-card-foreground mb-3">
                  {event.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {event.description}
                </p>
                <Button
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                >
                  En savoir plus
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
