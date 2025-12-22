import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Contact } from './Contact'
import { LanguageProvider } from '../../../contexts/LanguageContext'

describe('Contact', () => {
  beforeEach(() => {
    global.IntersectionObserver = class IntersectionObserver {
      observe = vi.fn()
      disconnect = vi.fn()
      unobserve = vi.fn()
      constructor() {}
    } as unknown as typeof IntersectionObserver
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  const renderWithProvider = (component: React.ReactElement) => {
    return render(<LanguageProvider>{component}</LanguageProvider>)
  }

  it('should render the contact title', () => {
    renderWithProvider(<Contact />)
    expect(
      screen.getByText(/¿Querés contactarnos por un proyecto/i)
    ).toBeInTheDocument()
  })

  it('should render form fields', () => {
    renderWithProvider(<Contact />)
    expect(screen.getByLabelText(/NOMBRE/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/MAIL/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/MENSAJE/i)).toBeInTheDocument()
  })

  it('should render email information', () => {
    renderWithProvider(<Contact />)
    expect(screen.getByText(/hola@territorio.com.ar/i)).toBeInTheDocument()
    expect(
      screen.getByText(/leandrocaterberg@territorio.com.ar/i)
    ).toBeInTheDocument()
  })

  it('should render office information', () => {
    renderWithProvider(<Contact />)
    expect(screen.getByText(/Buenos Aires/i)).toBeInTheDocument()
    expect(screen.getByText(/Mendoza/i)).toBeInTheDocument()
  })

  it('should render social media icons', () => {
    renderWithProvider(<Contact />)
    expect(screen.getByLabelText(/Instagram/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/LinkedIn/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/WhatsApp/i)).toBeInTheDocument()
  })
})

