import { useEffect } from 'react'
import { FiX, FiInstagram, FiLinkedin } from 'react-icons/fi'
import {
  MenuOverlay,
  MenuContainer,
  MenuHeader,
  CloseButton,
  MenuNav,
  MenuLink,
  MenuFooter,
  SocialLinks,
  SocialLink,
  LanguageToggle,
  LanguageButton,
  LanguageSeparator,
} from './MobileMenu.styles'
import { useLanguage } from '../../../contexts/LanguageContext'
import { sections } from '../../../constants/sections'
import { scrollToSection } from '../../../utils/scroll'

export interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  onNavigate?: (sectionId: string) => void
}

export const MobileMenu = ({ isOpen, onClose, onNavigate }: MobileMenuProps) => {
  const { language, setLanguage } = useLanguage()

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const handleLinkClick = (sectionId: string) => {
    scrollToSection(sectionId)
    onNavigate?.(sectionId)
    onClose()
  }

  const handleLanguageChange = (lang: 'es' | 'en') => {
    setLanguage(lang)
  }

  if (!isOpen) return null

  return (
    <MenuOverlay onClick={onClose} $isOpen={isOpen}>
      <MenuContainer onClick={(e) => e.stopPropagation()} $isOpen={isOpen}>
        <MenuHeader>
          <CloseButton onClick={onClose} aria-label="Cerrar menú">
            <FiX />
          </CloseButton>
        </MenuHeader>

        <MenuNav role="navigation">
          {sections.map((section) => (
            <MenuLink
              key={section.id}
              onClick={() => handleLinkClick(section.id)}
            >
              {section.label[language]}
            </MenuLink>
          ))}
        </MenuNav>

        <LanguageToggle>
          <LanguageButton
            $isActive={language === 'es'}
            onClick={() => handleLanguageChange('es')}
            aria-label="Español"
            aria-pressed={language === 'es'}
          >
            ES
          </LanguageButton>
          <LanguageSeparator>/</LanguageSeparator>
          <LanguageButton
            $isActive={language === 'en'}
            onClick={() => handleLanguageChange('en')}
            aria-label="English"
            aria-pressed={language === 'en'}
          >
            ENG
          </LanguageButton>
        </LanguageToggle>

        <MenuFooter>
          <SocialLinks>
            <SocialLink
              href="https://instagram.com/territorio"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FiInstagram />
            </SocialLink>
            <SocialLink
              href="https://linkedin.com/company/territorio"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FiLinkedin />
            </SocialLink>
          </SocialLinks>
        </MenuFooter>
      </MenuContainer>
    </MenuOverlay>
  )
}

