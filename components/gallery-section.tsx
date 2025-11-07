"use client";

export default function GallerySection({ datas }: { datas: any }) {
  const items = datas?.images_video ?? [];

  // Trier pour mettre les vidéos en premier
  const sortedItems = [...items].sort((a, b) => {
    const isVideoA = a.mime?.startsWith("video/") ? 1 : 0;
    const isVideoB = b.mime?.startsWith("video/") ? 1 : 0;
    return isVideoB - isVideoA; // vidéo d'abord
  });

  return (
    <section
      id={datas?.section ?? "gallery"}
      className="py-20 md:py-32 bg-muted"
    >
      <div className="container mx-auto px-4">
        {/* Gros titre */}
        {datas?.Gros_Titre?.label && (
          <h2 className="font-display text-5xl md:text-7xl text-center text-foreground mb-16">
            {datas.Gros_Titre.label}
          </h2>
        )}

        <div className="w-[66.66%] mx-auto flex flex-wrap gap-4 md:p-4 items-center justify-center">
          {sortedItems.map((item: any) => {
            const src = `${process.env.NEXT_PUBLIC_STRAPI_URL || ""}${
              item.url
            }`;
            const isVideo = item.mime?.startsWith("video/");

            if (isVideo) {
              // Vidéo full width
              return (
                <div
                  key={item.id}
                  className="w-full rounded-lg overflow-hidden shadow-lg mb-4"
                >
                  <video
                    src={src}
                    muted
                    autoPlay
                    className="w-full h-auto object-contain rounded-lg"
                  />
                  {item.alternativeText && (
                    <p className="mt-2 text-center text-muted-foreground">
                      {item.alternativeText}
                    </p>
                  )}
                </div>
              );
            }

            // Images en vignettes
            return (
              <div
                key={item.id}
                className="w-1/2 sm:w-1/3 md:w-auto max-w-[49%] h-fit rounded-lg overflow-hidden shadow-md"
              >
                <img
                  src={src}
                  alt={item.alternativeText ?? ""}
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
