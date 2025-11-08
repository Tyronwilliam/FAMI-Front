"use client";

export default function AboutSection({ datas }: { datas: any }) {
  const blocks = datas?.content ?? [];

  return (
    <section
      id={datas?.section ?? "about"}
      className="py-20 md:py-32 bg-background"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {datas?.Gros_Titre?.label && (
            // <h2 className="font-display text-5xl md:text-7xl text-center text-foreground mb-16">
            <h2 className="font-display text-5xl md:text-7xl text-center text-[#efaa30] mb-16">
              {datas.Gros_Titre.label}
            </h2>
          )}

          {blocks.map((block: any, index: number) => (
            <div
              key={block.id}
              className={`grid md:grid-cols-2 gap-12 items-center mb-16 `}
            >
              {/* Texte */}
              <div
                className={`space-y-6 text-foreground/90 leading-relaxed ${
                  index % 2 === 1 ? "md:order-2" : "md:order-1"
                }`}
              >
                <p className="text-lg">{block.texte}</p>
              </div>

              {/* Image */}
              {block.image?.url && (
                <div
                  className={`relative h-80 md:h-96 rounded-lg overflow-hidden shadow-lg ${
                    index % 2 === 1 ? "md:order-1" : "md:order-2"
                  }`}
                >
                  <img
                    src={`${process.env.NEXT_PUBLIC_STRAPI_URL || ""}${
                      block.image.url
                    }`}
                    alt={block.image.alternativeText ?? ""}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
