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
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`

export const TeamSection = styled.section`
  background-color: #000000;
  padding: 4rem 2rem;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`

export const SectionTitle = styled.h2<{ $isVisible: boolean }>`
  font-size: 2.5rem;
  color: #ffffff;
  text-align: center;
  margin: 0 0 3rem 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 400;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  animation: ${({ $isVisible }) => ($isVisible ? fadeInUp : 'none')} 0.8s ease-out;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`

export const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  max-width: 1600px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`

export const MemberCard = styled.div<{ $index: number; $isVisible: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  animation: ${({ $isVisible }) => ($isVisible ? fadeInScale : 'none')} 0.6s
    ease-out ${({ $index }) => $index * 0.15}s both;
`

export const MemberImage = styled.img`
  width: 100%;
  max-width: 350px;
  height: auto;
  aspect-ratio: 3 / 4;
  object-fit: cover;
  margin-bottom: 1.5rem;
  transition: transform 0.3s ease;
  display: block;

  ${MemberCard}:hover & {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    max-width: 280px;
    margin-bottom: 1rem;
  }
`

export const MemberName = styled.h3`
  font-size: 1.5rem;
  color: #ffffff;
  margin: 0 0 0.5rem 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`

export const MemberRole = styled.p`
  font-size: 1rem;
  color: #ffffff;
  margin: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 400;
  opacity: 0.8;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`

