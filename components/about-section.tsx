'use client'

import Image from 'next/image'
import BigTitle from './components/big-title'

export default function AboutSection({ datas }: { datas: any }) {
  const blocks = datas?.content ?? []

  return (
    <section
      id={`${datas.section.toLowerCase().replace(/\s+/g, '-')}`}
      className="py-20 md:py-32 bg-background"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {datas?.Gros_Titre?.label && (
            // <h2 className="font-display text-5xl md:text-7xl text-center text-foreground mb-16">
            // <h2 className="font-display text-5xl md:text-7xl text-center text-[#efaa30] ">
            //   {datas.Gros_Titre.label}
            // </h2>
            <BigTitle
              title={datas.Gros_Titre.label}
              type={datas.Gros_Titre.type}
              textColor="text-[#efaa30] text-center"
            />
          )}

          {blocks.map((block: any, index: number) => (
            <div key={block.id} className={`grid md:grid-cols-2 gap-12 items-center my-16 `}>
              {/* Texte */}
              <div
                className={`space-y-6 text-foreground/90 leading-relaxed ${
                  index % 2 === 1 ? 'md:order-2' : 'md:order-1'
                }`}
              >
                <p className="text-lg">{block.texte}</p>
              </div>

              {/* Image */}
              {block.image?.url && (
                <div
                  className={`relative h-80 md:h-96 rounded-lg overflow-hidden shadow-lg ${
                    index % 2 === 1 ? 'md:order-1' : 'md:order-2'
                  }`}
                >
                  <Image
                    width={block.image.width}
                    height={block.image.height}
                    src={`${process.env.NEXT_PUBLIC_STRAPI_URL || ''}${block.image.url}`}
                    alt={block.image.alternativeText ?? ''}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
