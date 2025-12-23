import { useRef, useEffect, useState } from 'react'
import {
  ContactSection,
  SectionTitle,
  FormWrapper,
  Form,
  FormField,
  Label,
  Input,
  TextArea,
  SubmitButton,
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
    </ContactSection>
  )
}

