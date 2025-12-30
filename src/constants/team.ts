import { IMAGE_URLS } from '../config/storage'

export interface TeamMember {
  id: string
  name: string
  role: { es: string; en: string }
  image: string
}

export const teamMembers: TeamMember[] = [
  {
    id: 'leandro',
    name: 'Leandro Caterberg',
    role: { es: 'Director y editor', en: 'Director and editor' },
    image: IMAGE_URLS.team.leandro,
  },
  {
    id: 'joan',
    name: 'Joan Pesquera',
    role: { es: 'Director creativo y editor', en: 'Creative director and editor' },
    image: IMAGE_URLS.team.joan,
  },
  {
    id: 'andrea',
    name: 'Andrea Madruga',
    role: { es: 'Productora y realizadora', en: 'Producer and director' },
    image: IMAGE_URLS.team.andrea,
  },
]


