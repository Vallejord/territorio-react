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
  padding: 6rem 2rem;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
  }
`

export const ContentWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 4rem;

  @media (max-width: 768px) {
    gap: 3rem;
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
  padding: 2rem 0;

  .swiper {
    width: 100%;
    padding: 1rem 0;
  }

  .swiper-slide {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 768px) {
    padding: 1rem 0;
  }
`

export const LogoSlide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.5rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`

export const LogoImage = styled.img<{ $delay: number; $isVisible: boolean }>`
  height: 240px;
  width: auto;
  max-width: 600px;
  object-fit: contain;
  filter: brightness(0) invert(1);
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  animation: ${({ $isVisible }) => ($isVisible ? fadeInScale : 'none')} 0.6s
    ease-out ${({ $delay }) => $delay}s both;
  transition: opacity 0.3s ease;

  @media (max-width: 768px) {
    height: 200px;
    max-width: 500px;
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

