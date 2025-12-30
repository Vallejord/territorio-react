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
import { API_CONFIG } from '../../../config/api'

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

export const Contact = () => {
  const { language } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMessage, setErrorMessage] = useState<string>('')
  const sectionRef = useRef<HTMLElement>(null)
  const formRef = useRef<HTMLFormElement>(null)

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (status === 'loading') return // Prevenir múltiples envíos

    const form = e.currentTarget as HTMLFormElement
    const formData = new FormData(form)
    
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const message = formData.get('message') as string

    // Validación client-side
    if (!name || !email || !message) {
      setStatus('error')
      setErrorMessage(language === 'es' 
        ? 'Por favor completa todos los campos'
        : 'Please fill in all fields')
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setStatus('error')
      setErrorMessage(language === 'es'
        ? 'Por favor ingresa un email válido'
        : 'Please enter a valid email')
      return
    }

    setStatus('loading')
    setErrorMessage('')

    try {
      const response = await fetch(API_CONFIG.contactEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message')
      }

      setStatus('success')
      formRef.current?.reset()
      
      // Resetear mensaje de éxito después de 5 segundos
      setTimeout(() => {
        setStatus('idle')
      }, 5000)

    } catch (error) {
      console.error('Error submitting contact form:', error)
      setStatus('error')
      setErrorMessage(
        error instanceof Error
          ? error.message
          : language === 'es'
          ? 'Error al enviar el mensaje. Por favor intenta nuevamente.'
          : 'Error sending message. Please try again.'
      )
    }
  }

  const t = texts[language].contact

  return (
    <ContactSection id="contact" ref={sectionRef}>
      <SectionTitle $isVisible={isVisible}>{t.title}</SectionTitle>

      <FormWrapper>
        <Form ref={formRef} onSubmit={handleSubmit}>
          {status === 'success' && (
            <FormField>
              <div style={{ 
                color: '#ffffff', 
                padding: '1rem', 
                backgroundColor: 'rgba(0, 255, 0, 0.1)',
                border: '1px solid rgba(0, 255, 0, 0.3)'
              }}>
                {language === 'es' 
                  ? '¡Mensaje enviado exitosamente! Te contactaremos pronto.'
                  : 'Message sent successfully! We will contact you soon.'}
              </div>
            </FormField>
          )}

          {status === 'error' && errorMessage && (
            <FormField>
              <div style={{ 
                color: '#ff6b6b', 
                padding: '1rem', 
                backgroundColor: 'rgba(255, 107, 107, 0.1)',
                border: '1px solid rgba(255, 107, 107, 0.3)'
              }}>
                {errorMessage}
              </div>
            </FormField>
          )}

          <FormField>
            <Label htmlFor="name">{t.form.name}</Label>
            <Input 
              type="text" 
              id="name" 
              name="name" 
              required 
              disabled={status === 'loading'}
            />
          </FormField>

          <FormField>
            <Label htmlFor="email">{t.form.email}</Label>
            <Input 
              type="email" 
              id="email" 
              name="email" 
              required 
              disabled={status === 'loading'}
            />
          </FormField>

          <FormField>
            <Label htmlFor="message">{t.form.message}</Label>
            <TextArea 
              id="message" 
              name="message" 
              rows={6} 
              required 
              disabled={status === 'loading'}
            />
          </FormField>

          <SubmitButton 
            type="submit" 
            disabled={status === 'loading'}
          >
            {status === 'loading' 
              ? (language === 'es' ? 'Enviando...' : 'Sending...')
              : t.form.submit}
          </SubmitButton>
        </Form>
      </FormWrapper>
    </ContactSection>
  )
}

