import { useState } from 'react'
import { FiInstagram, FiLinkedin, FiMenu, FiX } from 'react-icons/fi'
import {
  HeaderWrapper,
  HeaderContent,
  LogoLink,
  LogoImage,
  RightSection,
  SocialLinks,
  SocialLink,
  LanguageToggle,
  LanguageButton,
  LanguageSeparator,
  MenuButton,
} from './Header.styles'
import logoSrc from '../../assets/isologo-logo-blanco.png'
import { useLanguage } from '../../contexts/LanguageContext'
import { MobileMenu } from '../features/MobileMenu'

export interface HeaderProps {
  onLanguageChange?: (lang: 'es' | 'en') => void
  onMenuToggle?: (isOpen: boolean) => void
}

export const Header = ({ onLanguageChange, onMenuToggle }: HeaderProps) => {
  const { language, setLanguage } = useLanguage()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleLanguageChange = (lang: 'es' | 'en') => {
    setLanguage(lang)
    onLanguageChange?.(lang)
  }

  const handleMenuToggle = () => {
    const newState = !isMenuOpen
    setIsMenuOpen(newState)
    onMenuToggle?.(newState)
  }

  return (
    <>
      <HeaderWrapper>
        <HeaderContent>
          <LogoLink href="/">
            <LogoImage src={logoSrc} alt="Territorio" />
          </LogoLink>

          <RightSection>
            <SocialLinks data-testid="social-links">
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

            <LanguageToggle data-testid="language-toggle">
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

            <MenuButton
              onClick={handleMenuToggle}
              aria-label="Menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <FiX /> : <FiMenu />}
            </MenuButton>
          </RightSection>
        </HeaderContent>
      </HeaderWrapper>

      <MobileMenu
        isOpen={isMenuOpen}
        onClose={handleMenuToggle}
        onNavigate={(sectionId) => {
          console.log('Navigate to:', sectionId)
        }}
      />
    </>
  )
}
