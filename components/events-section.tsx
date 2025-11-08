import { Calendar } from "lucide-react";

export default function EventsSection({ datas }: { datas: any }) {
  const events = datas?.evenements ?? [];

  // On garde seulement les événements à venir
  const now = new Date();
  const upcomingEvents = events.filter((e: any) => new Date(e.horaire) > now);

  // Format de la date en français
  const formatDate = (dateString: string) =>
    new Date(dateString).toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
    });

  return (
    <section id="events" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="w-full max-w-6xl mx-auto ">
          {/* Titre principal */}
          <h2 className="font-display text-5xl md:text-7xl text-center text-[#efaa30] mb-16">
            {/* <h2 className="font-display text-5xl md:text-7xl text-center text-foreground mb-16"> */}
            {datas?.Gros_Titre?.label || "Événements"}
          </h2>

          {/* Si aucun événement */}
          {upcomingEvents.length === 0 ? (
            <p className="text-center text-muted-foreground text-lg mt-12 ">
              Aucun événement à venir pour le moment. Revenez bientôt !
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
              {upcomingEvents.map((event: any) => (
                <div
                  key={event.id}
                  className="flex flex-col bg-card rounded-xl    p-8    shadow-sm hover:shadow-md    transition-all    duration-300    border   border-border h-full"
                >
                  {/* Date */}
                  {event.horaire && (
                    <div className="flex items-center gap-2 text-primary mb-4">
                      <Calendar size={20} />
                      <span className="font-semibold">
                        {formatDate(event.horaire)}
                      </span>
                    </div>
                  )}

                  {/* Titre et description */}
                  <div className="flex flex-col flex-grow justify-between">
                    <div>
                      {event.Gros_Titre?.label && (
                        <h3 className="font-display text-2xl text-gradient-primary mb-3">
                          {event.Gros_Titre.label}
                        </h3>
                      )}

                      {event.sous_titre?.label && (
                        <p className="text-gradient-primary leading-relaxed">
                          {event.sous_titre.label}
                        </p>
                      )}
                    </div>

                    {/* CTA ou bas de carte (optionnel) */}
                    {event.cta && (
                      <a
                        href={event.cta.url}
                        className="mt-6 text-sm font-medium text-gradient-primary hover:underline"
                      >
                        {event.cta.label}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
