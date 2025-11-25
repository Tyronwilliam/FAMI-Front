import dynamic from 'next/dynamic'

export const componentMap: Record<
  string,
  {
    component: React.ComponentType<any>
    defaultProps?: Record<string, any>
  }
> = {
  // 🧭 Navigation principale (SEO important)
  'block.navigation': {
    component: dynamic(() => import('@/components/navigation').then((mod) => mod.default))
  },

  // 🏠 Section d’entête principale
  'block.generique': {
    component: dynamic(() => import('@/components/hero-section').then((mod) => mod.default))
  },

  // 🍽️ Menu / Section cartes
  'block.generique-card': {
    component: dynamic(() => import('@/components/menu-section').then((mod) => mod.default))
  },

  // 👥 Section "Qui sommes-nous"
  'block.qui-somme-nous': {
    component: dynamic(() => import('@/components/about-section').then((mod) => mod.default))
  },

  // 🖼️ Galerie
  'block.galerie': {
    component: dynamic(() => import('@/components/gallery-section').then((mod) => mod.default))
  },

  // 🎉 Événements
  'block.evenement': {
    component: dynamic(() => import('@/components/events-section').then((mod) => mod.default))
  },

  // 📞 Contact
  'block.contact': {
    component: dynamic(() => import('@/components/contact-section').then((mod) => mod.default))
  },

  // ⚓ Footer
  'block.liste': {
    component: dynamic(() => import('@/components/footer').then((mod) => mod.default))
  }
}
