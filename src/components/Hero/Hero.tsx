import {
  HeroSection,
  VideoBackground,
  Overlay,
} from './Hero.styles'
import { VIDEO_URLS } from '../../config/storage'

export const Hero = () => {
  return (
    <HeroSection id="hero" role="region" aria-label="Hero section">
      <VideoBackground
        data-testid="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        {/* Mobile-first: smaller video loads first on mobile connections */}
        <source src={VIDEO_URLS.header.mobile} type="video/mp4" media="(max-width: 768px)" />
        <source src={VIDEO_URLS.header.desktop} type="video/mp4" />
      </VideoBackground>
      
      <Overlay data-testid="hero-overlay" />
    </HeroSection>
  )
}
