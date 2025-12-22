import leandroImage from '../assets/images/team/leandro.jpg'
import joanImage from '../assets/images/team/joan.jpg'
import andreaImage from '../assets/images/team/andrea.jpg'

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
    image: leandroImage,
  },
  {
    id: 'joan',
    name: 'Joan Pesquera',
    role: { es: 'Director creativo y editor', en: 'Creative director and editor' },
    image: joanImage,
  },
  {
    id: 'andrea',
    name: 'Andrea Madruga',
    role: { es: 'Productora y realizadora', en: 'Producer and director' },
    image: andreaImage,
  },
]

