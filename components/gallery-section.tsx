'use client'

import Image from 'next/image'
import BigTitle from './components/big-title'

export default function GallerySection({ datas }: { datas: any }) {
  const items = datas?.images_video ?? []

  // Trier pour mettre les vidéos en premier
  const sortedItems = [...items].sort((a, b) => {
    const isVideoA = a.mime?.startsWith('video/') ? 1 : 0
    const isVideoB = b.mime?.startsWith('video/') ? 1 : 0
    return isVideoB - isVideoA // vidéo d'abord
  })

  return (
    <section
      id={`${datas.section.toLowerCase().replace(/\s+/g, '-')}`}
      className="py-20 md:py-32 bg-muted"
    >
      <div className="container mx-auto px-4">
        {/* Gros titre */}
        {datas?.Gros_Titre?.label && (
          <BigTitle
            title={datas.Gros_Titre.label}
            type={datas.Gros_Titre.type}
            textColor="text-[#0e4c2a] text-center"
          />
        )}

        <div className="lg:w-[66.66%] mx-auto flex flex-wrap gap-4 md:p-4 items-center justify-center  mt-16">
          {sortedItems.map((item: any) => {
            const src = `${process.env.NEXT_PUBLIC_STRAPI_URL || ''}${item.url}`
            const isVideo = item.mime?.startsWith('video/')

            if (isVideo) {
              // Vidéo full width
              return (
                <div key={item.id} className="w-full rounded-lg overflow-hidden shadow-lg mb-4">
                  <video
                    src={src}
                    muted
                    autoPlay
                    loop
                    preload="metadata"
                    className="w-full h-auto object-contain rounded-lg"
                  />
                  {item.alternativeText && (
                    <p className="mt-2 text-center text-muted-foreground">{item.alternativeText}</p>
                  )}
                </div>
              )
            }

            // Images en vignettes
            return (
              <div
                key={item.id}
                className="sm:w-1/3 md:w-auto w-full  md:max-w-[60%]  lg:max-w-[48%] h-fit rounded-lg overflow-hidden shadow-md"
              >
                <Image
                  width={item.width}
                  height={item.height}
                  src={src}
                  alt={item.alternativeText ?? ''}
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
