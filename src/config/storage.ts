/**
 * Configuración de Cloud Storage para videos e imágenes
 */
const STORAGE_BUCKET = 'territorio-web-mvp'
const STORAGE_BASE_URL = `https://storage.googleapis.com/${STORAGE_BUCKET}`

export const VIDEO_URLS = {
  header: {
    desktop: `${STORAGE_BASE_URL}/videos/header/header-desktop-720.mp4`,
    mobile: `${STORAGE_BASE_URL}/videos/header/header-smart.mp4`,
  },
  work: {
    proyecto02: `${STORAGE_BASE_URL}/videos/work/proyecto-02.mp4`,
    proyecto03: `${STORAGE_BASE_URL}/videos/work/proyecto-03.mp4`,
    proyecto04: `${STORAGE_BASE_URL}/videos/work/proyecto-04.mp4`,
    proyecto05: `${STORAGE_BASE_URL}/videos/work/proyecto-05.mp4`,
    proyecto06: `${STORAGE_BASE_URL}/videos/work/proyecto-06.mp4`,
    proyecto07: `${STORAGE_BASE_URL}/videos/work/proyecto-07.mp4`,
    proyecto08: `${STORAGE_BASE_URL}/videos/work/proyecto-08.mp4`,
    proyecto09: `${STORAGE_BASE_URL}/videos/work/proyecto-09.mp4`,
    proyecto10: `${STORAGE_BASE_URL}/videos/work/proyecto-10.mp4`,
    proyecto11: `${STORAGE_BASE_URL}/videos/work/proyecto-11.mp4`,
    proyecto12: `${STORAGE_BASE_URL}/videos/work/proyecto-12.mp4`,
  },
}

export const IMAGE_URLS = {
  work: {
    proyecto01: `${STORAGE_BASE_URL}/images/work/proyecto-01.webp`,
    proyecto02: `${STORAGE_BASE_URL}/images/work/proyecto-02.webp`,
    proyecto03: `${STORAGE_BASE_URL}/images/work/proyecto-03.webp`,
    proyecto04: `${STORAGE_BASE_URL}/images/work/proyecto-04.webp`,
    proyecto05: `${STORAGE_BASE_URL}/images/work/proyecto-05.webp`,
    proyecto06: `${STORAGE_BASE_URL}/images/work/proyecto-06.webp`,
    proyecto07: `${STORAGE_BASE_URL}/images/work/proyecto-07.webp`,
    proyecto08: `${STORAGE_BASE_URL}/images/work/proyecto-08.webp`,
    proyecto09: `${STORAGE_BASE_URL}/images/work/proyecto-09.webp`,
    proyecto10: `${STORAGE_BASE_URL}/images/work/proyecto-10.webp`,
    proyecto11: `${STORAGE_BASE_URL}/images/work/proyecto-11.webp`,
    proyecto12: `${STORAGE_BASE_URL}/images/work/proyecto-12.webp`,
  },
  team: {
    leandro: `${STORAGE_BASE_URL}/images/team/leandro.webp`,
    joan: `${STORAGE_BASE_URL}/images/team/joan.webp`,
    andrea: `${STORAGE_BASE_URL}/images/team/andrea.webp`,
  },
  currentProjects: {
    polo: `${STORAGE_BASE_URL}/images/current-projects/polo.webp`,
    territorio: `${STORAGE_BASE_URL}/images/current-projects/territorio.webp`,
  },
  clients: {
    adobe: `${STORAGE_BASE_URL}/images/clients/adobe.webp`,
    bid: `${STORAGE_BASE_URL}/images/clients/bid.webp`,
    colgate: `${STORAGE_BASE_URL}/images/clients/colgate.webp`,
    flybondi: `${STORAGE_BASE_URL}/images/clients/flybondi.webp`,
    forca: `${STORAGE_BASE_URL}/images/clients/forca.webp`,
    sanofi: `${STORAGE_BASE_URL}/images/clients/sanofi.webp`,
    ford: `${STORAGE_BASE_URL}/images/clients/ford.webp`,
  },
}


