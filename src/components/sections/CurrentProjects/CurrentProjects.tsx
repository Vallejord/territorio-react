import { useRef, useEffect, useState } from 'react'
import {
  CurrentProjectsSection,
  SectionTitle,
  ProjectsGrid,
  ProjectCard,
  ProjectImage,
  ProjectContent,
  ProjectTitle,
  ProjectSubtitle,
  StatusBadge,
} from './CurrentProjects.styles'
import { currentProjects } from '../../../constants/currentProjects'
import { texts } from '../../../constants/texts'
import { useLanguage } from '../../../contexts/LanguageContext'

export const CurrentProjects = () => {
  const { language } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.disconnect()
          }
        })
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <CurrentProjectsSection id="current-projects" ref={sectionRef}>
      <SectionTitle $isVisible={isVisible}>
        {texts[language].currentProjects.title}
      </SectionTitle>

      <ProjectsGrid>
        {currentProjects.map((project, index) => (
          <ProjectCard key={project.id} $index={index} $isVisible={isVisible}>
            <ProjectImage
              src={project.image}
              alt={project.title[language]}
              loading="lazy"
            />
            <ProjectContent>
              <ProjectTitle>{project.title[language]}</ProjectTitle>
              <ProjectSubtitle>
                {project.subtitle[language]}
                <StatusBadge $status={project.status}>
                  {project.status === 'pre-production'
                    ? language === 'es'
                      ? 'Pre producción'
                      : 'Pre-production'
                    : language === 'es'
                      ? 'Post producción'
                      : 'Post-production'}
                </StatusBadge>
              </ProjectSubtitle>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </CurrentProjectsSection>
  )
}

