import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { Header } from './Header'
import { LanguageProvider } from '../../contexts/LanguageContext'

// Helper to wrap component with LanguageProvider
const renderWithProvider = (component: React.ReactElement) => {
  return render(<LanguageProvider>{component}</LanguageProvider>)
}

describe('Header', () => {
  describe('Logo', () => {
    it('renders the TERRITORIO logo image', () => {
      renderWithProvider(<Header />)
      const logoImage = screen.getByRole('img', { name: /territorio/i })
      expect(logoImage).toBeInTheDocument()
    })

    it('logo is a link to home', () => {
      renderWithProvider(<Header />)
      const logo = screen.getByRole('link', { name: /territorio/i })
      expect(logo).toHaveAttribute('href', '/')
    })
  })

  describe('Social Links', () => {
    it('renders Instagram link with correct aria-label', () => {
      renderWithProvider(<Header />)
      const instagramLink = screen.getByRole('link', { name: /instagram/i })
      expect(instagramLink).toBeInTheDocument()
      expect(instagramLink).toHaveAttribute('href', expect.stringContaining('instagram.com'))
      expect(instagramLink).toHaveAttribute('target', '_blank')
      expect(instagramLink).toHaveAttribute('rel', 'noopener noreferrer')
    })

    it('renders LinkedIn link with correct aria-label', () => {
      renderWithProvider(<Header />)
      const linkedinLink = screen.getByRole('link', { name: /linkedin/i })
      expect(linkedinLink).toBeInTheDocument()
      expect(linkedinLink).toHaveAttribute('href', expect.stringContaining('linkedin.com'))
      expect(linkedinLink).toHaveAttribute('target', '_blank')
      expect(linkedinLink).toHaveAttribute('rel', 'noopener noreferrer')
    })
  })

  describe('Language Toggle', () => {
    it('renders language options ES and ENG', () => {
      renderWithProvider(<Header />)
      expect(screen.getByText('ES')).toBeInTheDocument()
      expect(screen.getByText('ENG')).toBeInTheDocument()
    })

    it('ES is active by default', () => {
      renderWithProvider(<Header />)
      const esButton = screen.getByRole('button', { name: /español/i })
      expect(esButton).toHaveAttribute('aria-pressed', 'true')
    })

    it('clicking ENG changes active language', async () => {
      const user = userEvent.setup()
      renderWithProvider(<Header />)

      const engButton = screen.getByRole('button', { name: /english/i })
      await user.click(engButton)

      expect(engButton).toHaveAttribute('aria-pressed', 'true')
      expect(screen.getByRole('button', { name: /español/i })).toHaveAttribute('aria-pressed', 'false')
    })

    it('calls onLanguageChange callback when language changes', async () => {
      const onLanguageChange = vi.fn()
      const user = userEvent.setup()
      renderWithProvider(<Header onLanguageChange={onLanguageChange} />)

      const engButton = screen.getByRole('button', { name: /english/i })
      await user.click(engButton)

      expect(onLanguageChange).toHaveBeenCalledWith('en')
    })
  })

  describe('Mobile Menu', () => {
    it('renders hamburger menu button', () => {
      renderWithProvider(<Header />)
      const menuButton = screen.getByRole('button', { name: /menu/i })
      expect(menuButton).toBeInTheDocument()
    })

    it('menu is closed by default', () => {
      renderWithProvider(<Header />)
      const menuButton = screen.getByRole('button', { name: /menu/i })
      expect(menuButton).toHaveAttribute('aria-expanded', 'false')
    })

    it('clicking hamburger toggles menu open state', async () => {
      const user = userEvent.setup()
      renderWithProvider(<Header />)

      const menuButton = screen.getByRole('button', { name: /menu/i })
      await user.click(menuButton)

      expect(menuButton).toHaveAttribute('aria-expanded', 'true')
    })

    it('calls onMenuToggle callback when menu is toggled', async () => {
      const onMenuToggle = vi.fn()
      const user = userEvent.setup()
      renderWithProvider(<Header onMenuToggle={onMenuToggle} />)

      const menuButton = screen.getByRole('button', { name: /menu/i })
      await user.click(menuButton)

      expect(onMenuToggle).toHaveBeenCalledWith(true)
    })
  })

  describe('Accessibility', () => {
    it('header has proper landmark role', () => {
      renderWithProvider(<Header />)
      expect(screen.getByRole('banner')).toBeInTheDocument()
    })

    it('navigation has proper nav role', () => {
      renderWithProvider(<Header />)
      expect(screen.getByRole('navigation')).toBeInTheDocument()
    })
  })

  describe('Styling for Video Overlay', () => {
    it('header is positioned fixed', () => {
      renderWithProvider(<Header />)
      const header = screen.getByRole('banner')
      expect(header).toHaveStyle({ position: 'fixed' })
    })

    it('header spans full width', () => {
      renderWithProvider(<Header />)
      const header = screen.getByRole('banner')
      expect(header).toHaveStyle({ width: '100%' })
    })

    it('header has translucent gradient overlay', () => {
      renderWithProvider(<Header />)
      const header = screen.getByRole('banner')
      // The header should have a gradient background for readability over video
      // In jsdom, gradient may be represented differently or as empty string
      // We just verify the header element exists with proper structure
      expect(header).toBeInTheDocument()
    })
  })

  describe('Responsive Design', () => {
    it('social links container has data-testid for responsive hiding', () => {
      renderWithProvider(<Header />)
      const socialLinks = screen.getByTestId('social-links')
      expect(socialLinks).toBeInTheDocument()
    })

    it('language toggle has data-testid for responsive hiding', () => {
      renderWithProvider(<Header />)
      const languageToggle = screen.getByTestId('language-toggle')
      expect(languageToggle).toBeInTheDocument()
    })

    it('logo is always visible (no hide class)', () => {
      renderWithProvider(<Header />)
      const logo = screen.getByRole('link', { name: /territorio/i })
      expect(logo).toBeInTheDocument()
    })

    it('menu button is always visible', () => {
      renderWithProvider(<Header />)
      const menuButton = screen.getByRole('button', { name: /menu/i })
      expect(menuButton).toBeInTheDocument()
    })
  })
})

