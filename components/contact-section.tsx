'use client'

import {
  RiInstagramFill,
  RiFacebookFill,
  RiTiktokFill,
  RiMapPin2Fill,
  RiPhoneFill,
  RiMailFill,
  RiTimeFill
} from 'react-icons/ri'
import BigTitle from './components/big-title'

const ICON_MAP: Record<string, any> = {
  instagram: RiInstagramFill,
  facebook: RiFacebookFill,
  tiktok: RiTiktokFill,
  adresse: RiMapPin2Fill,
  téléphone: RiPhoneFill,
  email: RiMailFill,
  horaires: RiTimeFill
}

export default function ContactSection({ datas }: { datas: any }) {
  if (!datas) return null

  const contactBlock = datas
  const mainTitle = contactBlock.Gros_titre?.label
  const mainTitleType = contactBlock.Gros_titre?.type
  const sections = contactBlock.content || []

  return (
    <section
      id={`${datas.section.toLowerCase().replace(/\s+/g, '-')}`}
      className="py-20 md:py-32 bg-gradient-primary "
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* === TITRE PRINCIPAL === */}
          <BigTitle title={mainTitle} type={mainTitleType} textColor="text-jaune text-center" />

          <div className="grid lg:grid-cols-2 gap-12 mt-16">
            {/* === CONTENU DYNAMIQUE === */}
            {/* <div className="bg-white rounded-lg p-8 shadow-lg text-black"> */}
            <div className=" p-8  text-jaune">
              {/* Sous-titre global */}
              {contactBlock.content_titre?.label && (
                <h3 className="font-display text-4xl text-white mb-6">
                  {/* <h3 className="font-display text-2xl text-foreground mb-6"> */}
                  {contactBlock.content_titre.label}
                </h3>
              )}

              {/* === BOUCLE PRINCIPALE === */}
              {sections.map((section: any) => (
                <div
                  key={section.id}
                  className="space-y-6 flex flex-col md:flex-row md:flex-wrap lg:flex-col items-center justify-between"
                >
                  {/* Sous-section titre */}
                  {/* {section.content_titre?.label && (
                    <h4 className="text-4xl font-semibold text-jaune">
                      {/* <h4 className="text-2xl font-semibold text-foreground"> */}
                  {/* {section.content_titre.label}
                    </h4> */}
                  {/* )}  */}

                  {/* Contenu réel (Adresse, Horaires, Téléphone, etc.) */}
                  {section.content?.map((bloc: any) => (
                    <div key={bloc.id} className="text-4xl text-jaune md:w-1/2 lg:w-full">
                      {/* <div key={bloc.id} className="space-y-2 text-lg"> */}
                      {/* Libellé du bloc */}
                      {bloc.libelle?.label && (
                        <p className="font-semibold flex items-center gap-2">
                          {bloc.libelle.ajouter_icone && bloc.libelle.icone && (
                            <DynamicIcon name={bloc.libelle.icone} />
                          )}
                          {bloc.libelle.label}
                        </p>
                      )}

                      {/* Éléments (item[]) */}
                      {bloc.item?.length > 0 && (
                        <div className="space-y-1">
                          {bloc.item.map((i: any) => (
                            <p
                              key={i.id}
                              // className="flex items-center gap-2 text-foreground/80"
                              className="flex items-center gap-2 text-jaune text-xl"
                            >
                              {i.ajouter_icone && i.icone && <DynamicIcon name={i.icone} />}
                              {i.label}
                            </p>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>{' '}
            {/* === MAP === */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg min-h-[250px]">
              <iframe
                src={
                  contactBlock.map_url ||
                  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5248.5446294895255!2d2.3778500769638273!3d48.87208509974208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66de896e729c5%3A0x65fd8e1319a2d53e!2s39%20R.%20de%20Tourtille%2C%2075020%20Paris!5e0!3m2!1sfr!2sfr!4v1762617965796!5m2!1sfr!2sfr'
                }
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Map"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/** Icône dynamique selon Strapi */
function DynamicIcon({ name }: { name: string }) {
  const key = name?.toLowerCase()
  const Icon = ICON_MAP[key]
  return Icon ? <Icon size={18} className="text-foreground/70" /> : null
}
