import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { WorkShowcase } from './WorkShowcase'
import { LanguageProvider } from '../../../contexts/LanguageContext'

describe('WorkShowcase', () => {
  it('should render categories banner', () => {
    render(
      <LanguageProvider>
        <WorkShowcase />
      </LanguageProvider>
    )

    expect(screen.getByText(/PUBLICIDAD/i)).toBeInTheDocument()
    expect(screen.getByText(/REDES/i)).toBeInTheDocument()
    expect(screen.getByText(/TV/i)).toBeInTheDocument()
  })

  it('should render project grid', () => {
    render(
      <LanguageProvider>
        <WorkShowcase />
      </LanguageProvider>
    )

    // Verificar que hay elementos del grid (thumbnails)
    const grid = screen.getByTestId('work-grid')
    expect(grid).toBeInTheDocument()
  })
})


