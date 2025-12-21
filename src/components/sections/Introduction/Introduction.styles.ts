import styled, { keyframes } from 'styled-components'

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const fadeInScale = keyframes`
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`

export const IntroductionSection = styled.section<{ $isVisible: boolean }>`
  background-color: #000000;
  padding: 3rem 1rem;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`

export const ContentWrapper = styled.div`
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 768px) {
    gap: 1.5rem;
  }
`

export const MissionText = styled.p<{ $isVisible: boolean }>`
  font-size: 1.5rem;
  line-height: 1.8;
  color: #ffffff;
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  animation: ${({ $isVisible }) => ($isVisible ? fadeInUp : 'none')} 0.8s ease-out;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;

  @media (max-width: 1024px) {
    font-size: 1.25rem;
    line-height: 1.7;
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
    line-height: 1.6;
    text-align: left;
  }
`

export const EmphasizedText = styled.span`
  color: #ff0000;
  font-weight: 700;
`

export const LogosWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  padding: 1rem 0;
  margin: 0;

  .swiper {
    width: 100%;
    padding: 0;
    margin: 0;
  }

  .swiper-wrapper {
    display: flex;
    align-items: center;
  }

  .swiper-slide {
    width: auto !important;
    min-width: 250px !important;
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    height: auto !important;
    flex-shrink: 0 !important;
  }

  @media (max-width: 1024px) {
    .swiper-slide {
      min-width: 220px !important;
    }
  }

  @media (max-width: 768px) {
    padding: 0.5rem 0;
    
    .swiper-slide {
      min-width: 180px !important;
    }
  }
`

export const LogoSlide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  padding: 1rem 1.5rem;
  margin: 0;
  min-width: 100%;
  width: 100%;
  height: 100%;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`

export const LogoImage = styled.img<{ $delay: number; $isVisible: boolean }>`
  height: 120px !important;
  min-height: 120px !important;
  width: auto !important;
  max-width: 250px !important;
  min-width: 150px !important;
  object-fit: contain !important;
  object-position: center !important;
  filter: brightness(0) invert(1);
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  animation: ${({ $isVisible }) => ($isVisible ? fadeInScale : 'none')} 0.6s
    ease-out ${({ $delay }) => $delay}s both;
  transition: opacity 0.3s ease;
  flex-shrink: 0 !important;
  display: block !important;

  @media (max-width: 1024px) {
    height: 100px !important;
    min-height: 100px !important;
    max-width: 220px !important;
    min-width: 130px !important;
  }

  @media (max-width: 768px) {
    height: 80px !important;
    min-height: 80px !important;
    max-width: 180px !important;
    min-width: 110px !important;
  }
`

export const ForcaSubtext = styled.span`
  font-size: 0.65rem;
  color: #ffffff;
  opacity: 0.7;
  text-align: center;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  letter-spacing: 0.05em;
  text-transform: uppercase;
`

