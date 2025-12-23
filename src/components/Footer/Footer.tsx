import { FiInstagram, FiLinkedin, FiMessageSquare } from 'react-icons/fi'
import {
  FooterWrapper,
  FooterContent,
  ContactInfo,
  InfoColumn,
  InfoTitle,
  InfoText,
  InfoLink,
  SocialSection,
  SocialLinks,
  SocialLink,
  FooterBottom,
  Credit,
} from './Footer.styles'
import { texts } from '../../constants/texts'
import { useLanguage } from '../../contexts/LanguageContext'

export const Footer = () => {
  const { language } = useLanguage()
  const t = texts[language].contact

  return (
    <FooterWrapper>
      <FooterContent>
        <ContactInfo>
          <InfoColumn $align="left">
            <InfoTitle>{t.emails.title}</InfoTitle>
            <InfoLink href={`mailto:${t.emails.general}`}>
              {t.emails.general}
            </InfoLink>
            <InfoLink href={`mailto:${t.emails.leandro}`}>
              {t.emails.leandro}
            </InfoLink>
          </InfoColumn>

          <InfoColumn $align="center">
            <InfoTitle>{t.offices.ba.title}</InfoTitle>
            <InfoText>{t.offices.ba.address}</InfoText>
            <InfoLink href={`tel:${t.offices.ba.phone.replace(/\s/g, '')}`}>
              {t.offices.ba.phone}
            </InfoLink>
          </InfoColumn>

          <InfoColumn $align="right">
            <InfoTitle>{t.offices.mendoza.title}</InfoTitle>
            <InfoText>{t.offices.mendoza.address}</InfoText>
            <InfoLink
              href={`tel:${t.offices.mendoza.phone.replace(/\s/g, '')}`}
            >
              {t.offices.mendoza.phone}
            </InfoLink>
          </InfoColumn>
        </ContactInfo>
      </FooterContent>

      <SocialSection>
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
          <SocialLink
            href="https://wa.me/5491150501840"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <FiMessageSquare />
          </SocialLink>
        </SocialLinks>
      </SocialSection>

      <FooterBottom>
        <Credit>Desarrollo web Vallejord</Credit>
      </FooterBottom>
    </FooterWrapper>
  )
}

