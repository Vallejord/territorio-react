import { IMAGE_URLS } from '../config/storage'

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
    image: IMAGE_URLS.currentProjects.polo,
    status: 'pre-production',
  },
  {
    id: 'territorio',
    title: { es: 'Territorio', en: 'Territorio' },
    subtitle: { es: 'Documental - Post producción', en: 'Documentary - Post-production' },
    image: IMAGE_URLS.currentProjects.territorio,
    status: 'post-production',
  },
]


