import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CurrentProjects } from './CurrentProjects'
import { LanguageProvider } from '../../../contexts/LanguageContext'

describe('CurrentProjects', () => {
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
        <CurrentProjects />
      </LanguageProvider>
    )

    expect(screen.getByText(/Proyectos en curso/i)).toBeInTheDocument()
  })

  it('should render both projects', () => {
    render(
      <LanguageProvider>
        <CurrentProjects />
      </LanguageProvider>
    )

    expect(screen.getByText('POLO')).toBeInTheDocument()
    expect(screen.getByText('Territorio')).toBeInTheDocument()
  })

  it('should render project statuses', () => {
    render(
      <LanguageProvider>
        <CurrentProjects />
      </LanguageProvider>
    )

    // Verificar que los estados están presentes (pueden aparecer en subtitle y badge)
    const preProduction = screen.getAllByText(/Pre producción/i)
    const postProduction = screen.getAllByText(/Post producción/i)
    expect(preProduction.length).toBeGreaterThan(0)
    expect(postProduction.length).toBeGreaterThan(0)
  })
})

