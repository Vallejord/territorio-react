export const SECTIONS = {
  HERO: 'hero',
  INTRODUCTION: 'introduction',
  WORK: 'work',
  CURRENT_PROJECTS: 'current-projects',
  TEAM: 'team',
  CONTACT: 'contact',
} as const

export type SectionId = typeof SECTIONS[keyof typeof SECTIONS]

export interface Section {
  id: SectionId
  label: {
    es: string
    en: string
  }
}

export const sections: Section[] = [
  {
    id: SECTIONS.HERO,
    label: {
      es: 'Inicio',
      en: 'Home',
    },
  },
  {
    id: SECTIONS.INTRODUCTION,
    label: {
      es: 'Nosotros',
      en: 'About',
    },
  },
  {
    id: SECTIONS.WORK,
    label: {
      es: 'Trabajo',
      en: 'Work',
    },
  },
  {
    id: SECTIONS.CURRENT_PROJECTS,
    label: {
      es: 'Proyectos',
      en: 'Projects',
    },
  },
  {
    id: SECTIONS.TEAM,
    label: {
      es: 'Equipo',
      en: 'Team',
    },
  },
  {
    id: SECTIONS.CONTACT,
    label: {
      es: 'Contacto',
      en: 'Contact',
    },
  },
]


