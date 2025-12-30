// Videos e imágenes desde Cloud Storage
import { VIDEO_URLS, IMAGE_URLS } from '../config/storage'

export type ProjectCategory =
  | 'publicidad'
  | 'redes'
  | 'tv'
  | 'videoclips'
  | 'documentales'

export interface Project {
  id: string
  title: {
    es: string
    en: string
  }
  category: ProjectCategory
  thumbnail: string
  video: string
  client?: string
  year?: number
}

// TODO: Actualizar títulos y categorías según los proyectos reales
export const projects: Project[] = [
  {
    id: 'proyecto-01',
    title: {
      es: 'Proyecto 01',
      en: 'Project 01',
    },
    category: 'publicidad',
    thumbnail: IMAGE_URLS.work.proyecto01,
    video: VIDEO_URLS.work.proyecto02, // Nota: proyecto-01.mp4 no existe, usando proyecto-02 temporalmente
  },
  {
    id: 'proyecto-02',
    title: {
      es: 'Bleuet de France 2025',
      en: 'Bleuet de France 2025',
    },
    category: 'publicidad',
    thumbnail: IMAGE_URLS.work.proyecto02,
    video: VIDEO_URLS.work.proyecto02,
  },
  {
    id: 'proyecto-03',
    title: {
      es: 'L\'Oréal Professionnel Paris',
      en: 'L\'Oréal Professionnel Paris',
    },
    category: 'publicidad',
    thumbnail: IMAGE_URLS.work.proyecto03,
    video: VIDEO_URLS.work.proyecto03,
  },
  {
    id: 'proyecto-04',
    title: {
      es: 'Colgate - Vivo Colgate',
      en: 'Colgate - Vivo Colgate',
    },
    category: 'publicidad',
    thumbnail: IMAGE_URLS.work.proyecto04,
    video: VIDEO_URLS.work.proyecto04,
  },
  {
    id: 'proyecto-05',
    title: {
      es: 'Demo Reel',
      en: 'Demo Reel',
    },
    category: 'videoclips',
    thumbnail: IMAGE_URLS.work.proyecto05,
    video: VIDEO_URLS.work.proyecto05,
  },
  {
    id: 'proyecto-06',
    title: {
      es: 'Flybondi',
      en: 'Flybondi',
    },
    category: 'redes',
    thumbnail: IMAGE_URLS.work.proyecto06,
    video: VIDEO_URLS.work.proyecto06,
  },
  {
    id: 'proyecto-07',
    title: {
      es: 'Ford Ranger',
      en: 'Ford Ranger',
    },
    category: 'publicidad',
    thumbnail: IMAGE_URLS.work.proyecto07,
    video: VIDEO_URLS.work.proyecto07,
  },
  {
    id: 'proyecto-08',
    title: {
      es: 'Fortaleza - CIRC Documental',
      en: 'Fortaleza - CIRC Documentary',
    },
    category: 'documentales',
    thumbnail: IMAGE_URLS.work.proyecto08,
    video: VIDEO_URLS.work.proyecto08,
  },
  {
    id: 'proyecto-09',
    title: {
      es: 'KCC Trailer',
      en: 'KCC Trailer',
    },
    category: 'documentales',
    thumbnail: IMAGE_URLS.work.proyecto09,
    video: VIDEO_URLS.work.proyecto09,
  },
  {
    id: 'proyecto-10',
    title: {
      es: 'KCC II Trailer',
      en: 'KCC II Trailer',
    },
    category: 'documentales',
    thumbnail: IMAGE_URLS.work.proyecto10,
    video: VIDEO_URLS.work.proyecto10,
  },
  {
    id: 'proyecto-11',
    title: {
      es: 'Sanofi Go To Market',
      en: 'Sanofi Go To Market',
    },
    category: 'publicidad',
    thumbnail: IMAGE_URLS.work.proyecto11,
    video: VIDEO_URLS.work.proyecto11,
  },
  {
    id: 'proyecto-12',
    title: {
      es: 'Somos Docentes 2025',
      en: 'Somos Docentes 2025',
    },
    category: 'tv',
    thumbnail: IMAGE_URLS.work.proyecto12,
    video: VIDEO_URLS.work.proyecto12,
  },
]

