import poloImage from '../assets/images/current-projects/polo.png'
import territorioImage from '../assets/images/current-projects/territorio.png'

export type ProjectStatus = 'pre-production' | 'post-production'

export interface CurrentProject {
  id: string
  title: { es: string; en: string }
  subtitle: { es: string; en: string }
  image: string
  status: ProjectStatus
}

export const currentProjects: CurrentProject[] = [
  {
    id: 'polo',
    title: { es: 'POLO', en: 'POLO' },
    subtitle: { es: 'Polo Cortometraje - Pre producción', en: 'Polo Short Film - Pre-production' },
    image: poloImage,
    status: 'pre-production',
  },
  {
    id: 'territorio',
    title: { es: 'Territorio', en: 'Territorio' },
    subtitle: { es: 'Documental - Post producción', en: 'Documentary - Post-production' },
    image: territorioImage,
    status: 'post-production',
  },
]


