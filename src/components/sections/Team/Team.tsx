import { useRef, useEffect, useState } from 'react'
import {
  TeamSection,
  SectionTitle,
  TeamGrid,
  MemberCard,
  MemberImage,
  MemberName,
  MemberRole,
} from './Team.styles'
import { teamMembers } from '../../../constants/team'
import { texts } from '../../../constants/texts'
import { useLanguage } from '../../../contexts/LanguageContext'

export const Team = () => {
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
    <TeamSection id="team" ref={sectionRef}>
      <SectionTitle $isVisible={isVisible}>
        {texts[language].team.title}
      </SectionTitle>

      <TeamGrid>
        {teamMembers.map((member, index) => (
          <MemberCard key={member.id} $index={index} $isVisible={isVisible}>
            <MemberImage
              src={member.image}
              alt={member.name}
              loading="lazy"
            />
            <MemberName>{member.name}</MemberName>
            <MemberRole>{member.role[language]}</MemberRole>
          </MemberCard>
        ))}
      </TeamGrid>
    </TeamSection>
  )
}

