import { useRef, useEffect, useState } from 'react'
import { FiInstagram, FiLinkedin, FiMessageCircle } from 'react-icons/fi'
import {
  ContactSection,
  SectionTitle,
  ContactContent,
  FormWrapper,
  Form,
  FormField,
  Label,
  Input,
  TextArea,
  SubmitButton,
  InfoWrapper,
  InfoColumn,
  InfoTitle,
  InfoText,
  InfoLink,
  SocialFooter,
  SocialLinks,
  SocialLink,
} from './Contact.styles'
import { texts } from '../../../constants/texts'
import { useLanguage } from '../../../contexts/LanguageContext'

export const Contact = () => {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Formulario no funcional por ahora
  }

  const t = texts[language].contact

  return (
    <ContactSection id="contact" ref={sectionRef}>
      <SectionTitle $isVisible={isVisible}>{t.title}</SectionTitle>

      <ContactContent>
        <FormWrapper>
          <Form onSubmit={handleSubmit}>
            <FormField>
              <Label htmlFor="name">{t.form.name}</Label>
              <Input type="text" id="name" name="name" required />
            </FormField>

            <FormField>
              <Label htmlFor="email">{t.form.email}</Label>
              <Input type="email" id="email" name="email" required />
            </FormField>

            <FormField>
              <Label htmlFor="message">{t.form.message}</Label>
              <TextArea id="message" name="message" rows={6} required />
            </FormField>

            <SubmitButton type="submit">{t.form.submit}</SubmitButton>
          </Form>
        </FormWrapper>

        <InfoWrapper>
          <InfoColumn>
            <InfoTitle>{t.emails.title}</InfoTitle>
            <InfoLink href={`mailto:${t.emails.general}`}>
              {t.emails.general}
            </InfoLink>
            <InfoLink href={`mailto:${t.emails.leandro}`}>
              {t.emails.leandro}
            </InfoLink>
          </InfoColumn>

          <InfoColumn>
            <InfoTitle>{t.offices.ba.title}</InfoTitle>
            <InfoText>{t.offices.ba.address}</InfoText>
            <InfoLink href={`tel:${t.offices.ba.phone.replace(/\s/g, '')}`}>
              {t.offices.ba.phone}
            </InfoLink>
          </InfoColumn>

          <InfoColumn>
            <InfoTitle>{t.offices.mendoza.title}</InfoTitle>
            <InfoText>{t.offices.mendoza.address}</InfoText>
            <InfoLink
              href={`tel:${t.offices.mendoza.phone.replace(/\s/g, '')}`}
            >
              {t.offices.mendoza.phone}
            </InfoLink>
          </InfoColumn>
        </InfoWrapper>
      </ContactContent>

      <SocialFooter>
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
            <FiMessageCircle />
          </SocialLink>
        </SocialLinks>
      </SocialFooter>
    </ContactSection>
  )
}

