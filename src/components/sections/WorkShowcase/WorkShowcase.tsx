import { useState } from 'react'
import {
  WorkSection,
  CategoriesBanner,
  CategoryText,
  ProjectsGrid,
  ProjectCard,
  ProjectThumbnail,
  ProjectOverlay,
  ProjectTitle,
} from './WorkShowcase.styles'
import { useLanguage } from '../../../contexts/LanguageContext'
import { projects } from '../../../constants/projects'
import { texts } from '../../../constants/texts'
import { VideoModal } from '../../features/VideoModal'

export const WorkShowcase = () => {
  const { language } = useLanguage()
  const [selectedProject, setSelectedProject] = useState<string | null>(null)

  const selectedProjectData = selectedProject
    ? projects.find((p) => p.id === selectedProject)
    : null

  const handleProjectClick = (projectId: string) => {
    setSelectedProject(projectId)
  }

  const handleCloseModal = () => {
    setSelectedProject(null)
  }

  const categoriesText = texts[language].workShowcase.categories

  return (
    <WorkSection id="work">
      <CategoriesBanner>
        <CategoryText>{categoriesText}</CategoryText>
      </CategoriesBanner>

      <ProjectsGrid data-testid="work-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            onClick={() => handleProjectClick(project.id)}
            $index={index}
          >
            <ProjectThumbnail
              src={project.thumbnail}
              alt={project.title[language]}
              loading="lazy"
            />
            <ProjectOverlay>
              <ProjectTitle>{project.title[language]}</ProjectTitle>
            </ProjectOverlay>
          </ProjectCard>
        ))}
      </ProjectsGrid>

      {selectedProjectData && (
        <VideoModal
          isOpen={!!selectedProject}
          videoSrc={selectedProjectData.video}
          title={selectedProjectData.title[language]}
          onClose={handleCloseModal}
        />
      )}
    </WorkSection>
  )
}

