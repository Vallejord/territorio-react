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

})

