import Image from 'next/image'
import { RiInstagramFill, RiFacebookFill, RiTiktokFill } from 'react-icons/ri'

const ICON_MAP: Record<string, any> = {
  instagram: RiInstagramFill,
  facebook: RiFacebookFill,
  tiktok: RiTiktokFill
}

export default function Footer({ datas }: { datas: any }) {
  if (!datas?.content?.length) return null

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        {/* --- Grille principale --- */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {datas.content.map((block: any) => (
            <div key={block.id} className="space-y-4">
              {/* --- Logo (si présent) --- */}
              {block.ajouter_logo && block.logo?.url && (
                <Image
                  src={`${process.env.NEXT_PUBLIC_STRAPI_URL || ''}${block.logo.url}`}
                  width={block.logo.width}
                  height={block.logo.height}
                  alt={block.logo.alternativeText || 'Logo'}
                  className="w-20 mb-4"
                />
              )}
              {/* --- Titre du bloc --- */}
              {block.titre?.label && <h4 className="font-semibold text-lg">{block.titre.label}</h4>}
              {/* --- Liste d’items (texte, contact, etc.) --- */}
              {block.item?.length > 0 && (
                <div className="space-y-2 text-background/80">
                  {block.item.map((i: any) => (
                    <p key={i.id} className="leading-relaxed">
                      {i.label}
                    </p>
                  ))}
                </div>
              )}
              {/* --- Réseaux sociaux (si présents) --- */}
              {block.redirections?.length > 0 && (
                <div className="flex gap-4 mt-2">
                  {block.redirections.map((r: any) => {
                    const iconName = r.content?.icone?.toLowerCase()
                    const Icon = ICON_MAP[iconName] || null
                    return (
                      <a
                        key={r.id}
                        href={r.content?.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                        aria-label={iconName}
                      >
                        {Icon ? (
                          <Icon size={20} />
                        ) : (
                          <span className="text-sm capitalize">{iconName}</span>
                        )}
                      </a>
                    )
                  })}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* --- Bas de page --- */}
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/60">
          <p>&copy; {new Date().getFullYear()} FAMI RESTAURANT. Tous droits réservés.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-background transition-colors">
              Mentions légales
            </a>
            <a href="#" className="hover:text-background transition-colors">
              Politique de confidentialité
            </a>
            <a href="#" className="hover:text-background transition-colors">
              CGV
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
