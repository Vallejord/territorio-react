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
    proyecto01: `${STORAGE_BASE_URL}/images/work/proyecto-01.png`,
    proyecto02: `${STORAGE_BASE_URL}/images/work/proyecto-02.png`,
    proyecto03: `${STORAGE_BASE_URL}/images/work/proyecto-03.png`,
    proyecto04: `${STORAGE_BASE_URL}/images/work/proyecto-04.png`,
    proyecto05: `${STORAGE_BASE_URL}/images/work/proyecto-05.png`,
    proyecto06: `${STORAGE_BASE_URL}/images/work/proyecto-06.png`,
    proyecto07: `${STORAGE_BASE_URL}/images/work/proyecto-07.png`,
    proyecto08: `${STORAGE_BASE_URL}/images/work/proyecto-08.png`,
    proyecto09: `${STORAGE_BASE_URL}/images/work/proyecto-09.png`,
    proyecto10: `${STORAGE_BASE_URL}/images/work/proyecto-10.png`,
    proyecto11: `${STORAGE_BASE_URL}/images/work/proyecto-11.png`,
    proyecto12: `${STORAGE_BASE_URL}/images/work/proyecto-12.png`,
  },
  team: {
    leandro: `${STORAGE_BASE_URL}/images/team/leandro.jpg`,
    joan: `${STORAGE_BASE_URL}/images/team/joan.jpg`,
    andrea: `${STORAGE_BASE_URL}/images/team/andrea.jpg`,
  },
  currentProjects: {
    polo: `${STORAGE_BASE_URL}/images/current-projects/polo.png`,
    territorio: `${STORAGE_BASE_URL}/images/current-projects/territorio.png`,
  },
  clients: {
    adobe: `${STORAGE_BASE_URL}/images/clients/adobe.png`,
    bid: `${STORAGE_BASE_URL}/images/clients/bid.png`,
    colgate: `${STORAGE_BASE_URL}/images/clients/colgate.png`,
    flybondi: `${STORAGE_BASE_URL}/images/clients/flybondi.png`,
    forca: `${STORAGE_BASE_URL}/images/clients/forca.png`,
    sanofi: `${STORAGE_BASE_URL}/images/clients/sanofi.png`,
    ford: `${STORAGE_BASE_URL}/images/clients/ford.png`,
  },
}


