import {
  HeroSection,
  VideoBackground,
  Overlay,
} from './Hero.styles'

// Import video sources
import videoDesktop from '../../assets/videos/header/header-desktop-720.mp4'
import videoMobile from '../../assets/videos/header/header-smart.mp4'

export const Hero = () => {
  return (
    <HeroSection role="region" aria-label="Hero section">
      <VideoBackground
        data-testid="hero-video"
        autoPlay
        muted
        loop
        playsInline
      >
        {/* Mobile-first: smaller video loads first on mobile connections */}
        <source src={videoMobile} type="video/mp4" media="(max-width: 768px)" />
        <source src={videoDesktop} type="video/mp4" />
      </VideoBackground>
      
      <Overlay data-testid="hero-overlay" />
    </HeroSection>
  )
}
