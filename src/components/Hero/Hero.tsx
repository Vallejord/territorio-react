import { useState, useEffect } from 'react'
import {
  HeroSection,
  VideoBackground,
  Overlay,
} from './Hero.styles'
import { VIDEO_URLS } from '../../config/storage'

export const Hero = () => {
  const [videoSrc, setVideoSrc] = useState<string>(VIDEO_URLS.header.desktop)

  useEffect(() => {
    // Detectar viewport y seleccionar video apropiado
    const isMobile = window.innerWidth <= 768
    setVideoSrc(isMobile ? VIDEO_URLS.header.mobile : VIDEO_URLS.header.desktop)
  }, [])

  return (
    <HeroSection id="hero" role="region" aria-label="Hero section">
      <VideoBackground
        key={videoSrc} // Forzar re-render cuando cambia la fuente
        data-testid="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        src={videoSrc}
      />
      
      <Overlay data-testid="hero-overlay" />
    </HeroSection>
  )
}
