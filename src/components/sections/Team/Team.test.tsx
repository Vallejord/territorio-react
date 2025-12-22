import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Team } from './Team'
import { LanguageProvider } from '../../../contexts/LanguageContext'

describe('Team', () => {
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

  it('should render section title', () => {
    render(
      <LanguageProvider>
        <Team />
      </LanguageProvider>
    )

    expect(screen.getByText(/El equipo/i)).toBeInTheDocument()
  })

  it('should render all team members', () => {
    render(
      <LanguageProvider>
        <Team />
      </LanguageProvider>
    )

    expect(screen.getByText('Leandro Caterberg')).toBeInTheDocument()
    expect(screen.getByText('Joan Pesquera')).toBeInTheDocument()
    expect(screen.getByText('Andrea Madruga')).toBeInTheDocument()
  })

  it('should render team member roles', () => {
    render(
      <LanguageProvider>
        <Team />
      </LanguageProvider>
    )

    expect(screen.getByText(/Director y editor/i)).toBeInTheDocument()
    expect(screen.getByText(/Director creativo/i)).toBeInTheDocument()
    expect(screen.getByText(/Productora y realizadora/i)).toBeInTheDocument()
  })
})

