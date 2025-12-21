// Logos de clientes
import adobeLogo from '../assets/images/clients/adobe.png'
import bidLogo from '../assets/images/clients/bid.png'
import colgateLogo from '../assets/images/clients/colgate.png'
import flybondiLogo from '../assets/images/clients/flybondi.png'
import forcaLogo from '../assets/images/clients/forca.png'
import sanofiLogo from '../assets/images/clients/sanofi.png'
import fordLogo from '../assets/images/clients/ford.png'

export interface ClientLogo {
  name: string
  image: string
  alt: string
}

export const clientLogos: ClientLogo[] = [
  {
    name: 'Adobe',
    image: adobeLogo,
    alt: 'Adobe',
  },
  {
    name: 'BID',
    image: bidLogo,
    alt: 'BID',
  },
  {
    name: 'Colgate',
    image: colgateLogo,
    alt: 'Colgate',
  },
  {
    name: 'flybondi',
    image: flybondiLogo,
    alt: 'flybondi',
  },
  {
    name: 'Força',
    image: forcaLogo,
    alt: 'Força BY SAMSA DIGITAL',
  },
  {
    name: 'Sanofi',
    image: sanofiLogo,
    alt: 'Sanofi',
  },
  {
    name: 'Ford',
    image: fordLogo,
    alt: 'Ford',
  },
]

