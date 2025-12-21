import styled, { keyframes } from 'styled-components'
import type { ProjectStatus } from '../../../constants/currentProjects'

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

export const CurrentProjectsSection = styled.section`
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

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`

export const ProjectCard = styled.div<{ $index: number; $isVisible: boolean }>`
  display: flex;
  flex-direction: row;
  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  animation: ${({ $isVisible }) => ($isVisible ? fadeInScale : 'none')} 0.6s
    ease-out ${({ $index }) => $index * 0.2}s both;
  transition: box-shadow 0.3s ease, transform 0.3s ease;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const ProjectImage = styled.img`
  width: 50%;
  height: auto;
  object-fit: cover;
  display: block;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const ProjectContent = styled.div`
  width: 50%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;

  @media (max-width: 768px) {
    width: 100%;
    padding: 1.5rem;
  }
`

export const ProjectTitle = styled.h3`
  font-size: 2rem;
  color: #000000;
  margin: 0 0 0.5rem 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`

export const ProjectSubtitle = styled.p`
  font-size: 1rem;
  color: #333333;
  margin: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 400;
  line-height: 1.6;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`

export const StatusBadge = styled.span<{ $status: ProjectStatus }>`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 500;
  background-color: #e5e5e5;
  color: #333333;
  border: none;
  border-radius: 2px;

  @media (max-width: 768px) {
    font-size: 0.7rem;
    padding: 0.2rem 0.6rem;
  }
`

