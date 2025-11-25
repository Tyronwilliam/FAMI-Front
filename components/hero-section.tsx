'use client'

import { Button } from '@/components/ui/button'
import { MapPin, Clock } from 'lucide-react'
import Image from 'next/image'
import VideoRender from './components/video-render'
import BigTitle from './components/big-title'

interface HeroSectionProps {
  datas: any // données Strapi
}

export default function HeroSection({ datas }: HeroSectionProps) {
  const grosTitre = datas?.Gros_Titre?.label ?? 'FAMI RESTAURANT'
  const sousTitres = datas?.sous_titre ?? []
  const logo = datas?.logo
  const redirections = datas?.redirections ?? []
  const remplacerTitreParLogo = datas?.remplacer_titre_par_logo ?? false
  return (
    <section
      id={`${datas.section.toLowerCase().replace(/\s+/g, '-')}`}
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Video Background */}
      {datas?.video_en_fond ? (
        <VideoRender url={datas.video_en_fond.url} />
      ) : (
        <div className="absolute inset-0 bg-muted" />
      )}
      {/* Overlay */}{' '}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-primary/30" />
      {/* <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-white/70 to-primary/80" /> */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-white/50 to-primary/30" /> */}
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        {/* Logo ou titre */}
        {remplacerTitreParLogo && logo?.url ? (
          <Image
            src={
              logo.url.startsWith('http')
                ? logo.url
                : `${process.env.NEXT_PUBLIC_STRAPI_URL || ''}${logo.url}`
            }
            width={logo.width}
            height={logo.height}
            alt={logo.name || 'Logo'}
            className="
              w-48 h-auto 
              md:w-72 
              lg:w-80 
              xl:w-[400px] 
              mb-6
              object-contain
            "
          />
        ) : (
          <BigTitle title={grosTitre} type={datas?.Gros_Titre?.type} />
        )}
        {/* Sous-titres */}
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-white/90 mb-8">
          {sousTitres.map((item: any) => (
            <div key={item.id} className="flex items-center gap-2 ">
              {item.ajouter_icone && item.icone === 'location' && <MapPin size={20} />}
              {item.ajouter_icone && item.icone === 'time' && <Clock size={20} />}
              <span className="text-lg md:text-xl">{item.label}</span>
            </div>
          ))}
        </div>{' '}
        {/* Redirections / boutons */}
        <div className="flex flex-col sm:flex-row gap-4">
          {redirections.map((r: any) => (
            <Button
              key={r.id}
              asChild
              size="lg"
              className="max-w-[300px] md:w-fit bg-gradient-secondary text-muted  hover:opacity-90 text-lg px-8 py-6 border-0"
            >
              <a href={`${r.content.url}`} target="_blank">
                {r.content.label}
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
  )
}
