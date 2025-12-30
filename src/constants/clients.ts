import { IMAGE_URLS } from '../config/storage'

export interface ClientLogo {
  name: string
  image: string
  alt: string
}

export const clientLogos: ClientLogo[] = [
  {
    name: 'Adobe',
    image: IMAGE_URLS.clients.adobe,
    alt: 'Adobe',
  },
  {
    name: 'BID',
    image: IMAGE_URLS.clients.bid,
    alt: 'BID',
  },
  {
    name: 'Colgate',
    image: IMAGE_URLS.clients.colgate,
    alt: 'Colgate',
  },
  {
    name: 'flybondi',
    image: IMAGE_URLS.clients.flybondi,
    alt: 'flybondi',
  },
  {
    name: 'Força',
    image: IMAGE_URLS.clients.forca,
    alt: 'Força BY SAMSA DIGITAL',
  },
  {
    name: 'Sanofi',
    image: IMAGE_URLS.clients.sanofi,
    alt: 'Sanofi',
  },
  {
    name: 'Ford',
    image: IMAGE_URLS.clients.ford,
    alt: 'Ford',
  },
]

