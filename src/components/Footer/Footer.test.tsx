import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'
import { LanguageProvider } from '../../contexts/LanguageContext'

describe('Footer', () => {
  it('should render contact information', () => {
    render(
      <LanguageProvider>
        <Footer />
      </LanguageProvider>
    )

    expect(screen.getByText(/EMAILS/i)).toBeInTheDocument()
    expect(screen.getByText(/hola@territorio.com.ar/i)).toBeInTheDocument()
    expect(screen.getByText(/Oficina Buenos Aires/i)).toBeInTheDocument()
    expect(screen.getByText(/Oficina Mendoza/i)).toBeInTheDocument()
  })

  it('should render social media icons', () => {
    render(
      <LanguageProvider>
        <Footer />
      </LanguageProvider>
    )

    expect(screen.getByLabelText(/Instagram/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/LinkedIn/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/WhatsApp/i)).toBeInTheDocument()
  })

  it('should render development credit', () => {
    render(
      <LanguageProvider>
        <Footer />
      </LanguageProvider>
    )

    expect(screen.getByText(/Desarrollo web Vallejord/i)).toBeInTheDocument()
  })
})

