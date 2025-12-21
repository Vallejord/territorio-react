// Proyectos del showcase
import proyecto01Thumb from '../assets/images/work/proyecto-01.png'
import proyecto02Thumb from '../assets/images/work/proyecto-02.png'
import proyecto03Thumb from '../assets/images/work/proyecto-03.png'
import proyecto04Thumb from '../assets/images/work/proyecto-04.png'
import proyecto05Thumb from '../assets/images/work/proyecto-05.png'
import proyecto06Thumb from '../assets/images/work/proyecto-06.png'
import proyecto07Thumb from '../assets/images/work/proyecto-07.png'
import proyecto08Thumb from '../assets/images/work/proyecto-08.png'
import proyecto09Thumb from '../assets/images/work/proyecto-09.png'
import proyecto10Thumb from '../assets/images/work/proyecto-10.png'
import proyecto11Thumb from '../assets/images/work/proyecto-11.png'
import proyecto12Thumb from '../assets/images/work/proyecto-12.png'

// Nota: proyecto-01.mp4 no existe, usando proyecto-02 temporalmente
// TODO: Agregar proyecto-01.mp4 cuando esté disponible
import proyecto01Video from '../assets/videos/work/proyecto-02.mp4'
import proyecto02Video from '../assets/videos/work/proyecto-02.mp4'
import proyecto03Video from '../assets/videos/work/proyecto-03.mp4'
import proyecto04Video from '../assets/videos/work/proyecto-04.mp4'
import proyecto05Video from '../assets/videos/work/proyecto-05.mp4'
import proyecto06Video from '../assets/videos/work/proyecto-06.mp4'
import proyecto07Video from '../assets/videos/work/proyecto-07.mp4'
import proyecto08Video from '../assets/videos/work/proyecto-08.mp4'
import proyecto09Video from '../assets/videos/work/proyecto-09.mp4'
import proyecto10Video from '../assets/videos/work/proyecto-10.mp4'
import proyecto11Video from '../assets/videos/work/proyecto-11.mp4'
import proyecto12Video from '../assets/videos/work/proyecto-12.mp4'

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
    thumbnail: proyecto01Thumb,
    video: proyecto01Video,
  },
  {
    id: 'proyecto-02',
    title: {
      es: 'Bleuet de France 2025',
      en: 'Bleuet de France 2025',
    },
    category: 'publicidad',
    thumbnail: proyecto02Thumb,
    video: proyecto02Video,
  },
  {
    id: 'proyecto-03',
    title: {
      es: 'L\'Oréal Professionnel Paris',
      en: 'L\'Oréal Professionnel Paris',
    },
    category: 'publicidad',
    thumbnail: proyecto03Thumb,
    video: proyecto03Video,
  },
  {
    id: 'proyecto-04',
    title: {
      es: 'Colgate - Vivo Colgate',
      en: 'Colgate - Vivo Colgate',
    },
    category: 'publicidad',
    thumbnail: proyecto04Thumb,
    video: proyecto04Video,
  },
  {
    id: 'proyecto-05',
    title: {
      es: 'Demo Reel',
      en: 'Demo Reel',
    },
    category: 'videoclips',
    thumbnail: proyecto05Thumb,
    video: proyecto05Video,
  },
  {
    id: 'proyecto-06',
    title: {
      es: 'Flybondi',
      en: 'Flybondi',
    },
    category: 'redes',
    thumbnail: proyecto06Thumb,
    video: proyecto06Video,
  },
  {
    id: 'proyecto-07',
    title: {
      es: 'Ford Ranger',
      en: 'Ford Ranger',
    },
    category: 'publicidad',
    thumbnail: proyecto07Thumb,
    video: proyecto07Video,
  },
  {
    id: 'proyecto-08',
    title: {
      es: 'Fortaleza - CIRC Documental',
      en: 'Fortaleza - CIRC Documentary',
    },
    category: 'documentales',
    thumbnail: proyecto08Thumb,
    video: proyecto08Video,
  },
  {
    id: 'proyecto-09',
    title: {
      es: 'KCC Trailer',
      en: 'KCC Trailer',
    },
    category: 'documentales',
    thumbnail: proyecto09Thumb,
    video: proyecto09Video,
  },
  {
    id: 'proyecto-10',
    title: {
      es: 'KCC II Trailer',
      en: 'KCC II Trailer',
    },
    category: 'documentales',
    thumbnail: proyecto10Thumb,
    video: proyecto10Video,
  },
  {
    id: 'proyecto-11',
    title: {
      es: 'Sanofi Go To Market',
      en: 'Sanofi Go To Market',
    },
    category: 'publicidad',
    thumbnail: proyecto11Thumb,
    video: proyecto11Video,
  },
  {
    id: 'proyecto-12',
    title: {
      es: 'Somos Docentes 2025',
      en: 'Somos Docentes 2025',
    },
    category: 'tv',
    thumbnail: proyecto12Thumb,
    video: proyecto12Video,
  },
]

