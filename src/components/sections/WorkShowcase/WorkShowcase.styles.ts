import styled, { keyframes } from 'styled-components'

const kenBurns = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
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

export const WorkSection = styled.section`
  background-color: #000000;
  padding: 0;
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  box-sizing: border-box;
`

export const CategoriesBanner = styled.div`
  background-color: #ffffff;
  padding: 2rem 0;
  margin: 0;
  width: 100%;
  text-align: center;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 1.5rem 0;
  }
`

export const CategoryText = styled.p`
  color: #000000;
  font-size: 2rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  margin: 0;
  width: 100%;
  white-space: nowrap;
  font-weight: 500;

  @media (max-width: 1024px) {
    font-size: 1.5rem;
    letter-spacing: 0.25em;
  }

  @media (max-width: 768px) {
    font-size: 1.125rem;
    letter-spacing: 0.2em;
    white-space: normal;
  }
`

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0;
  width: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const ProjectCard = styled.div<{ $index: number }>`
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  cursor: pointer;
  opacity: 0;
  animation: ${fadeInScale} 0.6s ease-out
    ${({ $index }) => $index * 0.05}s forwards;
  margin: 0;
  padding: 0;
  display: block;
  box-sizing: border-box;

  &:hover {
    z-index: 10;
  }

  @media (max-width: 1024px) {
    aspect-ratio: 1 / 1;
  }

  @media (max-width: 768px) {
    aspect-ratio: 16 / 9;
  }
`

export const ProjectThumbnail = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
  margin: 0;
  padding: 0;
  animation: ${kenBurns} 20s ease-in-out infinite;
  transition: transform 0.3s ease;

  ${ProjectCard}:hover & {
    transform: scale(1.1);
    animation-play-state: paused;
  }
`

export const ProjectOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.3) 50%,
    rgba(0, 0, 0, 0.7) 100%
  );
  display: flex;
  align-items: flex-end;
  padding: 1rem;
  margin: 0;
  opacity: 0;
  transition: opacity 0.3s ease;
  box-sizing: border-box;

  ${ProjectCard}:hover & {
    opacity: 1;
  }

  @media (max-width: 768px) {
    opacity: 1;
    padding: 0.75rem;
  }
`

export const ProjectTitle = styled.h3`
  color: #ffffff;
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.8);

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`
