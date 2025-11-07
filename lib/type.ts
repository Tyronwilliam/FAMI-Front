// lib/types.ts
export interface Texte {
  label: string;
  type?: string;
  icone?: string;
  ajouter_icone?: boolean;
}

export interface Card {
  titre?: Texte;
  sous_titre?: Texte;
  icone?: string;
}

export interface EnteteCardBlock {
  __component: "block.entete-card";
  Gros_Titre?: Texte;
  sous_titre?: Texte;
  cards?: Card[];
  section?: string;
}

export interface Evenement {
  id: number;
  attributes: {
    title: string;
    date?: string;
  };
}

export interface EvenementBlock {
  __component: "block.evenement";
  Gros_Titre?: Texte;
  evenements?: Evenement[];
}

export interface GaleryBlock {
  __component: "block.galery";
  Gros_Titre?: Texte;
  images_video?: {
    id: number;
    url: string;
    name: string;
    mime?: string;
  }[];
}

export type Block = EnteteCardBlock | EvenementBlock | GaleryBlock;

export interface Site {
  id: number;
  attributes: {
    Entete: Block[];
  };
}
