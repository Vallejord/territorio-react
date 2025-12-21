import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MobileMenu } from './MobileMenu'
import { LanguageProvider } from '../../../contexts/LanguageContext'

describe('MobileMenu', () => {
  const mockOnClose = vi.fn()
  const mockOnNavigate = vi.fn()

  it('should render when isOpen is true', () => {
    render(
      <LanguageProvider>
        <MobileMenu isOpen={true} onClose={mockOnClose} onNavigate={mockOnNavigate} />
      </LanguageProvider>
    )

    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })

  it('should not render when isOpen is false', () => {
    render(
      <LanguageProvider>
        <MobileMenu isOpen={false} onClose={mockOnClose} onNavigate={mockOnNavigate} />
      </LanguageProvider>
    )

    expect(screen.queryByRole('navigation')).not.toBeInTheDocument()
  })

  it('should call onClose when close button is clicked', async () => {
    const user = userEvent.setup()
    render(
      <LanguageProvider>
        <MobileMenu isOpen={true} onClose={mockOnClose} onNavigate={mockOnNavigate} />
      </LanguageProvider>
    )

    const closeButton = screen.getByLabelText(/cerrar/i)
    await user.click(closeButton)

    expect(mockOnClose).toHaveBeenCalledTimes(1)
  })

  it('should render navigation links', () => {
    render(
      <LanguageProvider>
        <MobileMenu isOpen={true} onClose={mockOnClose} onNavigate={mockOnNavigate} />
      </LanguageProvider>
    )

    expect(screen.getByText(/trabajo/i)).toBeInTheDocument()
    expect(screen.getByText(/equipo/i)).toBeInTheDocument()
    expect(screen.getByText(/contacto/i)).toBeInTheDocument()
  })
})

